import React from 'react'


function Footer() {
  return (
    <footer style={{backgroundColor:"rgb(240, 240, 240)"}}>
    <div className='container mt-5 border-top' >
      <div className='row mt-5'>
        <div className='col'>
          <img src='media/images/logo.svg' alt='Logo' style={{ width: "25%" }} />
          <p>&copy; 2024 Zerodha Broking Limited - All rights reserved.</p>
          <a href=''>Terms and conditions</a><br />
        </div>
        <div className='col'>
          <p>Company</p>
          <a href=''>About</a><br/>
          <a href=''>Products</a><br />
          <a href=''>Pricing</a><br/>
          <a href=''>Referal programme</a><br />
          <a href=''>Zerodha tech</a><br/>
          <a href=''>Press and media</a><br />
          <a href=''>Zerodha care</a><br/>
        </div>
        <div className='col'>
          <p>Support</p>
          <a href=''>Contact</a><br/>
          <a href=''>Support protal</a><br />
          <a href=''>Z-connect blog</a><br/>
          <a href=''>List of charges</a><br />
          <a href=''>Downloads and resources</a><br/>
        </div>
        <div className='col'>
          <p>About</p>
          <a href=''>Open account</a><br/>
          <a href=''>Fund transfer</a><br />
          <a href=''>60 day challenge</a><br/>
        </div>
      </div>

      <div className='mt-5 text-muted' style={{fontSize:"14px"}}>
        <p>
          lambda (λ) is a term used in options trading to represent the percentage change in an option's price for a 1% change in the underlying asset's price. It is also known as leverage or gearing. A higher lambda indicates that the option is more sensitive to changes in the underlying asset's price, which can lead to larger profits or losses for traders.
        </p>
        <p>
          delta (Δ) is a measure of how much an option's price is expected to change for a $1 change in the price of the underlying asset. It ranges from 0 to 1 for call options and from -1 to 0 for put options. A delta of 0.5 means that for every $1 increase in the underlying asset's price, the option's price is expected to increase by $0.50.
        </p>
        <p>
          theta (Θ) is a measure of how much an option's price is expected to change as time passes, assuming all other factors remain constant. It represents the rate of decline in the option's value as it approaches its expiration date. A negative theta indicates that the option's price will decrease over time, while a positive theta indicates that the option's price will increase over time.
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;