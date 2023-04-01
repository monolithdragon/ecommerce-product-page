import ShoppingCart from 'assets/icons/icon-cart.svg';
import Minus from 'assets/icons/icon-minus.svg';
import Plus from 'assets/icons/icon-plus.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { CartProduct, ShoppingContext } from 'contexts/ShoppingContext';
import { useContext, useState } from 'react';
import { IProduct } from 'shared/interfaces/IProduct';

type Props = {
  productItem: IProduct;
};

function ProductDetails({ productItem }: Props) {
  const [productAmount, setProductAmount] = useState<number>(1);
  const { cartItems, addToCart } = useContext(ShoppingContext) as CartProduct;

  const incrementCount = () => {
    if (productItem?.quantity > productAmount) {
      setProductAmount((prev) => prev + 1);
    }
  };

  const decrementCount = () => {
    if (productAmount > 1) {
      setProductAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="grid grid-cols-1 p-5 lg:px-14 lg:py-0 xl:px-[72px] ">
      <div className="flex w-full flex-col justify-center">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.15rem] text-skin-primary md:mb-5">
          {productItem.brand}
        </p>
        <h1 className="mb-4 text-[28px] font-bold leading-8 text-skin-neutral-400 md:mb-8 lg:text-[42px] lg:leading-[3rem]">
          {productItem.name}
        </h1>
        <p className="mb-5 text-[15px] sm:text-base md:mb-8">{productItem?.description}</p>
        <div className="mb-5 flex flex-wrap space-y-1 md:mb-10">
          <div className="inline-flex place-items-center space-x-4">
            <p className="text-center text-3xl font-bold text-skin-neutral-400">
              ${productItem.price.toFixed(2)}
            </p>
            <p className="rounded bg-skin-primary-100 px-2 text-center font-bold text-skin-primary">
              50%
            </p>
          </div>
          <p className="flex-auto text-end line-through md:w-full md:text-start">$250.00</p>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <div className="flex w-full items-center justify-between rounded-lg bg-skin-neutral p-4 md:flex-[30%]">
            <IconButton
              className="block p-3 text-skin-primary outline-none hover:scale-125 hover:text-opacity-70 active:scale-75"
              onClick={decrementCount}
            >
              <SvgIcon Icon={Minus} />
            </IconButton>
            <span className="font-bold text-skin-neutral-400">{productAmount}</span>
            <IconButton
              className="block p-2 text-skin-primary outline-none hover:scale-125 hover:text-opacity-70 active:scale-75"
              onClick={incrementCount}
            >
              <SvgIcon Icon={Plus} />
            </IconButton>
          </div>

          <IconButton
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-4 font-bold text-white shadow-2xl shadow-skin-primary/50 outline-none transition-all duration-300 hover:bg-opacity-70 hover:shadow-2xl hover:shadow-skin-primary/70 active:scale-95 md:flex-[60%]"
            onClick={() =>
              addToCart({ id: cartItems.length, product: productItem, amount: productAmount })
            }
          >
            <SvgIcon Icon={ShoppingCart} viewBox="0 0 26 26" />
            <span>Add to cart</span>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
