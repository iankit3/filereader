import React from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

class App extends React.Component{
   /**
     Regex
  
    *date_regex_start = /date[\:\s\n]?[\:\-\n]/gi;
    *name = \((company name)|(company))[\:\s\n]?[\:\-\n]\;
    *pan = \((pan ?(number|num|no))|(com))[\:\s\n]?[\:\-\n]\gi;
    *
    *terminator = \[ \t\n\v]\gi;

   **/

   render(){
       return(
           <div className="container-fluid">
             <Sidebar /> 
             <Main /> 
             
           </div>
       )
   }
}

export default App;
