import {expect, it, describe} from "vitest";
import {SALE_BUTTON_TEST_IDS} from "./SaleButton.tsx";
import {render, screen} from "@testing-library/react";
import SaleButton from "./SaleButton.tsx";

describe('button tests', () => {
  it('should correctly render RUB, when provided', () => {
    render(<SaleButton error={null} price={'12 000 RUB'} onClick={() => console.log('213')}/>)
    const container = screen.getByTestId(SALE_BUTTON_TEST_IDS.PRICE)
    expect(container).toHaveTextContent('12 000 RUB')
  });
  it('should correctly render EUR, when provided', () => {
    render(<SaleButton error={null} price={'12 000 EUR'} onClick={() => console.log('213')}/>)
    const container = screen.getByTestId(SALE_BUTTON_TEST_IDS.PRICE)
    expect(container).toHaveTextContent('12 000 EUR')
  });
  it('should correctly render USD, when provided', () => {
    render(<SaleButton error={null} price={'12 000 USD'} onClick={() => console.log('213')}/>)
    const container = screen.getByTestId(SALE_BUTTON_TEST_IDS.PRICE)
    expect(container).toHaveTextContent('12 000 USD')
  });

  it('should correctly render error text, when provided', () => {
    render(<SaleButton error={'error'} price={'12 000 RUB'} onClick={() => console.log('213')}/>)
    const container = screen.getByTestId(SALE_BUTTON_TEST_IDS.PRICE)
    expect(container).toHaveTextContent('error')
    expect(container).not.toHaveTextContent('12 000 RUB')
  });
})
