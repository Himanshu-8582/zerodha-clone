import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';        
import RightSection from './RightSection';  
import Universe from './Universe';


function ProductPage() {
    return ( 
        <>
            <Hero />
            <LeftSection
                imageURL="media/images/kite.png"
                productName="Kite"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />

            <RightSection
                imageURL="media/images/console.png"
                productName="Console"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                learnMore=""
            />
            <LeftSection
                imageURL="media/images/coin.png"
                productName="Coin"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <RightSection
                imageURL="media/images/kiteconnect.png"
                productName="Kite connect API"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                learnMore=""
            />
            <LeftSection
                imageURL="media/images/varsity.png"
                productName="Varsity mobile"
                productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant Ul, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo=""
                learnMore=""
                googlePlay=""
                appStore=""
            />
            <p className='text-center'>Want to know more about our technology stack? Chcek out the Zerodha.tech</p>
            <Universe />
        </>
     );
}

export default ProductPage;