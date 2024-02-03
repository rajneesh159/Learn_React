import React from "react"
import ReactDOM from "react-dom"

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://i.pinimg.com/564x/3c/aa/28/3caa28fa5d82b6ecd52ebb0e7dc73000.jpg" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Offers</li>
          <li>Contact Us</li>
          <li>Cart</li>

        </ul>
      </div>

    </div>
  )
}

const RestaurentCard = () => {
  return (
    <div className="res-card">
      <img className="res-logo" src="https://i.pinimg.com/236x/48/cf/49/48cf499ef917e1767846aad628e633fe.jpg" />
      <h4>Dominos</h4>
      <h4>Pizza ,Burger, Cheesecake, Garlic Nan</h4>
      <h4>4.4 stars</h4>
      <h4> 38 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        < RestaurentCard resName="Pizza Hut" causine="Biryani Pixxxa, Burger" />
        < RestaurentCard />
        < RestaurentCard />
        < RestaurentCard />
        < RestaurentCard />
        < RestaurentCard />
        < RestaurentCard />

      </div>
    </div>
  )
}





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/*  //Body
    //Footer */}
    </div>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
