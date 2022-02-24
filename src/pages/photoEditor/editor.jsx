import React, { useEffect, useRef, useState } from 'react'
import './scss/editor.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import * as htmlToImage from 'html-to-image';
import  downloadjs  from 'downloadjs'

const Editor = () => {

  const [ brightness , setBrightness ] = useState(100);
  const [ sepia , setSepia ] = useState(0);
  const [ blur , setBlur ] = useState(0);
  const [ contrast , setContrast ] = useState(100);
  const [ grayscale , setGrayscale ] = useState(0);
  const [ saturate , setsaturate ] = useState(100);
  const [ select , setSelect ] = useState('brightness')
  const [ image , setImage ] = useState(undefined);


  function handleDownload(e){
    htmlToImage.toPng(document.getElementById('downloadImage'))
    .then(function (dataUrl) {
    downloadjs(dataUrl, 'my-node.png');
  });
  }

  return (
    <div className='editor' >
      <div className='editorTop' >
        <label htmlFor="chooseFile" >
          <i class="bi bi-cloud-arrow-up-fill" style={{color: "white" , fontSize: "40px" , cursor: "pointer"}} ></i>
        </label>
        <input style={{display: "none"}} id='chooseFile' type="file" accept='image/*' onChange={(e)=>{setImage(URL.createObjectURL(e.target.files[0]))}} /> 
        {
          image &&
        <i onClick={handleDownload} class="bi bi-cloud-arrow-down-fill" style={{color:"white" , fontSize: "40px" , marginLeft: "50px" , cursor: "pointer" }} ></i>
        }
      </div>
      {
        image? 
      <div className='editorPhoto' id="downloadImage" style={{backgroundImage: `url(${image})` , 

          filter :  `brightness(${brightness}%)
                     sepia(${sepia}%) 
                     blur(${blur}px)
                     contrast(${contrast}%)
                     grayscale(${grayscale}%)
                     saturate(${saturate}%)
                     `
          }} >
          
          <img src={image} className="editorSize" />
      </div>
      :
          <div style={{color: "white" ,  fontFamily: "fantasy" }} >Select an image</div>
      }
        <div className="editorBottom">
          <input className='editorSlider' onChange={(e)=>{setBrightness(e.target.value)}} value={brightness} style={{display: (select === "brightness")? 'block':'none' }} type="range" min="1" max="200"  />
          <input className='editorSlider' onChange={(e)=>{setSepia(e.target.value)}} value={sepia} style={{display: (select === "sepia")? 'block':'none' }} type="range" min="0" max="100"  />
          <input className='editorSlider' onChange={(e)=>{setBlur(e.target.value)}} value={blur} style={{display: (select === "blur")? 'block':'none' }} type="range" min="0" max="30"  />
          <input className='editorSlider' onChange={(e)=>{setContrast(e.target.value)}} value={contrast} style={{display: (select === "contrast")? 'block':'none' }} type="range" min="1" max="200"  />
          <input className='editorSlider' onChange={(e)=>{setGrayscale(e.target.value)}} value={grayscale} style={{display: (select === "greyscale")? 'block':'none' }} type="range" min="0" max="99"  />
          <input className='editorSlider' onChange={(e)=>{setsaturate(e.target.value)}} value={saturate} style={{display: (select === "saturate")? 'block':'none' }} type="range" min="0" max="200"  />
          <div className="editorSelect">
          <i onClick={()=>{setSelect("brightness")}} class="editorIcon bi bi-brightness-high" style={{fontSize: '30px'}} ></i>
          <i onClick={()=>{setSelect("sepia")}} class="editorIcon bi bi-file-break-fill" style={{fontSize: '30px'}} ></i>
          <i onClick={()=>{setSelect("blur")}} class="editorIcon bi bi-bullseye" style={{fontSize: '30px'}} ></i>
          <i onClick={()=>{setSelect("contrast")}} class="editorIcon bi bi-yin-yang" style={{fontSize: '30px'}} ></i>
          <i onClick={()=>{setSelect("greyscale")}} class="editorIcon bi bi-funnel-fill" style={{fontSize: '30px'}} ></i>
          <i onClick={()=>{setSelect("saturate")}} class="editorIcon bi bi-palette-fill" style={{fontSize: '30px'}} ></i>
          </div>
        </div>
    </div>
  )
}

export default Editor ;