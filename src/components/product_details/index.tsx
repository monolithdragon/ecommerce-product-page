import ShoppingCart from 'assets/icons/icon-cart.svg';
import Minus from 'assets/icons/icon-minus.svg';
import Plus from 'assets/icons/icon-plus.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { useState } from 'react';
import { IProduct } from 'shared/interfaces/IProduct';

type Props = {
  productItem: IProduct;
};

function ProductDetails({ productItem }: Props) {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    if (productItem.quantity > count) {
      setCount((prev) => prev + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 p-5 md:px-28 md:py-0 xl:p-14">
      <div className="flex w-full flex-col justify-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.15rem] text-skin-primary/80 md:mb-5">
          {productItem.brand}
        </p>
        <h1 className="mb-4 text-3xl font-bold text-skin-neutral-400 md:mb-8 md:text-4xl">
          {productItem.name}
        </h1>
        <p className="mb-4 text-base md:mb-8">{productItem.description}</p>
        <div className="mb-4 flex flex-wrap space-y-1 md:mb-8">
          <div className="inline-flex place-items-center space-x-4">
            <p className="text-center text-xl font-bold text-skin-neutral-400">
              ${productItem.price.toFixed(2)}
            </p>
            <p className="rounded bg-skin-primary-100 px-2 text-center text-xs text-skin-primary">
              50%
            </p>
          </div>
          <p className="flex-auto text-end text-xs line-through md:w-full md:text-start">$250.00</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex w-full items-center justify-between rounded-lg bg-skin-neutral px-4 py-3 md:flex-[30%]">
            <IconButton
              className="block p-3 text-skin-primary outline-none hover:scale-125 hover:text-opacity-70 active:scale-75"
              onClick={decrementCount}
            >
              <SvgIcon Icon={Minus} />
            </IconButton>
            <span className="font-bold">{count}</span>
            <IconButton
              className="block p-2 text-skin-primary outline-none hover:scale-125 hover:text-opacity-70 active:scale-75"
              onClick={incrementCount}
            >
              <SvgIcon Icon={Plus} />
            </IconButton>
          </div>

          <IconButton className="flex w-full items-center justify-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-3 font-bold text-white shadow-xl shadow-skin-primary/50 outline-none transition-all duration-300 hover:bg-opacity-70 hover:shadow-xl hover:shadow-skin-primary/70 active:scale-95 md:flex-[60%]">
            <SvgIcon Icon={ShoppingCart} viewBox="0 0 26 26" />
            <span>Add to cart</span>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
