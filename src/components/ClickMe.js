// import React, { useState } from "react";

// function ClickMe(){
//   const [form, setForm] = useState('')
//   const [counter, setCounter] = useState(0)

//   function handleChange(e){
//     setForm(e.target.value)
//   }

//   function handleSubmit(e){
//     e.preventDefault()
//     setCounter(counter + form.length)
//     setForm('')
//   }

//   return(
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input
//         type='text'
//         value={form}
//         onChange={handleChange}
//         >
//       </input>
//       <button>Click Me</button>
//       {counter}
//       </form>
//     </div>
//   )
// }

// export default ClickMe

// Control-Form element that once subited increases a counter by the length of the string within the text box and resets the input