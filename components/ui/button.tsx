'use client'

import { cN } from "@utils/tw-marge"

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    className?: string;
    children: React.ReactNode
};

function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            className={cN('', className)}
            {...props}
        >{children}</button>
    )
}


export default Button 
