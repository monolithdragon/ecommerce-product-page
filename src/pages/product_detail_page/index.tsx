import ProductDetails from 'components/product_details';
import ProductImage from 'components/product_image';
import { products } from 'shared/data/products';

function ProductDetailPage() {
  const product = products[0];

  return (
    <div className="absolute top-0 grid grid-cols-1 sm:relative lg:grid-cols-2">
      <ProductImage productItem={product} />
      <ProductDetails productItem={product} />
    </div>
  );
}

export default ProductDetailPage;
