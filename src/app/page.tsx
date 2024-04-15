import ProductsList from "@/components/Product/ProductsList";
import LoadingSpinner from "@/components/Common/LoadingSpinner";
import {Suspense} from "react";
import {PRODUCTS_PER_PAGE} from "@/lib/constants/settings";

export default async function Home({searchParams}:{searchParams:{[key: string]: string  | undefined}}) {

    const page = searchParams["page"] ?? '1'
    const skip = (Number(page) - 1 ) * PRODUCTS_PER_PAGE
    const category = searchParams["category"]

    return (
        <main className={'flex container mx-auto xl:mt-20 lg:mt-10 mt-8 px-3'}>
            <Suspense fallback={<LoadingSpinner/>}>
                <ProductsList
                              skip={skip}
                              category={category}/>
            </Suspense>
        </main>
    );
}
