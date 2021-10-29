import {
  Link,
  Product,
  ProductProvider,
  SelectedVariantImage,
  SelectedVariantPrice,
} from '@shopify/hydrogen/client';
import {useState} from 'react';

import ButtonSelectedVariantAddToCart from './ButtonSelectedVariantAddToCart.client';

const ProductCard = (props) => {
  const {product, providerData} = props;

  const [showAddToCart, setShowAddToCart] = useState(false);

  if (!providerData) {
    return null;
  }

  const firstVariant = providerData?.variants?.edges[0]?.node;

  return (
    <ProductProvider product={providerData} initialVariantId={firstVariant.id}>
      <div className="col-span-2 bg-white">
        {/* Image */}
        <div
          className="relative"
          onClick={() => setShowAddToCart(false)}
          onMouseEnter={() => setShowAddToCart(true)}
          onMouseLeave={() => setShowAddToCart(false)}
        >
          <Link to={`/products/${product?.slug}`}>
            <SelectedVariantImage />
          </Link>

          {/* Quick add to cart button */}
          {showAddToCart && (
            <div className="absolute bottom-0 left-0 w-full">
              <ButtonSelectedVariantAddToCart />
            </div>
          )}
        </div>
        {/* Title */}
        <Link to={`/products/${product?.slug}`}>
          <div className="font-medium mt-2">
            <Product.Title />
          </div>
        </Link>

        <div className="flex items-center">
          <SelectedVariantPrice className="text-gray-900">
            {({currencyCode, amount, currencyNarrowSymbol}) => {
              return (
                <span>{`${currencyCode} ${currencyNarrowSymbol}${amount}`}</span>
              );
            }}
          </SelectedVariantPrice>
          <SelectedVariantPrice
            priceType="compareAt"
            className="ml-1 text-gray-400 line-through"
          >
            {({amount, currencyNarrowSymbol}) => {
              return <span>{`${currencyNarrowSymbol}${amount}`}</span>;
            }}
          </SelectedVariantPrice>
        </div>
      </div>
    </ProductProvider>
  );
};

export default ProductCard;
