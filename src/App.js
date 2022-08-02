import './App.css';
import React, { Component } from 'react'
import Navbaar from './components/Navbaar';
import News from './components/News';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
// import React, { useRef } from 'react'
// import LoadingBar from 'react-top-loading-bar'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  render() {
    return (
      // <div>
      //   <News country="in" category="science"/>
      // </div>
      <BrowserRouter>
      <Navbaar/>
      <LoadingBar
        color='#f11946'
        progress={50}
        
      />
      {/* <Routes>
        <Route path="/"/>
         <News country="in" category="general"/>
        <Route path="/entertainment"/>
         <News country="in" category="entertainment"/>
        <Route path="/business"/>
         <News country="in" category="business"/>
        <Route path="/general"/>
         <News country="in" category="general"/>
        <Route path="/health"/>
         <News country="in" category="health"/>
        <Route path="/science"/>
         <News country="in" category="science"/>
        <Route path="/sports"/>
         <News country="in" category="sports"/>
        <Route path="/technology"/>
         <News country="in" category="technology"/>
           
      </Routes> */}
      
      <Routes>
    <Route exact path="/" element={<News key="general"  pageSize={15} country="in" category="general"/>  } >
    </Route>      
    <Route exact path="/business" element={<News key="business"  pageSize={15} country="in" category="business"/>  } >
    </Route>      
    <Route exact path="/entertainment" element={<News  key="entertainment" pageSize={15} country="in" category="entertainment"/>  } >
    </Route>      
    <Route exact path="/health" element={<News  key="health" pageSize={15} country="in" category="health"/>  } >
    </Route>      
    <Route exact path="/science" element={<News key="science"  pageSize={15} country="in" category="science"/>  } >
    </Route>      
    <Route exact path="/technology" element={<News key="technology" pageSize={15} country="in" category="technology"/>  } >
    </Route>      
    <Route exact path="/sports" element={<News key="sports" pageSize={15} country="in" category="sports"/>  } >
    </Route>      
      
    </Routes>
    </BrowserRouter>
    )
  }
}