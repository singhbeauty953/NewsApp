import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=>{
  const [progress, setprogress] = useState(0)
  
 
    return (
    
   
      <div>
      
      <Router>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
      />
        <Routes basename = "/NewsApp">
          <Route path="/NewsApp" element = {<News setProgress= {setprogress}  key="general" pageSize={6} country = "in" category = "general"/>}/>
          <Route path="/business" element= {<News setProgress= {setprogress}   key="business" pageSize={6} country = "in" category = "business"/>}/>
          <Route path="/entertainment" element= {<News setProgress= {setprogress}   key="entertainment" pageSize={6} country = "in" category = "entertainment"/>}/>
          <Route path="/general" element= {<News setProgress= {setprogress}   key="general" pageSize={6} country = "in" category = "general"/>}/>
          <Route path="/health" element= {<News setProgress= {setprogress}   key = "health" pageSize={6} country = "in" category = "health"/>}/>
          <Route path="/sports" element= {<News setProgress= {setprogress}   key = "sports" pageSize={6} country = "in" category = "sports"/>}/>
          <Route path="/science" element= {<News setProgress= {setprogress}   key= "science" pageSize={6} country = "in" category = "science"/>}/>
          <Route path="/technology" element= {<News setProgress= {setprogress}   key= "technology" pageSize={6} country = "in" category = "technology"/>}/>

        </Routes>

        </Router>
      </div>
  
    )

}

export default App;