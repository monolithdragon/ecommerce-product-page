import ShoppingCart from 'assets/icons/icon-cart.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';

function Cart() {
  return (
    <div className="relative">
      <IconButton className="p-2 text-skin-neutral-300 hover:text-skin-neutral-400 focus:text-skin-neutral-400">
        <SvgIcon Icon={ShoppingCart} />
      </IconButton>
    </div>
  );
}

export default Cart;
