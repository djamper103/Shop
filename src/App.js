import './App.css';
import React, {useEffect, useState} from 'react'
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Redirect} from "react-router-dom";
import ManMain from "./Components/Man/ManMain";
import WomanMain from "./Components/Woman/WomanMain";
import NewRealeases from "./Components/NewRealeases/NewRealeases";
import axios from 'axios'
import Cart from "./Components/Cart/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"
import {AuthProvider, useAuth} from "./Components/Login/AuthContext";
import PrivateRoute from "./Components/Login/PrivateRouter";
import LoginContainer from "./Components/Login/LoginContainer";
import UpdateProfileContainer from "./Components/Login/UpdateProfileContainer";
import SignupContainer from "./Components/Login/SignupContainer";
import ForgotPasswordContainer from "./Components/Login/ForgotPasswordContainer";
import DashboardContainer from './Components/Login/DashNoardContainer'
import HeaderContainer from "./Components/Header/HeaderContainer";



function App({loading,}) {
    const [state, setState] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)
    const [cart, setCart] = useState([])
    const [priceCount, setPriceCount] = useState(0)

    const allPrice=(item)=>{
        const nums = item.id;
        const price = nums.reduce(function(result, num) {
            return result + num;
        }, 0);
        setPriceCount({priceCount:price
            
        })
    }

    const addToCart = (product,) => {
        allPrice(product)
        setCart([...cart, {...product}])

    }


    useEffect(() => {
        if (fetching) {
            // fetch('http://localhost:3000/db.json')
            // axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=16&_page=${currentPage}`)
            axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=16&_page=${currentPage}`)
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

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
        if (cart.length === 0) {

        }
    }

    return (
        <AuthProvider>
            <div className='Content'>
                <HeaderContainer cart={cart.length} priceCount={priceCount}/>
                <div className='Maincontent'>
                    <Route exact path='/Home' render={() => <MainPage state={state} addToCart={addToCart}/>}/>
                    <Route exact path='/Man' render={() => <ManMain/>}/>
                    <Route exact path='/Woman' render={() => <WomanMain/>}/>
                    <Route exact path='/NewRealeases' render={() => <NewRealeases/>}/>
                    <Container
                        className="d-flex align-items-center justify-content-center"
                        style={{minHeight: "100vh"}}>
                            <div className="w-100" style={{maxWidth: "400px"}}>

                                <PrivateRoute exact path="/Dashboard" component={DashboardContainer } />
                                <PrivateRoute path="/update-profile" component={UpdateProfileContainer} />
                                <PrivateRoute Route path="/forgot-password" component={ForgotPasswordContainer} />

                                <Route exact path='/Cart'
                                       render={() =>loading?
                                        <Redirect to="/login"/>:
                                           <Cart cart={cart} removeFromCart={removeFromCart} addToCart={addToCart}/>}/>
                                <Route path="/signup" component={SignupContainer} />
                                <Route path="/Login" component={LoginContainer} />

                            </div>
                    </Container>
                </div>
                <Footer/>
            </div>
        </AuthProvider>
    );
}

export default App;
