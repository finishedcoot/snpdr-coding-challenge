/**
 * @jest-environment jsdom
 */
import data from "@/mock-data/products.json"
import {render, screen, fireEvent, waitFor, act} from "@testing-library/react";
import Searchbar from "@/components/Layout/Searchbar";
import {getProduct} from "@/lib/product";

jest.mock("@/lib/product", () => ({
    getProduct: jest.fn().mockResolvedValue({data})
}))

jest.useFakeTimers()
describe("Searchbar", () => {
    it("When input is focused dropdown should be visible", () => {
        render(<Searchbar/>);
        const Input = screen.getByRole('textbox')
        fireEvent.focus(Input);
        const DropDown = screen.getByTestId('dropdown-element')

        expect(DropDown).toBeInTheDocument();
    });

    it("Triggers search after input change", async () => {
        render(<Searchbar/>)
        const Input = screen.getByRole('textbox');
        await act(async () => {
            /* fire events that update state */
            await fireEvent.focus(Input)
            await fireEvent.change(Input, {target: {value: "test"}});
            await expect(getProduct).not.toHaveBeenCalled();
            await jest.advanceTimersByTime(4000);
            expect(getProduct).toHaveBeenCalledTimes(1);
            await waitFor(() => {
                expect(screen.getByTestId("dropdown-element")).toBeInTheDocument()
            })

        });
            expect(screen.getByTestId('searched-product-1')).toHaveTextContent('iPhone 9')


    });
});