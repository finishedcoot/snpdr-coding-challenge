import React, {FC} from 'react';
import ProductCard from "@/components/Product/ProductCard";
import {getCategoryProducts, getProducts} from "@/lib/product";
import Pagination from "@/components/Common/Pagination";
import {PRODUCTS_PER_PAGE} from "@/lib/constants/settings";
import SideBar from "@/components/Layout/SideBar";
import ProductsCategoriesList from "@/components/Product/ProductsCategoriesList";

interface ProductsListProps {
    skip: number
    category?: string
}

const ProductsList: FC<ProductsListProps> = async ({
                                                       skip,
                                                       category
                                                   }) => {
    const {
        data,
        error,
    } = category ? await getCategoryProducts(PRODUCTS_PER_PAGE, skip, category) : await getProducts(PRODUCTS_PER_PAGE, skip)
    return (
        <div className={'w-full flex flex-col gap-6 md:gap-8 '}>
            {data ? <>
                <h1 className={'text-xl md:text-3xl sm:text-2xl'}>Products</h1>
                <div className={'flex justify-center w-full gap-3'}>
                    <SideBar>
                        <ProductsCategoriesList/>
                    </SideBar>
                    <div className={'flex flex-grow flex-wrap gap-10 justify-center md:justify-start'}>
                        {data?.products.map((product, index) => <div key={index}>
                            <ProductCard product={product}/>
                        </div>)}
                    </div>
                </div>
                <Pagination totalData={data?.total}/>
            </> : error}
        </div>
    );
};

export default ProductsList;