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
import { Container } from "react-bootstrap"
import { AuthProvider, useAuth } from "./Common/Login/AuthContext";
import Login from "./Common/Login/Login";
import UpdateProfile from "./Common/Login/UpdateProfile";
import Signup from "./Common/Login/Signup";
import ForgotPassword from "./Common/Login/ForgotPassword";
import Dashboard from './Common/Login/DashBoard'
import Header from "./Components/Header/Header";
import Product from "./Components/MainPage/Content/Product/Product"
import Delivery from "./Components/MainPage/Content/Product/Delivery"
import Shoes from "./Components/Shoes/Shoes"
import Favorites from "./Common/Favorites/Favorites"


function App() {
    const [state, setState] = useState([])
    const [cart, setCart] = useState([])
    const [favorites, setFavorites] = useState([])
    const [priceCount, setPriceCount] = useState(0)
    const [loadingg, setLoadingg] = useState(false)


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

    const addFavorites = (product) => {
        const check = favorites.every(item => {
            return item.id !== product.id
        })
        if (check) {
            setFavorites([...favorites, { ...product }])
        } else {
            alert("The product has been added to cart")

        }
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product.id !== productToRemove.id))
    }
    const removeFromFavorites = (productToRemove) => {
        setFavorites(favorites.filter(product => product.id !== productToRemove.id))

    }


    const increaseCart = (product) => {
        setCart(cart.map(item => item.id === product.id ?
            { ...item, count: ++item.count, priceCount: item.price * item.count }
            : item))
    }

    const decreaseCart = (product) => {
        setCart(cart.map(item => item.id === product.id ? item.count > 1 ?
            { ...item, count: item.count - 1, priceCount: item.priceCount - (item.priceCount / (item.count)) }
            : item : item))
    }

    useEffect(() => {     
            axios.get(`/api/shopItemAll`)
            .then(response => {
                setState([...state, ...response.data.data])
            })
    }, [])



    return (
        <AuthProvider loadingg={loadingg} setLoadingg={setLoadingg}>
            <div className='Content'>
                <Header cart={cart.length} priceCount={priceCount} loadingg={loadingg}/>
                <div className='Maincontent'>
                    <Route exact path='/Shop' render={() => <MainPage  addToCart={addToCart} addFavorites={addFavorites}
                        removeFromFavorites={removeFromFavorites}  
                    />} />
                    <Route exact path='/Man' render={() => <ManMain addToCart={addToCart} addFavorites={addFavorites}
                        removeFromFavorites={removeFromFavorites}  
                    />} />
                    <Route exact path='/Woman' render={() => <WomanMain addToCart={addToCart} addFavorites={addFavorites}
                        removeFromFavorites={removeFromFavorites}  
                    />} />
                    <Route exact path='/Shoes' render={() => <Shoes addToCart={addToCart} addFavorites={addFavorites}
                        removeFromFavorites={removeFromFavorites}  
                    />} />
                    <Route exact path='/Product/:id' render={() =><Product state={state} addToCart={addToCart} addFavorites={addFavorites}
                        removeFromFavorites={removeFromFavorites}
                    />} />
                     <Route exact path='/delivery' render={() =><Delivery/>} />
                    <Route exact path='/Favorites' render={() => <Favorites favorites={favorites} removeFromFavorites={removeFromFavorites}
                        addToCart={addToCart} />}  />

                    <Route exact path='/Cart'
                        render={() => loadingg ?
                            <Cart cart={cart} removeFromCart={removeFromCart} priceCount={priceCount}
                                increaseCart={increaseCart} decreaseCart={decreaseCart} addFavorites={addFavorites} removeFromFavorites={removeFromFavorites}
                            /> :
                            <Redirect to="/login" />
                        } />

                    <Container
                        className="d-flex align-items-center justify-content-center  flex-wrap-wrap"
                        style={{ minHeight: "100vh" }}>
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <Route exact path='/Login' render={() => <Login cart={cart.length}  setLoadingg={setLoadingg} />} />
                            <Route exact path='/Dashboard' render={() => <Dashboard />} />
                            <Route exact path='/update-profile' render={() => <UpdateProfile />} />
                            <Route exact path='/forgot-password' render={() => <ForgotPassword />} />
                            <Route exact path='/signup' render={() => <Signup />} />

                        

                        </div>
                    </Container>

                </div>

                <Footer />
            </div>
         </AuthProvider>
    
    );
}

export default App;
