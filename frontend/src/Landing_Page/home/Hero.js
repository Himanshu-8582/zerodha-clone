import React from 'react'

function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Hero Image' />
                <h1 className='mt-5'>Investing in everything</h1>
                <p>Online plateform tp invest in Stocks, derivatives, mutual funds, and ,more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"25%", margin: "0 auto" }}>Signup Now</button>
            </div>
       </div >
    );
}

export default Hero;