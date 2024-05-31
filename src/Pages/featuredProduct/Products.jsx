import { useState } from 'react';
import { useGetProductsQuery } from '../../redux/ProductsApi';
import Cards from '../../components/ProductCard/Card';
import design from './Products.module.css'

const Products = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const displayedItems = data.products.slice(0, visibleCount).map((item) => (
    <Cards
      key={item.id}
      imageUrl={item.thumbnail}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
  ));

  return (
    <div className={design.container}>
      <div className={design.section_title}>
        <h2>Featured Products</h2>
        <h3>BESTSELLER PRODUCTS</h3>
        <p>Problems trying to resolve the conflict between</p>
      </div>

      <div className={design.featured_products}>
        {displayedItems}
      </div>

      {visibleCount < data.products.length && (
        <button onClick={handleLoadMore} className={design.load_button}>
          Load more products
        </button>
      )}
    </div>
  );
};

export default Products;
