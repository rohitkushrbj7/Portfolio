
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SiX, SiGithub,SiLinkedin, SiInstagram } from "react-icons/si";
const Navbar = ({className}:{className?:string}) => {

    const socials = [
        {
            link:"https://www.linkedin.com/in/rohit-kumar-a04939216/",
            label:"LinkedIN",
            Icon: SiLinkedin,
        },
        {
            link:"https://github.com/rohitkushrbj7",
            label:"GitHub",
            Icon:SiGithub,
        },
        {
            link:"https://www.instagram.com/r.o.h.i.t._kush/",
            label:"Instagram",
            Icon: SiInstagram,
        },
        {
            link:"https://x.com/ROHITKUSHAWAHA1?t=Pu3jvYxPqy6wg2_Rtmcd7A&s=09&mx=2",
            label:"X",
            Icon:SiX,
        }

    ]
  return (
   <nav className={cn("py-10 flex justify-between items-center animate-move-down", className)}>
    <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Rohit Kumar 🧿</h1>
    <div className="flex items-center gap-5">
        {socials.map((elem,index)=>{
            const Icon = elem.Icon;
            return <Link href={elem.link}  key={index} aria-label={elem.label} >
                <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
        })}
    </div>
   </nav>
  )
}

export default Navbar