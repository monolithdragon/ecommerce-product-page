import ShoppingCart from 'assets/icons/icon-cart.svg';
import Close from 'assets/icons/icon-close.svg';
import Trash from 'assets/icons/icon-delete.svg';
import Menu from 'assets/icons/icon-menu.svg';
import Minus from 'assets/icons/icon-minus.svg';
import Plus from 'assets/icons/icon-plus.svg';
import Product1 from 'assets/images/image-product-1.jpg';
import Thumbnail1 from 'assets/images/image-product-1-thumbnail.jpg';
import Thumbnail2 from 'assets/images/image-product-2-thumbnail.jpg';
import Thumbnail3 from 'assets/images/image-product-3-thumbnail.jpg';
import Thumbnail4 from 'assets/images/image-product-4-thumbnail.jpg';
import SvgIcon from 'components/elements/svg_icon';

function DesignSystem() {
  return (
    <div className="container">
      <h1>Design System</h1>

      <div className="my-16">
        <nav>
          <ul className="flex gap-10 [&>*]:cursor-pointer [&>*]:border-b-[0.3125rem] [&>*]:border-b-transparent [&>*]:py-8">
            <li className="!border-b-skin-primary text-skin-neutral-400">
              <a href="#">Active</a>
            </li>
            <li
              className="focus-within:border-b-skin-primary focus-within:text-skin-neutral-400
            hover:border-b-skin-primary hover:text-skin-neutral-400"
            >
              <a className="outline-none" href="#">
                Hovered
              </a>
            </li>
            <li>
              <a className="outline-none" href="#">
                Idle
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="my-16 space-x-5">
        <button
          type="button"
          className="inline-flex p-2 text-skin-neutral-300 outline-none hover:scale-110 hover:text-skin-neutral-400 focus:scale-110 focus:text-skin-neutral-400 active:scale-95"
        >
          <SvgIcon Icon={ShoppingCart} />
        </button>
        <button
          type="button"
          className="inline-flex p-2 text-skin-neutral-300 outline-none hover:scale-110 hover:text-skin-neutral-400 focus:scale-110 focus:text-skin-neutral-400 active:scale-95"
        >
          <SvgIcon Icon={Menu} viewBox="-2 -2 20 20" />
        </button>
        <button
          type="button"
          className="inline-flex p-2 text-skin-neutral-300 outline-none hover:scale-110 hover:text-skin-neutral-400 focus:scale-110 focus:text-skin-neutral-400 active:scale-95"
        >
          <SvgIcon Icon={Close} viewBox="-2.5 -2.5 20 20" />
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-3 font-bold text-white shadow-xl shadow-skin-primary/50 outline-none transition-all duration-300 hover:scale-110 hover:bg-opacity-70
        hover:shadow-xl hover:shadow-skin-primary/50 focus:scale-110 focus:bg-opacity-70 focus:shadow-xl focus:shadow-skin-primary/50 active:scale-95"
        >
          <SvgIcon Icon={ShoppingCart} width={20} height={20} />
          <span>Add to cart</span>
        </button>

        <div className="inline-flex w-full items-center justify-between rounded-lg bg-skin-neutral px-4 py-3">
          <button
            type="button"
            className="block text-skin-primary outline-none transition-all
            hover:text-opacity-70 focus-visible:text-opacity-70 active:scale-75"
          >
            <SvgIcon Icon={Minus} viewBox="-6 -10 24 24" />
          </button>
          <span className="font-bold">1</span>
          <button
            type="button"
            className="block text-skin-primary outline-none transition-all
            hover:text-opacity-70 focus-visible:text-opacity-70 active:scale-75"
          >
            <SvgIcon Icon={Plus} viewBox="-6 -6 24 24" />
          </button>
        </div>
      </div>
      <div className="my-16 space-y-5">
        <article className="flex w-[356px] flex-col space-y-4 rounded-lg bg-white p-4 shadow-2xl">
          <h1 className="font-bold text-skin-neutral-400">Cart</h1>
          <hr className="-mx-4" />
          <div className="inline-flex items-center justify-between">
            <img src={Product1} alt="product" className="h-12 w-12 rounded-md" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x 3 <span className="ml-1 font-bold text-skin-neutral-400">$375.00</span>
              </p>
            </div>
            <button
              className="p-1 text-skin-neutral-200 outline-none hover:scale-110 hover:text-skin-neutral-400 focus-visible:scale-110 focus-visible:text-skin-neutral-400 active:scale-95
            "
            >
              <SvgIcon Icon={Trash} viewBox="-4 -4 24 24" />
            </button>
          </div>
          <button
            className="inline-flex place-content-center gap-2 rounded-lg bg-skin-primary-200 px-8 py-3 font-bold text-white outline-none transition-all duration-300 hover:scale-105 hover:bg-opacity-70
            hover:shadow-xl hover:shadow-skin-primary/50 focus:scale-105 focus:bg-opacity-70 focus:shadow-xl focus:shadow-skin-primary/50 active:scale-95"
          >
            Checkout
          </button>
        </article>
        <article className="flex w-[356px] flex-col space-y-4 rounded-lg bg-white p-4 shadow-2xl">
          <h1 className="font-bold text-skin-neutral-400">Cart</h1>
          <hr className="-mx-4" />
          <p className="px-20 pb-20 pt-16 text-center font-bold">Your cart is empty.</p>
        </article>
      </div>
    </div>
  );
}

export default DesignSystem;
