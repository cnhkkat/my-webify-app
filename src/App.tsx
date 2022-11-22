import './global.custom.scss';
import React from 'react'
import Nav from './features/Nav'
import s from './App.scss';
import classNames from 'classnames';
import { Outlet } from "react-router-dom";
import Footer from './features/Footer';

function App() {

  const bgClasses = [s.bg0, s.bg1, s.bg2];

  return (
   <div className={classNames(s.AppBox, bgClasses[0])}>
    <Nav />
    <Outlet />
    <Footer />
   </div>
  )
}

export default App