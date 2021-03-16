import React, {useEffect} from 'react';
import './App.css';
import {HeaderComponent} from "./components/HeaderComponent";
import {Route} from "react-router";
import ProductList from "./features/productsList/ProductList";
import {ProductBox} from "./features/ProductBox/ProductBox";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store/store";
import {ProductType, setTotalPriceAC} from "./features/productsList/Products-reducer";
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import {NavLink, useLocation} from "react-router-dom";
import {ProductBoxIcon} from "./components/ProductBoxIcon/ProductBoxIcon";

function App() {
    const { Header, Content, Footer } = Layout;
    const products = useSelector<RootStateType, Array<ProductType>>(state => state.products)
    const filteredProducts = products.filter(p => p.inBoxCount > 0)
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        let totalPrice = 0
        filteredProducts.map(p => {
            totalPrice += Number(p.price.slice(0, p.price.length - 1)) * p.inBoxCount
        })
        dispatch(setTotalPriceAC(totalPrice))
    }, [filteredProducts])

    return (

        <Layout className="layout">
            <Header>
                <Row >
                    <Col span={18}>
                        <div><NavLink to={"/"}><h1 className="logo">ElizarovShop</h1></NavLink></div>
                    </Col>
                    <Col span={6}>{location.pathname === "/product-box" ? null : <ProductBoxIcon/>}</Col>
                </Row>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <Route exact path={'/'} render={() => <ProductList/>}/>
                    <Route exact path={'/product-box'} render={() => <ProductBox filteredProducts={filteredProducts}/>}/>
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>


        /*<div className="App">
            <HeaderComponent/>
            <Route exact path={'/'} render={() => <ProductList/>}/>
            <Route exact path={'/product-box'} render={() => <ProductBox filteredProducts={filteredProducts}/>}/>
        </div>*/
    );
}

export default App;
