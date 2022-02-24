import React, { useState } from 'react'
import './scss/food.css'
import burger from '../../images/burger.png'
import tomato from '../../images/tomato.png'
import axios from 'axios'
import { motion } from 'framer-motion'

const Food = () => {

  const [search , setSearch] = useState('');
  const [recipes , setRecipes] = useState([]);
  const [ display , setDisplay ] = useState(false)

  //---------------------- varable for framer animation --------------------------

  const parent = {
    initial: {
      transition:{
        duration: 2
      }
    },
    animate: {
      transition:{
        staggerChildren: 0.3
      }
    }
  }
  
  const child = {
    initial: {
      transition:{
        duration: 2
      },
      y: -200
    },
    animate: {
      y:[ -10 , 10 , -10 ],
      transition:{
        repeat: Infinity,
        duration: 3

      }

    }
  }

  function spoon(){
    window.open("https://www.spoonacular.com");
  }

  const getRecipes = async(e) => {
    e.preventDefault()
    if(search){
      try{
        const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=99f6c96ee88f4a2fb6e292bf2b30bd53&addRecipeNutrition=true&query="+search) 
        setRecipes(res.data.results)
        setDisplay(true)
        console.log(res.data.results)
      }catch(err){
        console.log(err)
      }

    }
    setSearch('')
  }

  return (
    <div className='food' >

        {/* ------------------ Images Layer ------------------- */}

        <motion.div initial="initial" animate="animate" variants={parent} className="foodLayer">
          <motion.div className='foodImage' variants={child} style={{backgroundImage: `url(${burger})`}} ></motion.div>
          <motion.div className='foodImage' variants={child} style={{backgroundImage: `url(${tomato})`}} ></motion.div>
          <motion.div className='foodImage' variants={child} style={{backgroundImage: `url(${tomato})`}} ></motion.div>
          <motion.div className='foodImage' variants={child} style={{backgroundImage: `url(${tomato})`}} ></motion.div>
          <a className='foodText' onClick={spoon} >Using <br /> <a className='spoonacular' > <a style={{color: "rgba(255, 189, 111)"}} >Spoon</a>acular </a> <br /> API</a>
          <a className='burgerText' href="https://www.freepnglogos.com/pics/burger">Burger from freepnglogos.com</a>
        </motion.div>

        {/* ------------------- Input ---------------- */}

        <form onSubmit={getRecipes} >
          <input type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} autoFocus={true} placeholder='Your Recipe' className='foodSearch' />
        </form>

        {/* -------------------- Recipes display ------------------ */}

        <div className="foodDisplay" style={{display: display? 'grid':'none' }} >
          <button className='recipesClose' onClick={()=>{setDisplay(false)}} ></button>
          {recipes.map((recipe)=>(
            <div className='recipeCard' onClick={()=>{window.open(recipe.spoonacularSourceUrl)}} >
              <div className='recipeImage' style={{backgroundImage: `url(${recipe.image})`}} ></div>
              <a className='recipeText' >
                {recipe.title} <br /> 
              </a>
              <a className='recipeSmallText' >
                Calories: &nbsp; &nbsp;  {recipe.nutrition.nutrients[0].amount} <br />
                Fat: &nbsp; &nbsp;  {recipe.nutrition.nutrients[1].amount} <br />
                Carborates: &nbsp; &nbsp;  {recipe.nutrition.nutrients[3].amount}
              </a>
            </div>
          ))}
          { (recipes.length === 0)?"No Result":'' }
        </div>
    </div>
  )
}

export default Food;