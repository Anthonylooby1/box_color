import React,{useState} from 'react'

const Form = (props) => {
    const [boxColor, setBoxColor] = useState("")

    // const [color, setColor] = useState("")

    const handleSubmission = (e)=> {
        e.preventDefault()
        props.newColor(boxColor)
        // console.log(boxColor)
    }

    const changeColor = (e) => {
        setBoxColor(e.target.value)
    }

    return(
        <div>
            <form>
                <label>Color</label>
                <input type='text' name='color' onChange={changeColor}value={boxColor}></input>
                <button type='submit' onClick={handleSubmission}>Add</button>
            </form>
        </div>
    )
    }

    
//     return (
//         <div>
//             <form>
//             <div> 
//                 <label>Color</label>
//                 <input type='text' name='box'></input>
//                 <button type='submit'>Add</button>
//             </div> 
//             </form>
//         </div>
//     )
//     )
// }

export default Form