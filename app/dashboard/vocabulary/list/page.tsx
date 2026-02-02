


async function getAllVocabulary(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/vocabulary/list`, {
    cache: "no-store", // fresh data
  })

  if(!res.ok){
    throw new Error("Failed to fetch vocabulary")
  }

  return res.json();
}



export default async function vocabularyPage() {
  const vocabulary = await getAllVocabulary();

  return (
    <div>
      <h1>Vocabulary List</h1>

      {vocabulary.map((v: any) => (
        <div
          key={v._id}
          className="mb-4 border p-3 rounded bg-gradient-to-r from-teal-400 to-blue-600
"
        >
          <p>
            <strong>Term:</strong> {v.term}
          </p>
          <p>
            <strong>Type:</strong> {v.type}
          </p>
          <p>
            <strong>Meaning:</strong> {v.meaning}
          </p>

          {v.example && (
            <p>
              <strong>Example:</strong> {v.example}
            </p>
          )}

          {v.tags?.length > 0 && (
            <p>
              <strong>Tags:</strong> {v.tags.join(", ")}
            </p>
          )}

          <p>
            <strong>Created:</strong>{" "}
            {new Date(v.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
