import React, {FC} from 'react';
import Image from "next/image";
import {Product} from "@/types/product";
import {StarIcon} from "@/components/Common/Icons";
import Badge from "@/components/Common/Badge";

interface ProductCardProps {
    product: Product
}

const ProductCard: FC<ProductCardProps> = ({product}) => {
    return (
        <div className={'flex flex-col p-4 border rounded-2xl gap-2 xl:w-80 w-72'}>
            <div className={'relative w-full h-52'}>
                <Image src={product.thumbnail} alt={product.title} fill={true} className={'object-contain'}/>
            </div>
            <div className={'md:text-lg'}>{product.title}</div>
            <p className={'md:text-sm text-xs truncate'}>{product.description}</p>
            <div className={'flex items-center justify-between md:text-sm text-xs'}>
                <span className={'flex items-center gap-0.5'}><StarIcon className={'w-4 h-4'}/>{product.rating}</span>
                {/*<span>{product.stock}</span>*/}
            </div>
            <div className={'flex items-center justify-between md:text-sm text-xs'}>
                <span className={'font-semibold'}>${product.price}</span>
                <Badge className={'text-xs'}>{product.discountPercentage}%</Badge>
            </div>
        </div>
    );
};

export default ProductCard;