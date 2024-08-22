'use client'

import { cN } from "@utils/tw-marge"

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    className?: string;
    children: React.ReactNode
};

function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cN('disabled:text-secondaryText disabled:pointer-events-none disabled:cursor-not-allowed', className)}
            {...props}
        >{children}</button>
    )
}


export default Button 
