import React, {FC, ReactNode} from 'react';
import {cn} from "@/components/utils";

interface BadgeProps {children?:ReactNode,className?:string}
const Badge:FC<BadgeProps> = ({children, className}) => {
    return (
        <span className={cn('w-max py-0.5 px-2 rounded-3xl bg-black text-white',className)}>{children}</span>
    );
};

export default Badge;