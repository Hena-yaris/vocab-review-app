

import {UserPen} from "lucide-react";
import formatEthiopianDate from "@/lib/date";


export default function AddPage (){



  return (
    <section className="min-h-screen bg-slate-50 ">
      
      {/* Header */}
      <header className="flex items-center px-12 justify-between h-16 bg-white">
        {/* day */}
        <p className="bg-slate-200  h-10 flex items-center justify-center flex-1 rounded-full mr-8 ">{formatEthiopianDate()}</p>
        <div className="bg-slate-200 p-3 rounded-full">
            <UserPen size={20}/>
        </div>
      </header>

     
    </section>
  );
}