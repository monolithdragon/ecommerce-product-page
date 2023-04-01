import Trash from 'assets/icons/icon-delete.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { IProduct } from 'shared/interfaces/IProduct';

type Props = {
  productItem: IProduct;
  amount: number;
  onDeleteItem: () => void;
};

function CartItem({ productItem, amount, onDeleteItem }: Props) {
  const totalPrice = productItem.price * amount;

  return (
    <div className="inline-flex items-center justify-between">
      <img src={productItem.images[0]} alt="product" className="h-12 w-12 rounded-md" />
      <div>
        <p>{productItem.name}</p>
        <p>
          ${productItem.price.toFixed(2)} x {amount}
          <span className="ml-1 font-bold text-skin-neutral-400">${totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <IconButton
        className="p-1 text-skin-neutral-200 outline-none hover:scale-110 hover:text-skin-neutral-400 focus-visible:scale-110 focus-visible:text-skin-neutral-400 active:scale-95"
        onClick={onDeleteItem}
      >
        <SvgIcon Icon={Trash} />
      </IconButton>
    </div>
  );
}

export default CartItem;
