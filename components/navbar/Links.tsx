import Link from "next/link"
import { links } from "@/app/utils/links"



function Links() {
    return (
        <>
        { links.map((link) =>{
                return(
                    <Link key={link.href} href={link.href} className="uppercase font-bold cursor-pointer hover:text-emerald-600">
                        {link.label}
                    </Link>
                )
                })
            }
        </>
            
    )
}

export default Links