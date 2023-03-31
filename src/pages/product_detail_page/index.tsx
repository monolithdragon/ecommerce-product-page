import Backdrop from 'components/backdrop';
import ProductDetails from 'components/product_details';
import ProductImage from 'components/product_image';
import useMediaQuery from 'hooks/useMediaQuery';
import useToggle from 'hooks/useToggle';
import { useEffect } from 'react';
import { products } from 'shared/data/products';

function ProductDetailPage() {
  const [isToggle, onToggle, setIsToggle] = useToggle(false);
  const isMediaMatches = useMediaQuery('(min-width: 1024px)');
  const product = products[0];

  useEffect(() => {
    if (!isMediaMatches) {
      setIsToggle(false);
    }
  }, [isMediaMatches]);

  return (
    <>
      {isToggle && isMediaMatches && <Backdrop productItem={product} onClose={onToggle} />}
      <div className="absolute top-0 grid grid-cols-1 sm:relative lg:grid-cols-2">
        <ProductImage productItem={product} onOpen={onToggle} />
        <ProductDetails productItem={product} />
      </div>
    </>
  );
}

export default ProductDetailPage;
