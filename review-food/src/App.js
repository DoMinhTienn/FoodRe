import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Base from './Base';
import Home from './components/Home';
import Login from './components/Login';
import Personal from './components/Personal';
import SignUp from './components/SignUp';
import News from './components/News';
import Order from './components/Order';
import Product from './components/Product';
import Store from './components/Store';
import EditAccount from './components/EditAccount';
import ArticleList from './components/ArticleList';
import Register from './components/Register';
import React from 'react';


function App() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Base />}>
                <Route index element={<Home/>}/>
                <Route path='/personal' element={<Personal/>}/>
                <Route path='/news' element={<News/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/store' element={<Store/>}/>
                <Route path='/articlelist' element={<ArticleList/>}/>
                <Route path='/editaccount' element={<EditAccount/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path="/signup" element={<SignUp/>} />
            </Route>
            <Route path='/order' element={<Order />}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;
