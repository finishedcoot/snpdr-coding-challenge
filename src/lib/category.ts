import {fetchData, FetchResult} from "@/lib/utils";
import {DummyJSONCategoriesResponse} from "@/types/product";
import {PRODUCTS_URL} from "@/lib/constants/urls";

export const getAllProductsCategories = async (): Promise<FetchResult<DummyJSONCategoriesResponse>> => {
    const url = `${PRODUCTS_URL}/categories`;
    return fetchData(url);
};