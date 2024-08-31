import "./globals.css";
import dynamic from "next/dynamic";
import Image from "next/image";
import fuji from "@public/images/fuji.jpg";
import Link from "next/link";
import ProjectList from "@components/project-list/project-list";
import Header from "@components/header/header";
import HomeTitle from "@components/home-title/home-title";
const Ripper = dynamic(() => import("../components/ripper/ripper"), {
  loading: () => <div className="fixed top-0 left-0 z-[70] bg-background w-full h-dvh "></div>,
});

export default function Home() {
  return (
    <>
      <Ripper />
      <div className="relative mx-auto min-h-dvh mb-5 tablet:mb-10 px-3">
        <Header />
        <div className="flex flex-col items-center tablet:items-start max-w-[1280px] absolute -translate-x-1/2 top-0 left-1/2 w-full h-full z-10">
          <HomeTitle />
          <p className="tablet:ml-3 text-center tablet:text-left absolute bottom-5 w-10/12 text-sm text-wrap tablet:text-base tablet:max-w-[600px]">
            {`
                A frontend developer skilled in React and Next.js, focused on implementing best practices to create exceptional websites.
              `}
          </p>
          <div className="mx-3 flex max-w-40 flex-col items-center absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 tablet:translate-x-0 tablet:-translate-y-0 tablet:right-auto tablet:bottom-5 self-end">
            <HomeTitle isMobile />
            <Image
              src={fuji}
              alt="fuji"
              className="size-40 object-cover mb-4"
              placeholder="blur"
            />
            <div className="mb-1 text-center">Yong Hua Chen</div>
            <div className="mb-5">Frond End Developer</div>
            <Link
              href={"./about"}
              className="block border rounded py-1 w-full text-center hover:bg-white hover:text-black"
              prefetch
            >
              visit
            </Link>
          </div>
        </div>
      </div>
      <ProjectList />
    </>
  );
}
