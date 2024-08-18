'use client'
import Link from "next/link";
import Menu from "@components/menu/menu";

function Header() {
    return (
        <div className="relative flex flex-col items-center tablet:items-center mx-auto max-w-[1280px] w-full py-6 mb-6 tablet:mb-10 z-20">
            <div className="flex w-full justify-between">
                <menu className="py-2 w-max self-end text-sm">
                    <Link href='./'>Yong</Link>
                </menu>
                <Menu />
            </div>
        </div>
    )
}

export default Header
