import Card from "./Card";
import { MainLink } from "@/types/mainLink";
import Link from "next/link";


 const ActionCard = ({title,description,href,icon:Icon,iconColor,iconBg}: MainLink)=> {

    return (
      <Link href={href}>
        <Card className="flex items-center p-6 gap-6 hover:shadow-xl transition-shadow duration-300">
          <div
            className={`flex items-center justify-center ${iconBg} p-4 rounded-full`}
          >
            <Icon className={`w-6 h-6 ${iconColor} `} />
          </div>

          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-slate-600 text-base">{description}</p>
          </div>
        </Card>
      </Link>
    );
}

export default ActionCard