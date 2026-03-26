'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "@/utils/links"

function Links() {

  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {

        const isActive = pathname === link.href

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              uppercase font-bold cursor-pointer
              hover:text-emerald-600
              ${isActive ? "text-emerald-600" : ""}
            `}
          >

            {link.label}

          </Link>
        )

      })}
    </>
  )

}

export default Links