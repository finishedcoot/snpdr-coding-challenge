/**
 * @jest-environment jsdom
 */
import data from "@/mock-data/products.json"
import {render, screen} from "@testing-library/react";
import ProductsList from "@/components/Product/ProductsList";

jest.mock("@/lib/product", () => ({
    getCategoryProducts:jest.fn().mockImplementation((PRODUCTS_PER_PAGE,
    skip,
    category)=>{

    }),
    getProducts:jest.fn().mockImplementation((PRODUCTS_PER_PAGE,
    skip)=>{
        const startIndex = skip;
        const endIndex = startIndex + PRODUCTS_PER_PAGE;
        const slicedData = {
            ...data,
            products: data.products.slice(startIndex, endIndex),
        };
        return {data:slicedData}
    }),
}))
jest.mock('@/components/Product/ProductsCategoriesList',()=>{
    const mockedProductsCategoriesList = ()=><div/>
    return(mockedProductsCategoriesList)
})

describe("Products List", () => {
    it("Only ten product per page should be rendered", async () => {
         render(await ProductsList({skip:0}));
        const productCards = screen.getAllByTestId("product-card")

        expect(productCards).toHaveLength(10);
    });

});