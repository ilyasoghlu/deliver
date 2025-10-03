import { socialLinks } from "@/app/utils/socialLinks"
import { Button } from "../ui/button"
import Link from "next/link"

function SocialLinks() {
    return (
        <>
            {socialLinks.map((link) =>{
                    const {icon, label, href} = link
                    return (
                    <Button
                        size="icon"
                        variant="outline"
                        className="w-6 h-6 rounded-full"
                        key={href}
                    >
                        <Link href={href}>{label}</Link>
                    </Button>
                    );
                })}
        </>
        
    )
}

export default SocialLinks