'use client'

import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
    DrawerClose
} from "@components/ui/drawer"
import Link from "next/link"
import Button from "@components/ui/button"

function Menu() {
    return (
        <Drawer>
            <DrawerTrigger className="py-2 w-max self-end text-sm">
                Menu
            </DrawerTrigger>
            <DrawerContent className="p-4 border border-border">
                <DrawerHeader className="border-b border-border mb-2">
                    <DrawerTitle className="mb-1 font-bold">Menu</DrawerTitle>
                </DrawerHeader>
                <DrawerHeader>
                    <DrawerTitle className="mb-4">Action</DrawerTitle>
                    <DrawerDescription className="flex flex-col gap-2">
                        <DrawerClose>
                            <Button type="button">Lang</Button>
                        </DrawerClose>
                    </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <DrawerTitle className="mb-4 text-center">Navigation</DrawerTitle>
                    <DrawerDescription className="flex flex-col gap-2">
                        <DrawerClose>
                            <Link href='./'>Home</Link>
                        </DrawerClose>
                        <DrawerClose>
                            <Link href='./about'>About</Link>
                        </DrawerClose>
                    </DrawerDescription>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default Menu
