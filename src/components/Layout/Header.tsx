import React from 'react';
import Searchbar from "@/components/Layout/Searchbar";

const Header = () => {
    return (
        <div className={'w-full py-4 px-3 flex justify-center border-b'}>
            <div className={'container flex items-center justify-between'}>
                <h1 className={'md:font-black md:text-lg'}>CHALLENGE</h1>
                <Searchbar/>
            </div>
        </div>
    );
};

export default Header;