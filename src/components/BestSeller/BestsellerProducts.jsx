import { useState } from 'react';
import { useGetProductsQuery } from '../../redux/Api';
import Cards from '../../components/ProductCard/Card';
import design from './Bestseller.module.css'
import { Link } from 'react-router-dom';

const BestSellerProducts = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount] = useState(8);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const displayedItems = data.products.slice(0, visibleCount).map((item) => (
    <Link key={item.id} to={`/product/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
    <Cards
      key={item.id}
      imageUrl={item.thumbnail}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
    </Link>
  ));

  return (
    <div className={design.container}>
      <div className={design.section_title}>
        <h3 className={design['bestseller-product']}>BESTSELLER PRODUCTS</h3>
      </div>
      <div className={design.featured_products}>
        {displayedItems}
      </div>
    </div>
  );
};

export default BestSellerProducts;
