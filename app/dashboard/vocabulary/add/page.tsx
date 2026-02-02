"use client"

import { useState } from "react";



export default function AddPage() {
    const [vocab, setVocab] = useState({
        term: "",
        type: "",
        meaning: "",
        example: "",
        source: "",
        tags: "",
    })

const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
        const res = await fetch("/api/vocabulary/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...vocab,
                tags: vocab.tags.split(",").map((t)=> t.trim()),
                
            })
            
        });

        

        if(!res.ok) {
            const errorData = await res.json();
            alert(errorData.message|| "something went wrong");
            return;
        }

        const data = await res.json();
        console.log("saved", data);

        //reset form data
         setVocab({
           term: "",
           type: "",
           meaning: "",
           example: "",
           source: "",
           tags: "",
         });
    }catch(err){
        console.error(err)
        return
    }


}


  return (
    <div className="max-w-xl mx-auto mt-12 space-y-6">
      <h1 className="text-2xl font-semibold text-foreground">Add Vocabulary</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="term" className="text-sm text-muted">
            Word / Phrase
          </label>
          <input
            id="term"
            type="text"
            value={vocab.term}
            onChange={(e) => setVocab({ ...vocab, term: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="type" className="text-sm text-muted">
            Type
          </label>
          <input
            id="type"
            type="text"
            value={vocab.type}
            onChange={(e) => setVocab({ ...vocab, type: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="meaning" className="text-sm text-muted">
            Meaning
          </label>
          <textarea
            id="meaning"
            value={vocab.meaning}
            onChange={(e) => setVocab({ ...vocab, meaning: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
            rows={3}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="example" className="text-sm text-muted">
            Example
          </label>
          <textarea
            id="example"
            value={vocab.example}
            onChange={(e) => setVocab({ ...vocab, example: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
            rows={3}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="source" className="text-sm text-muted">
            Source
          </label>
          <input
            id="source"
            type="text"
            value={vocab.source}
            onChange={(e) => setVocab({ ...vocab, source: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tags" className="text-sm text-muted">
            Tags
          </label>
          <input
            id="tags"
            type="text"
            placeholder="e.g. movie, podcast"
            value={vocab.tags}
            onChange={(e) => setVocab({ ...vocab, tags: e.target.value })}
            className="border border-border rounded-md px-3 py-2 bg-background"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded-md bg-foreground text-background px-4 py-2 text-sm"
        >
          Save
        </button>
      </form>
    </div>
  );
}
