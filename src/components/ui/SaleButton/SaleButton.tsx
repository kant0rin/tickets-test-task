import React from "react";

interface SaleButtonProps {
  onClick: () => void
  price: string
  error: string | null
}

export const SALE_BUTTON_TEST_IDS = {
  PRICE: 'sale-button-price'
}

const SaleButton: React.FC<SaleButtonProps> = ({...props}) => {
  return (
    <button
      className='bg-[#ff6d00] text-white w-full py-2 rounded-md'
      onClick={props.onClick}
    >
      Купить
      <br/>
      <span data-testid={SALE_BUTTON_TEST_IDS.PRICE}>за {!props.error ? props.price : props.error}</span>
    </button>
  );
};

export default SaleButton;
