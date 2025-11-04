import Link from "next/link"
import { Button } from "../ui/button"


function Logo() {
  return (
    <Button asChild>
      <Link href='/' >
        {/* <img src='' alt="logo"/> */}
      </Link>
    </Button>
  )
}

export default Logo