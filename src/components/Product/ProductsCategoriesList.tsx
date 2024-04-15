import React from 'react';
import {getAllProductsCategories} from "@/lib/category";
import CategoryButton from "@/components/Product/CategoryButton";

const ProductsCategoriesList = async () => {
    const {error, data} = await getAllProductsCategories()


    return (
        <ul className={'flex flex-wrap gap-1'}>
            {data?.map((category, index) => <CategoryButton category={category} key={index}/>)}
        </ul>
    );
};

export default ProductsCategoriesList;