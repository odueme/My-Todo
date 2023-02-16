import React, {useState}from 'react'



function Header(props){
    const [value, setValue] = useState("")
   
  function handleChange(event){
    const {value} = event.target
    setValue(value)
    console.log(value)
  }


  
    

    return(
        <header className={props.mode ? 'App-header' : 'App-header2'}>
        <div className='header-components'> 
        <h1>T O D O</h1>
        </div>
        <div className="round">
    <input type="checkbox" />
    <label htmlFor="checkbox" style={{background: "transparent",   borderColor: "grey"}}></label>
  </div>
        <input type="text" placeholder='Create a new todo...' className='textInput' 
        style={{background: props.mode ? "#fff": "hsl(235, 24%, 19%)", color: props.mode ? "black" : "white"}} 
        onChange={handleChange} onKeyDown={(event) =>
        {
        props.keyDown(event)
        if(event.key === 'Enter'){
          setValue("")
        }
       
      }
  
        }  value={value}/>
        </header>
    )
}

export default Header