import ShoppingCart from 'assets/icons/icon-cart.svg';
import Trash from 'assets/icons/icon-delete.svg';
import Product1 from 'assets/images/image-product-1.jpg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import useToggle from 'hooks/useToggle';

function Cart() {
  const [isToggle, onToggle] = useToggle(false);
  const isVisible = false;

  return (
    <div className="relative">
      {isVisible && (
        <span className="absolute left-1/2 top-0 z-[1]  whitespace-nowrap rounded-full bg-skin-primary-200 px-2.5 py-[0.25px] text-[10px] text-white">
          0
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
          className="absolute right-0 top-0 flex w-[356px]
      translate-x-[50px] translate-y-14 flex-col space-y-4 rounded-lg bg-white p-4 shadow-2xl md:right-1/2 md:translate-x-1/4 md:translate-y-1/4 lg:left-1/2 lg:-translate-x-1/2"
        >
          <h1 className="font-bold text-skin-neutral-400">Cart</h1>
          <hr className="-mx-4" />
          {isVisible ? (
            <>
              <div className="inline-flex items-center justify-between">
                <img src={Product1} alt="product" className="h-12 w-12 rounded-md" />
                <div>
                  <p>Fall Limited Edition Sneakers</p>
                  <p>
                    $125.00 x 3{' '}
                    <span className="ml-1 font-bold text-skin-neutral-400">$375.00</span>
                  </p>
                </div>
                <IconButton
                  className="p-1 text-skin-neutral-200 outline-none hover:scale-110 hover:text-skin-neutral-400 focus-visible:scale-110 focus-visible:text-skin-neutral-400 active:scale-95
            "
                >
                  <SvgIcon Icon={Trash} />
                </IconButton>
              </div>
              <button
                className="inline-flex place-content-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-3 font-bold text-white outline-none transition-all duration-300 hover:scale-105 hover:bg-opacity-70
            hover:shadow-xl hover:shadow-skin-primary/50 focus:scale-105 focus:bg-opacity-70 focus:shadow-xl focus:shadow-skin-primary/50 active:scale-95"
              >
                Checkout
              </button>
            </>
          ) : (
            <p className="px-20 pb-20 pt-16 text-center font-bold">Your cart is empty.</p>
          )}
        </article>
      )}
    </div>
  );
}

export default Cart;
