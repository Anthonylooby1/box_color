import React, {useState} from 'react'
import Form from './Form'



const Box = (props) =>  {
    console.log(props.boxColor)
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin: 30, flexWrap:'wrap'}}>
      {props.boxColor.map((boxColor,Idx) => {
        return (
          <div style={{background:boxColor, height: 100, width: 100, margin: 10}}><p>America</p></div>
          )
        })}
    </div>
    
  )
}

export default Box