import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row p-5 mb-5 mt-5'>
                <h1 className='fs-2 text-center'>We pioneered the discount booking model in India.<br/> Now, we are braking ground with our technology.</h1>
            </div>

            <div className='row p-5 mt-5 border-top text-muted ' style={{lineHeight:"1.8"}} fontSize={"1.2em"}>
                <div className='col-6 p-5'>
                    <p>We sice started operators on the 15th of August, 2010 with the you of breaking all barriers at traders and wastors fazs in india in terms of cust, support, and technology We named the compony Ceridia, a camnation of Zero and Rodtw, the Sansut word for barrier.</p>
                    <p>Today, uur dietetive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p>Dyer Te Crore clants place milions of arders every day through our powerful ecosystem of investment plactonma contributing over 15% of all indian retal trading volumes.</p>
                </div>
                <div className='col-6 p-5'>
                    <p>In addition run a number of popular open ontire educdiuna arall commmarstyles to al tracers and investors.</p>
                    <p><a href='/' style={{textDecoration:"none"}}>Rainmatter</a>, cur fintech fund and roubator, has invested asveral frotech startups with the goal of growing the Indian cupital markets.</p>
                    <p>And yet, we are awways up to something now avary Catch up an the latest spostes on our blag or the mockets saying about us.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;