"use client";

import { useState } from 'react';
import styles from './Collection.module.css';
import { products } from '../assets/assets';

import ProductCard from '../components/ProductCard';

const productsData = products;

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [filters, setFilters] = useState({
    category: [],
    subCategory: []
  });

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = productsData.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    const updatedFilters = {
      ...filters,
      [filterType]: isChecked
        ? [...filters[filterType], value]
        : filters[filterType].filter((filter) => filter !== value),
    };

    setFilters(updatedFilters);

    const filtered = productsData.filter((product) =>
      (updatedFilters.category.length === 0 || updatedFilters.category.includes(product.category)) &&
      (updatedFilters.subCategory.length === 0 || updatedFilters.subCategory.includes(product.subCategory))
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.collectionPage}>
      <div className={styles.sidebar}>
        <h3>FILTERS</h3>
        <div className={styles.filterGroup}>
          <h4>Categories</h4>
          <label>
            <input
              type="checkbox"
              value="Men"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              value="Women"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              value="Kids"
              onChange={(e) => handleFilterChange(e, "category")}
            />
            Kids
          </label>
        </div>

        <div className={styles.filterGroup}>
          <h4>Type</h4>
          <label>
            <input
              type="checkbox"
              value="Topwear"
              onChange={(e) => handleFilterChange(e, "subCategory")}
            />
            Topwear
          </label>
          <label>
            <input
              type="checkbox"
              value="Bottomwear"
              onChange={(e) => handleFilterChange(e, "subCategory")}
            />
            Bottomwear
          </label>
          <label>
            <input
              type="checkbox"
              value="Winterwear"
              onChange={(e) => handleFilterChange(e, "subCategory")}
            />
            Winterwear
          </label>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className={styles.productGrid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
