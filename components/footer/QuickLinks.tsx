import { links } from "@/app/utils/links"
import Link from "next/link"

function QuickLinks() {
  return (
    <div className="flex flex-col">
    <h5 className="text-white mb-4">Quick Links</h5>
    <ul className="uppercase">
      {links.map((link)=>{
        return (
          <li className="cursor-pointer hover:text-emerald-600 text-sm" key={link.href}>
            <Link
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        );
      }) }
    </ul>
    </div>
  )
}

export default QuickLinks