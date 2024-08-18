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
            defaultValue={undefined}
            type="single"
            collapsible
        >
            <AccordionItem
                className="border-b border-border first:border-t w-full"
                value="item-1"
            >
                <AccordionTrigger className="flex items-center tablet:items-center w-full py-5 hover:bg-primary/20">
                    <div className="flex flex-col tablet:flex-row grow">
                        <div className="tablet:w-1/5 text-xs mb-2 text-start">
                            2024 SAT - 2024 SAT
                        </div>
                        <div className="tablet:w-1/5">
                            <div className="text-start">Xin Flight </div>
                            <div className="text-secondaryText text-start">Lion Travel </div>
                        </div>
                    </div>
                    <Link
                        href={"https://flight.liontravel.com/search"}
                        className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                        target={"_blank"}
                    >
                        visit
                    </Link>
                </AccordionTrigger>
                <AccordionContent className="my-4 tablet:my-5">
                    <p className="mb-4">
                        {`
                            Led the end-to-end frontend development of the Xin Flight project, from conception to completion. Assisted in implementing Server-Side Rendering ( SSR ) for the company's website, significantly enhancing user experience and SEO performance. 
                        `}
                    </p>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">NextJS</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Typescript</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Tailwind CSS</div>
                    </div>
                    <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                        <Image
                            src={fuji}
                            alt="fuji"
                            width={400}
                            height={200}
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            width={400}
                            height={200}
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={fuji}
                            alt="fuji"
                            width={400}
                            height={200}
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem
                className="border-b border-border first:border-t w-full"
                value="item-2"
            >
                <AccordionTrigger className="flex items-center tablet:items-center w-full py-5 hover:bg-primary/20">
                    <div className="flex flex-col tablet:flex-row grow">
                        <div className="tablet:w-1/5 text-xs mb-2 text-start">
                            2024 SAT - 2024 SAT
                        </div>
                        <div className="tablet:w-1/5">
                            <div className="text-start">Lion Travel Flight </div>
                            <div className="text-secondaryText text-start">Lion Travel </div>
                        </div>
                    </div>
                    <Link
                        href={"https://flight.liontravel.com/search"}
                        className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                        target={"_blank"}
                    >
                        visit
                    </Link>
                </AccordionTrigger>
                <AccordionContent className="my-4 tablet:my-5">
                    <p className="mb-4">
                        {`
                            Led the frontend projects for Lion Travel's B2C products, focusing on the development and maintenance of the flight booking system, enhancing system performance and user experience.
                        `}
                    </p>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">React</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Typescript</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Redux</div>
                    </div>
                    <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                        <Image
                            src={'/images/lion-travel-flight-1.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={'/images/lion-travel-flight-2.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={'/images/lion-travel-flight-3.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem
                className="border-b border-border first:border-t w-full"
                value="item-3"
            >
                <AccordionTrigger className="flex items-center tablet:items-center w-full py-5 hover:bg-primary/20">
                    <div className="flex flex-col tablet:flex-row grow">
                        <div className="tablet:w-1/5 text-xs mb-2 text-start">
                            2024 SAT - 2024 SAT
                        </div>
                        <div className="tablet:w-1/5">
                            <div className="text-start">Xin Media</div>
                            <div className="text-secondaryText text-start">Lion Travel </div>
                        </div>
                    </div>
                    <Link
                        href={"https://www.xinmedia.com/"}
                        className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                        target={"_blank"}
                    >
                        visit
                    </Link>
                </AccordionTrigger>
                <AccordionContent className="my-4 tablet:my-5">
                    <p className="mb-4">
                        {`
                            Collaborated with the Xin Media team on feature development and page creation, contributing to a smooth user experience. Worked alongside designers and engineers to enhance product quality, helping to develop the website into a key project for the company.
                        `}
                    </p>
                    <div className="flex gap-2 mb-4">
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Next.js</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Typescript</div>
                        <div className="bg-tag rounded-full px-3 py-1 text-sm">Tailwind CSS</div>
                    </div>
                    <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                        <Image
                            src={'/images/xin-media-1.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={'/images/xin-media-2.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                        <Image
                            src={'/images/xin-media-3.png'}
                            width={400}
                            height={200}
                            alt="fuji"
                            className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                        ></Image>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </AccordionRoot>
    );
}

export default ProjectList;
