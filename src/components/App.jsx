import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../utils/style/GlobalStyle';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Error from '../pages/Error/Error';
import Footer from './Footer/Footer';

function App() {
   return (
      <div>
         <Router>
            <GlobalStyle />
            <Header firstName="Tony" isConnected={false} />
            <Routes>
               <Route exact path="/" element={<Home />}></Route>
               <Route path="/login" element={<Login />}></Route>
               <Route
                  path="/profile"
                  element={<Profile firstName="Tony" lastName="Jarvis" />}
               ></Route>
               <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}

export default App;
