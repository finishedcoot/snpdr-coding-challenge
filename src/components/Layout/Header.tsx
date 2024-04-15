import React from 'react';
import Searchbar from "@/components/Layout/Searchbar";

const Header = () => {
    return (
        <div className={'w-full py-4 px-3 flex justify-center border-b'}>
            <div className={'container flex items-center justify-between'}>
                <span className={'md:font-black md:text-lg'}>CHALLENGE</span>
                <Searchbar/>
            </div>
        </div>
    );
};

export default Header;