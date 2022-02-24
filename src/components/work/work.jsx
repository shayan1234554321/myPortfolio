import React, { forwardRef } from 'react';
import Card from './card/card';
import './scss/work.css'
import wallmania from '../../images/wallmania.jpg'
import recipes from '../../images/recipes.jpg'
import photoeditor from '../../images/photoeditor.jpg'

const Work = forwardRef(({...props},ref) => {

  const child = {
    animate : {
      opacity: 0,
      transition:{
        duration:2
      }
    },
    onScreen:{
      opacity: [0 ,1],
      transition:{
        duration:2
      }
    }
  }


  return (
  <div className='work' ref={ref} style={{zIndex: "17"}} >
    <div className="workText">My <a style={{color: "rgb(247, 65, 104)"}} >Work</a>  Examples</div> 
    <div className="cards">
      < Card link="/wallpaper" name="WALL-MANIA" image={wallmania} />
      < Card link="/food" name="RECIPES" image={recipes} />
      < Card link="/editor" name="PHOTO EDITOR" image={photoeditor} />
    </div>
  </div>
  );
});

export default Work ;
