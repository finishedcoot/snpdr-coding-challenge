'use client'
import React, {FC, ReactNode} from 'react';
import {useRouter, useSearchParams} from "next/navigation";
import {cn} from "@/components/utils";
import {PRODUCTS_PER_PAGE} from "@/lib/constants/settings";

interface PaginationProps {
    totalData: number
}

const Pagination: FC<PaginationProps> = ({totalData}) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const currentPage = Number(searchParams.get("page") ?? '1')
    const category = searchParams.get("category")

    const totalPages = totalData / PRODUCTS_PER_PAGE


    const onPageChange = (page: number) => {
        router.push(category ? `/?category=${category}&page=${page}` : `/?page=${page}`)
    }
    const getPageNumbers = () => {
        const maxVisiblePages = 4;
        const pages = [];
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (1 <= currentPage - 2 && currentPage + 2 < totalPages) {
                pages.push(1)
                pages.push('...');
                for (let i = currentPage; i <= currentPage + 3; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage <= 3) {
                for (let i = 1; i <= 3; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 2; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        return pages;
    };


    return (
        <div className="flex items-center justify-center gap-3">
            {getPageNumbers().map((page, index) => (
                page === '...' ? <span
                    key={index}
                    className={'w-8 h-8 flex justify-center items-center'}

                >
                    {page}
                </span> : <button onClick={() => onPageChange(page as number)} key={index}
                                  className={cn('w-8 h-8 flex justify-center items-center hover:bg-slate-100 hover:border rounded-2xl transition-colors ease-in', currentPage === page && 'bg-black text-white hover:bg-white hover:text-black')}>{page}</button>
            ))}
        </div>
    );
};

export default Pagination;