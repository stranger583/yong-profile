import "../globals.css";
import Image from "next/image";
import me from "@public/images/me.jpg";
import GradientBg from "@components/gradient/gradient-bg";

function page() {
  return (
    <>
      <GradientBg />
      <div className="mx-auto min-h-dvh px-3">
        <div className="flex flex-col items-center tablet:items-center mx-auto max-w-[1280px] w-full py-6 mb-6 tablet:mb-10">
          <div className="flex w-full justify-between">
            <menu className="py-2 w-max self-end text-sm">Yong</menu>
            <menu className="py-2 w-max self-end text-sm">Menu</menu>
          </div>
        </div>
        <div className="mb-4 tablet:mb-0 max-w-[1280px] w-full mx-auto tablet:flex justify-center gap-[200px] shrink-0">
          <div className=" shrink-0">
            <div className="flex flex-col items-center mb-10">
              <div className="text-3xl">Yong Hua Chen</div>
              <div className="text-secondaryText">Frond End Developer</div>
              <div className="relative">
                <h1 className="text-secondary absolute -rotate-90 bottom-12 -left-3 font-bold text-[52px] w-max -translate-x-1/2 -translate-y-1/2 font-serif">
                  About me
                </h1>
                <Image
                  src={me}
                  alt="me"
                  className="size-52 object-cover my-8 "
                />
              </div>
              <div className="text-secondaryText">based in Taiwan</div>
            </div>
            <div className="after:block tablet:after:hidden after:border-b after:border-card after:my-10">
              <div className="mb-6">skills</div>
              <ul>
                <li className="flex items-center gap-2 before:inline-block before:size-1.5 before:bg-white before:rounded-full">
                  Next.js
                </li>
                <li className="flex items-center gap-2 before:inline-block before:size-1.5 before:bg-white before:rounded-full">
                  React
                </li>
                <li className="flex items-center gap-2 before:inline-block before:size-1.5 before:bg-white before:rounded-full">
                  Tailwind CSS
                </li>
                <li className="flex items-center gap-2 before:inline-block before:size-1.5 before:bg-white before:rounded-full">
                  Typescript
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[600px] grow-0 ">
            <div className="w-full after:block after:border-b after:border-secondaryText after:my-10">
              <div className="mb-6">more</div>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                doloremque error debitis veniam similique. Corporis vitae vero
                sequi voluptates adipisci{" "}
              </p>
            </div>
            <div>
              <div className="mb-6">work</div>
              <div className="w-full flex gap-5 flex-wrap">
                <div className="">
                  <p className="text-sm font-bold">2024 SAT - 2024 SAT</p>
                  <p className="text-lg font-bold mb-6">
                    Lion Travel B2C Flight{" "}
                  </p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Facere doloremque error debitis veniam similique. Corporis
                    vitae vero sequi voluptates adipisci{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden self-end tablet:flex justify-end w-full max-w-[1280px] mx-auto">
          <div className="text-sm tablet:flex flex-col gap-1">
            <div>Contact</div>
            <div>Linkedin</div>
            <div>Github</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
