import { useState } from "react"

export default function Header() {
 
    localStorage.setItem("theme" , "light")  
      let b =localStorage.getItem("theme")
      
  const toggleTheme = () => {
    if(b == "dark"){
        localStorage.setItem("theme" , "light")  
        document.documentElement.classList.add("light")
        document.documentElement.classList.remove("dark")

    }else{
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
    }
  }    
 

    return(
        <button onClick={ toggleTheme}>Toggle</button>
    )

}