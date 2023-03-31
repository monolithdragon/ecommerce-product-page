import CloseIcon from 'assets/icons/icon-close.svg';
import Next from 'assets/icons/icon-next.svg';
import Previous from 'assets/icons/icon-previous.svg';
import IconButton from 'components/elements/icon_button';
import SvgIcon from 'components/elements/svg_icon';
import { useState } from 'react';
import { IProduct } from 'shared/interfaces/IProduct';

type Props = {
  productItem: IProduct;
  onClose: () => void;
};

function Backdrop({ productItem, onClose }: Props) {
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
    <>
      <div className="absolute inset-0 z-[1000] bg-black bg-opacity-75" onClick={onClose}></div>
      <div className="relative">
        <div className="absolute left-1/2 top-0 z-[2000] -translate-x-1/2">
          <IconButton className="float-right mb-2  flex flex-1 text-white hover:scale-110 hover:text-skin-primary">
            <SvgIcon Icon={CloseIcon} onClick={onClose} />
          </IconButton>
          <IconButton
            className="absolute left-0 top-1/2 z-[2100] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-skin-neutral-400 hover:text-skin-primary"
            onClick={prevIndex}
          >
            <SvgIcon Icon={Previous} width={18} height={18} viewBox="-4 -3 24 24" />
          </IconButton>

          <img
            key={productItem.id}
            src={productItem.images[selectedIndex]}
            alt="shoes"
            className="aspect-square object-cover md:rounded-xl"
          />
          <div className="mt-8 flex justify-center gap-8">
            {productItem.thumbnails.map((thumbnail, index) => (
              <button
                key={thumbnail}
                className={`group flex place-items-center rounded-lg bg-white outline-none transition-all focus:ring-2 focus:ring-skin-primary ${
                  selectedIndex === index ? 'ring-2 ring-skin-primary' : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={thumbnail}
                  alt="product thumbnail"
                  className={`aspect-square w-20 rounded-lg
                  object-cover group-hover:opacity-50 group-focus:opacity-40 ${
                    selectedIndex === index ? 'opacity-40' : ''
                  }`}
                />
              </button>
            ))}
          </div>

          <IconButton
            className="absolute right-0 top-1/2 z-[2100] -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-3 text-skin-neutral-400 hover:text-skin-primary "
            onClick={nextIndex}
          >
            <SvgIcon Icon={Next} width={18} height={18} viewBox="-6 -3 24 24" />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Backdrop;
