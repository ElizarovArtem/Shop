import React from 'react';
import './App.css';
import {HeaderComponent} from "./components/HeaderComponent";
import {Route} from "react-router";
import ProductList from "./features/productsList/ProductList";
import {ProductBox} from "./features/ProductBox/ProductBox";

function App() {

    return (
        <div className="App">
            <HeaderComponent/>
            <Route exact path={'/'} render={() => <ProductList/>}/>
            <Route exact path={'/product-box'} render={() => <ProductBox/>}/>
        </div>
    );
}

export default App;
