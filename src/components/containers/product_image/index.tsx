import Next from 'assets/icons/icon-next.svg';
import Previous from 'assets/icons/icon-previous.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { useState } from 'react';
import { IProduct } from 'shared/interfaces/IProduct';

type Props = {
  productItem: IProduct;
  onOpen: () => void;
};

function ProductImage({ productItem, onOpen }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const prevIndex = () => {
    setSelectedIndex((prev) => prev - 1);
    if (selectedIndex <= 0) {
      setSelectedIndex(3);
    }
  };

  const nextIndex = () => {
    setSelectedIndex((prev) => prev + 1);

    if (selectedIndex >= 3) {
      setSelectedIndex(0);
    }
  };

  return (
    <div className="relative grid grid-cols-1 place-items-center gap-4 xl:px-14">
      <IconButton
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-skin-neutral-400 hover:text-skin-primary lg:hidden"
        onClick={prevIndex}
      >
        <SvgIcon Icon={Previous} width={18} height={18} viewBox="-4 -3 24 24" />
      </IconButton>

      <img
        key={productItem?.id}
        src={productItem?.images[selectedIndex]}
        alt="shoes"
        className="aspect-square w-full object-cover md:rounded-xl"
        onClick={onOpen}
      />
      <div className="mt-4 hidden gap-10 lg:grid lg:grid-cols-4">
        {productItem?.thumbnails.map((thumbnail, index) => (
          <button
            key={thumbnail}
            className={`group flex place-items-center rounded-lg outline-none transition-all focus:ring-2 focus:ring-skin-primary ${
              selectedIndex === index ? 'ring-2 ring-skin-primary' : ''
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={thumbnail}
              alt="product thumbnail"
              className={`aspect-square rounded-lg object-cover group-hover:opacity-50 group-focus:opacity-25 ${
                selectedIndex === index ? 'opacity-25' : ''
              }`}
            />
          </button>
        ))}
      </div>

      <IconButton
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-skin-neutral-400 hover:text-skin-primary lg:hidden"
        onClick={nextIndex}
      >
        <SvgIcon Icon={Next} width={18} height={18} viewBox="-6 -3 24 24" />
      </IconButton>
    </div>
  );
}

export default ProductImage;
