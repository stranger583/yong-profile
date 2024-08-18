"use client";
import Link from "next/link";
import Image from "next/image";
import { type ProjectProps, type ProjectImageProps, Projects } from "@constants//projects"
import {
    AccordionRoot,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
} from "@components/ui/accordion";


function ProjectList() {
    return (
        <AccordionRoot
            className="max-w-[1280px] mx-auto px-5"
            defaultValue={undefined}
            type="single"
            collapsible
        >
            {
                Projects.map((project: ProjectProps) => (
                    <AccordionItem
                        key={project.title}
                        value={project.title}
                    >
                        <AccordionTrigger>
                            <div className="flex flex-col tablet:flex-row grow">
                                <div className="tablet:w-1/5 text-xs mb-2 text-start">
                                    {project.date}
                                </div>
                                <div className="tablet:w-1/5">
                                    <div className="text-start">{project.title} </div>
                                    <div className="text-secondaryText text-start">{project.compony} </div>
                                </div>
                            </div>
                            {project.href.length !== 0 && <Link
                                href={project.href}
                                className="bg-primary font-bold text-black px-6 py-2 rounded h-max"
                                target={"_blank"}
                            >
                                visit
                            </Link>}
                        </AccordionTrigger>
                        <AccordionContent>
                            <p className="mb-4">
                                {project.desc}
                            </p>
                            <div className="flex gap-2 mb-4">
                                {project.tags.map((tag: string) => (
                                    <div key={tag} className="bg-tag rounded-full px-3 py-1 text-sm">{tag}</div>

                                ))}
                            </div>
                            <div className="flex w-full flex-wrap gap-2 tablet:gap-0">
                                {project.images.map((image: ProjectImageProps) => (
                                    <Image
                                        key={image.alt}
                                        src={image.url}
                                        alt={image.alt}
                                        width={400}
                                        height={200}
                                        className="max-h-52 tablet:w-1/3 tablet:px-1 object-cover"
                                    />

                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </AccordionRoot>
    );
}

export default ProjectList;
