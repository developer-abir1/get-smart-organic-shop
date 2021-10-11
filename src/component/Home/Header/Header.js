import React from 'react';
import './Header.css';
import photo1 from '../../../image/v1.jpg'
import photo2 from '../../../image/v3.jpg'
import photo3 from '../../../image/TpJ89GUfA.jfif'
const Header = () => {
    return (
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="main-content  ">
                                <h1 className="text-uppercase">WE DO Healthy</h1>
                                <p>100% organic guaranteed</p>


                                <button className="Order-nowBtn">Order Now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={photo1} class="d-block w-100" alt="..." />

                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img src={photo2} class="d-block w-100" alt="..." />

                        </div>
                        <div className="col-md-6">
                            <div className="main-content   ">
                                <h1 className="text-uppercase">WE DO Healthy</h1>
                                <p>100% organic guaranteed</p>


                                <button className="Order-nowBtn">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="row  align-items-center">

                        <div className="col-md-6 ">
                            <div className="main-content  ">
                                <h1 className="text-uppercase">WE DO Healthy</h1>
                                <p>100% organic guaranteed</p>


                                <button className="Order-nowBtn">Order Now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={photo3} class="d-block w-100" alt="..." />

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;