'use client'
import React, {FC} from 'react';
import Badge from "@/components/Common/Badge";
import { useRouter} from "next/navigation";

interface CategoryButtonProps { category: string }
const CategoryButton:FC<CategoryButtonProps> = ({category}) => {
    const router = useRouter()
    const chooseCategory = (category: string) => {
        router.push(`/?category=${category}`)
    }
    return (
        <button onClick={() => chooseCategory(category)}>
            <Badge className={'text-sm'}>{category}</Badge></button>
    );
};

export default CategoryButton;