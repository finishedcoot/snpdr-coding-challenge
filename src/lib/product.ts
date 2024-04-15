import {PRODUCTS_URL} from "@/lib/constants/urls";
import { DummyJSONProductsResponse} from "@/types/product";
import {fetchData, FetchResult} from "@/lib/utils";
import {PRODUCTS_PER_PAGE} from "@/lib/constants/settings";

export const getProducts = async (limit: number = PRODUCTS_PER_PAGE, skip: number = 0): Promise<FetchResult<DummyJSONProductsResponse>> => {
    const url = `${PRODUCTS_URL}?limit=${limit}&skip=${skip}`;
    return fetchData(url);
};

export const getCategoryProducts = async (limit: number = PRODUCTS_PER_PAGE, skip: number = 0, category: string): Promise<FetchResult<DummyJSONProductsResponse>> => {
    const url = `${PRODUCTS_URL}/category/${category}?limit=${limit}&skip=${skip}`;
    return fetchData(url);
};

export const getProduct = async (query:string): Promise<FetchResult<DummyJSONProductsResponse>> => {
    const url = `${PRODUCTS_URL}/search?q=${query}`;
    return fetchData(url);
};
