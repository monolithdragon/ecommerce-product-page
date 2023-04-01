import Backdrop from 'components/containers/backdrop';
import ProductDetails from 'components/containers/product_details';
import ProductImage from 'components/containers/product_image';
import useMediaQuery from 'hooks/useMediaQuery';
import useToggle from 'hooks/useToggle';
import { useEffect } from 'react';
import { products } from 'shared/data/products';

function ProductDetailPage() {
  const [isToggle, onToggle, setIsToggle] = useToggle(false);
  const isMediaMatches = useMediaQuery('(min-width: 1024px)');
  const productItem = products[0];

  useEffect(() => {
    if (!isMediaMatches) {
      setIsToggle(false);
    }
  }, [isMediaMatches]);

  return (
    <>
      {isToggle && isMediaMatches && <Backdrop onClose={onToggle} />}
      <div className="absolute top-0 grid grid-cols-1 sm:relative lg:grid-cols-2">
        <ProductImage productItem={productItem} onOpen={onToggle} />
        <ProductDetails productItem={productItem} />
      </div>
    </>
  );
}

export default ProductDetailPage;
