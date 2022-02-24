import React, { useEffect, useRef, useState } from 'react' ;
import Startup from '../../components/startup/startup';
import MainComp from '../../components/main/main.jsx';
import Menu from '../../components/menu/menu.jsx';
import Work from '../../components/work/work';
import Expertise from '../../components/expertise/expertise';
import About from '../../components/about/about';
import Contact from '../../components/contact/contact';
import './main.css'



const Main = () => {

  const [ scrollView , setScrollView ] = useState(false);
  const main = useRef(null) ;
  const work = useRef(null) ;
  const experties = useRef(null) ;
  const about = useRef(null) ;
  const contact = useRef(null) ;

  return (
    <div className="App" >
      <Menu main={main} work={work} experties={experties} about={about} contact={contact} />
      < MainComp ref={main} />
      < Work ref={work} />
      < Expertise ref={experties} />
      < About ref={about} />
      < Contact ref={contact} />
    </div>
  );
}

export default Main;