import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom'
import AddProductPage from './pages/AddProductPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListingPage from './pages/ProductListingPage';
import ProductProvider from "./ProductProvider";

function App() {
  return (
    <React.Fragment>
      <h1>Products</h1>      
      <Router>
        <nav>
          <Link to="/">Catalog</Link> | 
          <Link to="/addProduct">Add</Link>
        </nav>
        <ProductProvider>
          <Routes>      
              <Route path="/" element={<ProductListingPage />}/>
              <Route path="/addProduct" element={ <AddProductPage/>}/>
              <Route path="/product/:productId" element={     <ProductDetailsPage/>}/>
          </Routes>
        </ProductProvider>

      </Router>
    </React.Fragment>
  );
}

export default App;
