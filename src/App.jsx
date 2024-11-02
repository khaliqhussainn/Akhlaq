import React from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Slide from "./components/Slide.jsx";
import Card from "./components/Card.jsx";
import Book from "./components/Book.jsx";
import MainContent from './components/MainContent';

// import Footer from "./components/Footer.jsx";
import "./App.css";


export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <div className="animated fadeIn">
        <MainContent />
      </div>
      <Slide />
      <Card />
      <Book />
      {/* <Footer /> */}
    </div>
  );
}
