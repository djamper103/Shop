import './App.css';
import React, { useEffect, useState } from 'react'
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Redirect } from "react-router-dom";
import ManMain from "./Components/Man/ManMain";
import WomanMain from "./Components/Woman/WomanMain";
import axios from 'axios'
import Cart from "./Common/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import {AuthProvider, useAuth} from "./Common/Login/AuthContext";
import PrivateRoute from "./Common/Login/PrivateRouter";
import LoginContainer from "./Common/Login/LoginContainer";
import UpdateProfileContainer from "./Common/Login/UpdateProfileContainer";
import SignupContainer from "./Common/Login/SignupContainer";
import ForgotPasswordContainer from "./Common/Login/ForgotPasswordContainer";
import DashboardContainer from './Common/Login/DashNoardContainer'
import HeaderContainer from "./Components/Header/HeaderContainer";
import Product from "./Components/MainPage/Content/Product/Product"
import Shoes from "./Components/Shoes/Shoes"



function App({ loading, }) {
    const [state, setState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [cart, setCart] = useState([])
    const [priceCount, setPriceCount] = useState(0)



    useEffect(() => {
        if (cart.length > 0) {
            const res = cart.reduce((prev, product) => {
                return prev + parseInt(product.priceCount)
            }, 0)
            setPriceCount(res)


        } else {
            setPriceCount(0)
        }
    }, [cart])



    const addToCart = (product) => {
        const check = cart.every(item => {
            return item.id !== product.id
        })
        if (check) {
            setCart([...cart, { ...product }])
        } else {
            alert("The product has been added to cart")

        }
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

    const increaseCart = (product) => {
        setCart(cart.map(item => item.id === product.id ?
            { ...item, count: item.count + 1, priceCount: item.price * (item.count + 1) }
            : item))
    }

    const decreaseCart = (product) => {
        debugger
        setCart(cart.map(item => item.id === product.id ? item.count > 1 ?
            { ...item, count: item.count - 1, priceCount: item.priceCount - (item.priceCount / (item.count)) }
            : item : item))
    }

    useEffect(() => {
        if (fetching) {
            axios.get(`http://localhost:3002/shopItem?_limit=4&_page=${currentPage}`)
                .then(response => {
                    setState([...state, ...response.data])
                    setCurrentPage(prevState => prevState + 1)
                    setTotalCount(response.headers['x-total-count'])
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1) {
            setFetching(true)
        }

    }




    return (
        <AuthProvider>
            <div className='Content'>
                <HeaderContainer cart={cart.length} priceCount={priceCount}
                />
                <div className='Maincontent'>
                    <Route exact path='/Shop' render={() => <MainPage state={state} addToCart={addToCart} />} />
                    <Route exact path='/Man' render={() => <ManMain state={state} addToCart={addToCart} />} />
                    <Route exact path='/Woman' render={() => <WomanMain state={state} addToCart={addToCart} />} />
                    <Route exact path='/Shoes' render={() => <Shoes state={state} addToCart={addToCart} />} />
                    <Route exact path='/Product/:id' render={() => <Product state={state} addToCart={addToCart} />} />
                
                    
                    
                    <Container
                        className="d-flex align-items-center justify-content-center "
                        style={{ minHeight: "100vh" }}>
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <PrivateRoute exact path="/Dashboard" component={DashboardContainer} />
                            <PrivateRoute path="/update-profile" component={UpdateProfileContainer} />
                            <PrivateRoute Route path="/forgot-password" component={ForgotPasswordContainer} />
                            <Route exact path='/Cart'
                                render={() => loading ?
                                    <Redirect to="/login" /> :
                                    <Cart cart={cart} removeFromCart={removeFromCart} priceCount={priceCount}
                                        increaseCart={increaseCart} decreaseCart={decreaseCart}
                                    />} />
                            <Route path="/signup" component={SignupContainer} />
                            <Route path="/Login" component={LoginContainer} />

                        </div>
                    </Container>
                    
                </div>
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
