import './App.css';
import NavBar from './components/NavBar';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import React, { useState } from 'react'
import News from './components/News';
import About from './components/About'
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const pageSize = 6;     //change this number to change the number of pages or cards viewed at a single time
  const apikey = process.env.REACT_APP_NEWS_API;

  // state = {
  //   progress: 0
  // }

  const[progress, setProgress] = useState(0);

  // setProgress =(progress)=>{
  //   setState({progress: progress})
  // }

  // render() { //render method is a lifecycle method. Its basic work is to render the html on screen(after compiling the html to JSX first)
    return (
      <BrowserRouter>
      <div>
        
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>  */}
        <Routes>
          <Route exact path='/' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path='/business' element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize={pageSize} country="in" category="business"/>} />
          <Route exact path='/entertainment' element={<News setProgress={setProgress} apikey={apikey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>} />
          <Route exact path='/general' element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize={pageSize} country="in" category="general"/>} />
          <Route exact path='/health' element={<News setProgress={setProgress} apikey={apikey} key="health" pageSize={pageSize} country="in" category="health"/>} />
          <Route exact path='/science' element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize={pageSize} country="in" category="science"/>} />
          <Route exact path='/sports' element={<News setProgress={setProgress} apikey={apikey} key="sports" pageSize={pageSize} country="in" category="sports"/>} />
          <Route exact path='/technology'element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize={pageSize} country="in" category="technology"/>} />
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  // }
}

export default App;
