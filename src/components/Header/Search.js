import React from 'react';
import { useProducts } from '../../contexts/ProductsContext';
import MyLink from '../../shared/MyLink';
import './Search.css';

const Search = () => {
   const { searchResults } = useProducts();

   return (
      <div className="search-box">
         {
            searchResults.length && searchResults.map(item => (
               <MyLink to={`/product/${item.id}`}>
                  <p>{item.title}</p>
               </MyLink>
            ))
         }
      </div>
   )
}

export default Search
