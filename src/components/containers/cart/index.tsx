/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ShoppingCart from 'assets/icons/icon-cart.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { CartProduct, ShoppingContext } from 'contexts/ShoppingContext';
import useToggle from 'hooks/useToggle';
import { useContext } from 'react';

import CartItem from './cart_item';

function Cart() {
  const [isToggle, onToggle] = useToggle(false);
  const { cartItems, removeFromCart } = useContext(ShoppingContext) as CartProduct;
  const isVisible = cartItems.length > 0;

  return (
    <div className="relative">
      {isVisible && (
        <span className="absolute left-1/2 top-0 z-[1]  whitespace-nowrap rounded-full bg-skin-primary-200 px-2.5 py-[0.25px] text-[10px] text-white">
          {cartItems.length}
        </span>
      )}
      <IconButton
        className="p-2 text-skin-neutral-300 hover:text-skin-neutral-400 focus:text-skin-neutral-400"
        onClick={onToggle}
      >
        <SvgIcon Icon={ShoppingCart} />
      </IconButton>

      {isToggle && (
        <article
          className="absolute right-0 top-16 flex
      w-[356px] translate-x-[50px] flex-col rounded-lg bg-white p-5 shadow-2xl md:right-1/2 md:translate-x-1/4 lg:left-1/2 lg:-translate-x-1/2"
        >
          <h1 className="mb-6 font-bold text-skin-neutral-400">Cart</h1>
          <hr className="-mx-6" />
          {isVisible ? (
            <div className="mt-6 flex flex-col space-y-6">
              {cartItems.map(({ id, product, amount }) => (
                <CartItem
                  key={id}
                  productItem={product}
                  amount={amount}
                  onDeleteItem={() => removeFromCart(id)}
                />
              ))}
              <button className="inline-flex place-content-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-4 font-bold text-white outline-none transition-all duration-300 hover:scale-105 hover:bg-opacity-70 hover:shadow-xl hover:shadow-skin-primary/50 focus:scale-105 focus:bg-opacity-70 focus:shadow-xl focus:shadow-skin-primary/50 active:scale-95">
                Checkout
              </button>
            </div>
          ) : (
            <p className="px-20 pb-20 pt-20 text-center font-bold">Your cart is empty.</p>
          )}
        </article>
      )}
    </div>
  );
}

export default Cart;
