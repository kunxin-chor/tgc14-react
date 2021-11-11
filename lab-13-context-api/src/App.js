
import React from 'react'
import AddProduct from './AddProduct';
import AddProductEx from './AddProductEx';
import ProductContext from './ProductContext';
import ProductListing from './ProductListing';

class App extends React.Component {
  state = {
    products: [
      {
        'id': 1,
        'product_name': 'ACME Anvils',
        'cost': 9.99
      },
      {
        'id': 2,
        'product_name': 'ACME Hammer',
        'cost': 15.99
      },
      {
        'id': 3,
        'product_name': 'ACME Screwdrivers',
        'cost': 29.99
      }
    ]
  }
  render() {
    // context is an object created in render
    const context = {
      // make sure the products function is an arrow function
      // the purpose of the function is to retrieve all the products
      products: () => {
        return this.state.products;
      },
      addProduct: (productName, cost)=>{
        // 1. clone the array
        // 2. modify the clone
        // 3. set the clone back into the state
        let id = Math.floor(Math.random() * 100000 + 99999);
        this.setState({
          'products': [...this.state.products, {
            'id': id,
            'product_name': productName,
            'cost': cost
          }]
        })
        // todo: consume endpoint to add in the new
        // product to the database
      }
    }
    return (
      <ProductContext.Provider value={context}>
        <React.Fragment>
          <h1>My Store</h1>
          <ProductListing/>
          <AddProductEx/>
        </React.Fragment>
      </ProductContext.Provider>
    );
  }
}

export default App;
