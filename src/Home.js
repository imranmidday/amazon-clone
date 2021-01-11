import React from 'react';
import Product from "./Product";
import './home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Cnnjpp/OnePlus/Week_53/Year_endsale/Family/D18887026_IN_WLD_BAU_OnePlus_Family_DesktopHero_1500x600._CB412699882_.jpg" 
                alt="amazon-clone-image"
            />
            {/* Products id, title, price, rating, image*/}
            <div className="home__row">
                <Product
                    id = "12345"
                    title = "Zero To One"
                    price = {499}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg"
                />
                <Product
                    id = "12345"
                    title = "Zero To One"
                    price = {499}
                    rating = {5}
                    image = "https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg"
                />
            </div>
            
            {/* Productd*/}
        </div>
    )
}

export default Home
