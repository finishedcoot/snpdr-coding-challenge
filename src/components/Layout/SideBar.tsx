'use client'
import React, {FC, ReactNode, useState} from 'react';
import {cn} from "@/components/utils";

interface SideBarProps {
    children: ReactNode
}

const SideBar: FC<SideBarProps> = ({children}) => {
    const [isOpen, setIsOpen] = useState(!(window.innerWidth<768))
    const toggleOpen = () => {
        if(window.innerWidth<768){
            if(isOpen){
                document.body.classList.remove('overflow-hidden')
            }else {
                document.body.classList.add('overflow-hidden')
            }
        }
        setIsOpen(prev => !prev)
    }
    return (
        <div className={cn(' h-max md:sticky absolute top-0')}>
            <div
                className={cn('relative bg-white top-0 gap-3 flex-grow flex flex-col h-max md:border-r overflow-hidden', isOpen ? "md:!w-60 sm:w-[calc(100vw-150px)] md:h-auto h-screen px-3 md:pl-0  z-20" : "w-0 pr-0")}>
                <div className={'md:text-2xl sm:text-xl text-lg'}>Categories</div>
                {children}

            </div>
            <button onClick={toggleOpen} className={cn('z-20 absolute top-1/2 md:right-0 -right-2', isOpen && "rotate-180")}>&#11030;</button>
        </div>
    );
};

export default SideBar;