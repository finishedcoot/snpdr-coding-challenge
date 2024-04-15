'use client'
import React, {useState} from 'react';
import {SearchIcon} from "@/components/Common/Icons";
import {cn} from "@/components/utils";
import {Product} from "@/types/product";
import ProductSearchItem from "@/components/Product/ProductSearchItem";
import {getProduct} from "@/lib/product";
import LoadingSpinner from "@/components/Common/LoadingSpinner";

const Searchbar = () => {
    const [isFocused, setIsFocused] = useState(false)
    const [searchResult, setSearchResult] = useState<Product[]>()
    const [loading, setIsLoading] = useState(false)
    let searchTimeout: NodeJS.Timeout;

    const debouncedSearch = (query: string) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(query);
        }, 3000); // Debounce time: 3 seconds
    };

    const handleSearch = async (query: string) => {
        setIsLoading(true)
        const {data} = await getProduct(query)
        setIsLoading(false)
        setSearchResult(data?.products);
    }
    return (
        <div data-testid='loading-spinner' className={'relative'}>
            <div
                className={cn('flex items-center px-1.5 py-1 border rounded-lg', isFocused && 'rounded-b-none border-b-0')}>
                <input onChange={(e) => e.target.value.trim().length > 1 && debouncedSearch(e.target.value)}
                       className={'focus:outline-none'} onFocus={() => setIsFocused(true)}
                       onBlur={() => setIsFocused(false)}/>
                <SearchIcon/>
            </div>
            {isFocused && <div data-testid="dropdown-element"
                className={'absolute w-80 min-h-10 max-h-40 overflow-y-scroll border right-0 top-full bg-white shadow-xl flex flex-col divide-solid divide-y '}>
                {!loading ? searchResult?.map((product, index) => <ProductSearchItem key={index} product={product}/>) :
                    <LoadingSpinner className={'min-h-[100px]'}/>}
            </div>}
        </div>
    );
};

export default Searchbar;