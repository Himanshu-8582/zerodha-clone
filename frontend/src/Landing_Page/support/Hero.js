import React from 'react'

function Hero() {
    return (
        <section className='container-fluid ' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track  Tickets</a>
            </div>
            <div className='row p-3 m-3'>
                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Search for an answer or browser help topics to create a ticket.</h1>
                    <input placeholder='Eg. How do I activate F&O' /><br/>
                    <a href=''>Track account opening</a>
                    <a href=''> Track segment activation</a>
                    <a href=''> Intraday margins</a>
                    <a href=''> Kite user manual</a>
                </div>

                <div className='col-6 p-3'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li><a href='' style={{lineHeight:"2"}}>Current Takeovers and Delistings - January 2025</a><br/></li>
                        <li><a href='' style={{lineHeight:"2"}}>Latest Intraday leverage - MIS & CO</a><br/></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;