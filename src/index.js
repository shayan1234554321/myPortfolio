// import React from 'react';
// import { render } from 'react-dom';
// import App from './App.jsx';
// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import {BrowserRouter , Routes , Route} from 'react-router-dom'
import { render } from 'react-dom';
import Main from './pages/main/main.jsx'
import Wallpaper from './pages/wallpaper/wallpaper.jsx'
import Food from './pages/food/food.jsx'
import Startup from './components/startup/startup.jsx'
import Editor from './pages/photoEditor/editor.jsx';

render(
  <BrowserRouter>
      < Startup />
    <Routes >
      <Route path='/'  element={ <Main/> } />
      <Route exact path="/wallpaper" element={ <Wallpaper /> } />
      <Route exact path="/food" element={ <Food /> } />
      <Route exact path="/editor" element={ <Editor/> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

