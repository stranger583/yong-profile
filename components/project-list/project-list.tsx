"use client";
import {
    AccordionRoot,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
} from "@components/ui/accordion";
import Link from "next/link";
import Image from "next/image";
import fuji from "@public/images/fuji.jpg";

function ProjectList() {
    return (
        <AccordionRoot
            className="max-w-[1280px] mx-auto px-5"
            defaultValue="item-1"
            type="single"
            collapsible
        >
            <AccordionItem
                className="border-b border-card first:border-t w-full"
                value="item-1"
            >
                <AccordionTrigger className="flex items-center tablet:items-center w-full py-5 hover:bg-primary/20">
                    <div className="flex flex-col tablet:flex-row grow">
                        <div className="tablet:w-1/5 text-xs mb-2 text-start">
                            2024 SAT - 2024 SAT
                        </div>
                        <div className="tablet:w-1/5">
                            <div className="text-start">Lion Travel B2C Flight </div>
                            <div className="text-secondaryText text-start">Lion Travel </div>
                        </div>
                    </div>
                    <Link
                        href={"./"}
                        className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                    >
                        visit
                    </Link>
                </AccordionTrigger>
                <AccordionContent className="my-4 tablet:my-5">
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                        incidunt animi iste ipsa nostrum. Placeat deserunt vero possimus at
                        earum veritatis nobis, accusamus reprehenderit nisi quos, ex enim
                        dignissimos! Nisi?
                    </p>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                    </div>
                    <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem
                className="border-b border-card first:border-t w-full"
                value="item-2"
            >
                <AccordionTrigger className="flex items-center tablet:items-center w-full py-5 hover:bg-primary/20">
                    <div className="flex flex-col tablet:flex-row grow">
                        <div className="tablet:w-1/5 text-xs mb-2 text-start">
                            2024 SAT - 2024 SAT
                        </div>
                        <div className="tablet:w-1/5">
                            <div className="text-start">Lion Travel B2C Flight </div>
                            <div className="text-secondaryText text-start">Lion Travel </div>
                        </div>
                    </div>
                    <Link
                        href={"./"}
                        className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                    >
                        visit
                    </Link>
                </AccordionTrigger>
                <AccordionContent className="my-4 tablet:my-5">
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
                        incidunt animi iste ipsa nostrum. Placeat deserunt vero possimus at
                        earum veritatis nobis, accusamus reprehenderit nisi quos, ex enim
                        dignissimos! Nisi?
                    </p>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                    </div>
                    <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            className="tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </AccordionRoot>
    );
}

export default ProjectList;
