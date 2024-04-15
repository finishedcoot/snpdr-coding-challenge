import '@testing-library/jest-dom'


jest.mock("@/lib/product", async () => {
    const data = await import('@/mock-data/products')
    return ({
            getAllProducts: jest.fn(async (perPage, skip) => {
                const startIndex = skip;
                const endIndex = startIndex + perPage;
                const partialData = data.products.products.slice(startIndex, endIndex)
                return {data: {...data, products: partialData}}
            }),
            getCategoryProducts: jest.fn().mockResolvedValue({
                data: data
            }),
            getProduct: jest.fn().mockResolvedValue({
                data: data
            })
        }
    )
});