export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

interface DummyJSONResponse{
    total: number,
    skip: number,
    limit: number
}

export interface DummyJSONProductsResponse extends DummyJSONResponse {
    products: Product[]
}

export type DummyJSONCategoriesResponse =  string[]