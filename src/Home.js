import React from 'react';
import Product from "./Product";
import './home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonDevices/GW/GW_Desktop_Dotbulb_1500X600._CB658001698_.jpg" 
                alt="amazon-clone-image"
            />
            <div className="home-main-card">
                <div className="home-header">
                    <h2 className="home-headline">Top picks for you</h2>
                </div>
                <div className="home-card-body">
                    <div className="home-section grid-row-1">
                        <div className="home-section container-0">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">ACs</span>

                                </div>
                            </a>
                        </div>
                        <div className="home-section container-1">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Home Products</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="home-section grid-row-2">
                        <div className="home-section container-0">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/2._SY116_CB656503003_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Footware</span>
                                </div>
                            </a>
                        </div>
                    
                        <div className="home-section container-1">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Watches</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* ---------    */}
            <div className="home-main-card">
                <div className="home-header">
                    <h2 className="home-headline">Top picks for you</h2>
                </div>
                <div className="home-card-body">
                    <div className="home-section grid-row-1">
                        <div className="home-section container-0">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_186x116_1._SY116_CB414480869_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">ACs</span>

                                </div>
                            </a>
                        </div>
                        <div className="home-section container-1">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/QC/Home/bedsheet_B06Y5GF9SF_Asins_186x116._SY116_CB409842842_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Home Products</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    
                    <div className="home-section grid-row-2">
                        <div className="home-section container-0">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/2._SY116_CB656503003_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Footware</span>
                                </div>
                            </a>
                        </div>
                    
                        <div className="home-section container-1">
                            <a aria-label="ACs" className="link-redirect" href="/login">
                                <div className="home-section image-container">
                                    <img alt="ACs" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Mens_fashion/3._SY116_CB656503003_.jpg"></img>
                                </div>
                                <div className="home-section label">
                                    <span className="home-label">Watches</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Home
