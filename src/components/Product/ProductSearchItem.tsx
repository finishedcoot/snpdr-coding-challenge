import React, {FC} from 'react';
import {Product} from "@/types/product";

interface ProductSearchItemProp {
    product: Product
}

const ProductSearchItem: FC<ProductSearchItemProp> = ({product}) => {
    return (
        <div className={'flex flex-col w-full gap-2 p-3'}>
            <div className={'flex items-center justify-between'}>
                <span className={'font-semibold'}>{product.title}</span>
                <span className={'text-sm'}>${product.price}</span>
            </div>
            <p className={'text-sm truncate'}>{product.description}</p>
        </div>
    );
};

export default ProductSearchItem;