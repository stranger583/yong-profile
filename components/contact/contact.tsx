import Link from "next/link"
function Contact() {
    return (
        <div className="hidden self-end tablet:flex justify-end w-full max-w-[1280px] mx-auto">
            <div className="text-sm tablet:flex flex-col gap-1">
                <div>Contact</div>
                <Link href='https://www.linkedin.com/in/cozy-chen-508a68280/' className="cursor-pointer">Linkedin</Link>
                <Link href='https://www.cakeresume.com/me/zed042760' className="cursor-pointer">Cake</Link>
            </div>
        </div>
    )
}

export default Contact
