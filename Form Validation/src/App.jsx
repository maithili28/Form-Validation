import FormInput from './components/FormInput'
import './App.css'
import {useState} from 'react'

export default function App() {
  const [value,setValue]=useState({
    userName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const input=[
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"UserName",
      error:"Username should be 3-16 characters and shouldn't include any special character!",
      label:"UserName",
      required:true,
      pattern: "^[A-Za-z0-9]{5,16}$",

    },
    {id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      error: "It should be a valid email address!",
      required:true,
      label:"Email"
    },
    {id:3,
      name:"password",
      type:"password",
      placeholder:"Password",
      required:true,
      error: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {id:4,
      name:"confirmPassword",
      type:"password",
      required:true,
      placeholder:"ConfirmPassword",
      error:"Passwords don't match!",
      label:"Confirm Password",
      pattern:value.password,
    }
  ]
  // const usernameRef=useRef()
  // console.log(usernameRef)

  const handle=(e)=>{
      e.preventDefault()
      // console.log(usernameRef.current.value);
      // check value in console.

      const data=new FormData(e.target)
      console.log(Object.fromEntries(data.entries()));
      // display form data on console
  }

  const onChange=(e)=>{
    setValue({...value,[e.target.name]:e.target.value})
  }
  return (
    <div className='app'>
      <form onSubmit={handle} className='registerForm'>
      <h1>Registration Form</h1>
        {input.map((inputs)=>(
          <FormInput
            key={inputs.id}
            {...inputs}
            value={value[inputs.name]}
            onChange={onChange}
          />
        ))
        }
        {/* <FormInput   placeholder="UserName" name="UserName" onChange={onChange}/>
        <FormInput placeholder="Email" name="Email"/>
        <FormInput  placeholder="Password" name="Password"/>
        <FormInput   placeholder="ConfirmPassword" name="ConfirmPassword"/> */}

        <button>submit</button>
      </form>
    </div>
  )
}