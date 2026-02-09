import { Vocabulary } from "@/types/Vocabulary";

const VocabularyReCard = ({word,meaning}: Vocabulary)=> {

    return (
      <div
        className="bg-white p-6 rounded-2xl  border border-slate-200"
      >
            <h4 className="font-semibold pb-1">{word}</h4>
            <p className="text-slate-500">{meaning}</p>
      </div>
    );
}


export default VocabularyReCard;