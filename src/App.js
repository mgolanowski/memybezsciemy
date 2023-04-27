
import './App.css';
import React from 'react'; 
import './components/header.css';
import './components/post.css';
import './components/vote.css';
import './components/footer.css';
import './components/imagestyle.css';
import Header from "./components/Header";
import Upvote from "./components/Upvote";
import Downvote from "./components/Downvote";

import ImageGallery from './components/ImageGallery';
import Footer from "./components/Footer";



function App() {
  return (
    <div>
    <Header />
    
    <h2> Dzienna dawka humoru</h2>
  
    <main>
      <div className='main-content'>
      <div className='container'><ImageGallery /><Upvote/>
      <Downvote/></div>
      <div className='container'><ImageGallery /><Upvote/>
      <Downvote/></div>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
