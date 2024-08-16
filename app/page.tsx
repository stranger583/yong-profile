'use client'
import dynamic from "next/dynamic";
import "./globals.css";
import Image from "next/image";
import fuji from "@public/images/fuji.jpg";
import Link from "next/link";
import ProjectList from "@components/project-list/project-list";


const Ripper = dynamic(() => import("../components/ripper/ripper"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <div className="w-full pb-10">
      <div className="w-full h-dvh relative mb-10">
        <Ripper />
        <div className="flex flex-col items-center tablet:items-start max-w-[1280px] absolute -translate-x-1/2 top-0 left-1/2 w-full h-full z-10 p-6">
          <div className="flex w-full justify-between">
            <menu className="py-2 w-max self-end text-sm">Yong</menu>
            <menu className="py-2 w-max self-end text-sm">Menu</menu>
          </div>
          <div className="my-10 tablet:my-0 p-2 tablet:p-0 tablet:h-16 flex text-base tablet:text-2xl tablet:items-center tablet:absolute tablet:-translate-x-1/2 tablet:-translate-y-1/2 top-1/2 left-1/2">
            <div className="w-max px-2 border-r tablet:px-9">Yong Chen </div>
            <div className="w-max px-2 tablet:block tablet:px-9">
              Frond End Developer
            </div>
          </div>
          <p className="text-center tablet:text-left absolute bottom-5 w-10/12 text-sm text-wrap tablet:text-base tablet:max-w-[600px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            doloremque error debitis veniam similique. Corporis vitae vero sequi
            voluptates adipisci{" "}
          </p>
          <div className="flex max-w-40 flex-col items-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 tablet:translate-x-0 tablet:-translate-y-0 tablet:right-auto tablet:bottom-5 self-end">
            <Image
              src={fuji}
              alt="fuji"
              className="size-40 object-cover mb-4"
            />
            <div className="mb-1 text-center">Yong Hua Chen</div>
            <div className="mb-5">Frond End Developer</div>
            <Link
              href={"./about"}
              className="block border rounded py-1 w-full text-center hover:bg-white hover:text-black"
            >
              visit
            </Link>
          </div>
        </div>
      </div>
      <ProjectList/>
    </div>
  );
}
