import React, { useEffect, useState } from 'react';
import NavBar from '../../Shear/NavBar/NavBar';
import Header from '../Header/Header';
import Shop from '../Shop/Shop';

const Home = () => {

    return (
        <div>
            <NavBar />
            <Header></Header>
            <Shop  ></Shop>
        </div>
    );
};

export default Home;