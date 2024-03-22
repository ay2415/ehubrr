import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sellpage from './sell';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './home';
import SellLast from './selllast';
import Card from './components/card';
import Shop from './shop';

function App() {
  return (
    <><div>

      <Header/>
      <Shop/>
        {/* <HomePage/>
      <div className="ever">
      <Card
        discount="SALE"
        image="https://www.mouser.in/images/marketingid/2018/img/135124345.png?v=070223.0309"
        type="Cameras"
        name="Pi-Cam"
        cost="&#8377;159"
      />
      <Card
        discount="NEW"
        image="https://png.pngtree.com/png-clipart/20220616/original/pngtree-raspberry-pi-3-model-b-png-image_8090946.png"
        type="Accessories"
        name="Raspberry"
        cost="&#8377;159"
      />
      <Card
        discount="10%"
        image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        type="Accessories"
        name="Raspberry"
        cost="&#8377;159"
      />
      <Card
        discount="SALE"
        image="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
        type="Accessories"
        name="Raspberry"
        cost="&#8377;159"
      />
      </div> */}
      <Footer/>

      </div>
    </>
  );
}

export default App;
