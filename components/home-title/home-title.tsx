import { cN } from "@utils/tw-marge";

interface HomeTitleProps {
    isMobile?: boolean;
}

function HomeTitle({ isMobile = false }: HomeTitleProps) {
    return (
        <div className={cN("hidden my-10 tablet:my-0 p-2 tablet:p-0 tablet:h-16 tablet:flex text-base tablet:text-2xl tablet:items-center tablet:absolute tablet:-translate-x-1/2 tablet:-translate-y-1/2 top-1/2 left-1/2",{'flex tablet:hidden':isMobile})}>
            <div className="w-max px-2 border-r tablet:px-9">Yong Chen </div>
            <div className="w-max px-2 tablet:block tablet:px-9">
                Front End Developer
            </div>
        </div>
    )
}

export default HomeTitle
