import React from 'react'
// import * as yup from 'yup'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'

// const schema = yup.object().shape({
//     email: yup.string().email().required("A valid email address is required"),
//     password: yup.string().password().required("A password is required")
// })

const inputFields = [
    {
        label: "Email",
        name: "email",
        inputType: "email",
        placeholder: "E.g. johndoe@email.com",
       
    },
    {
        label: "Password",
        name: "password",
        inputType: "password",
        placeholder: "Enter your password",
        
    },
]

function LoginV() {

    function loginHandler(data) {
        console.log("data", data)
    }

  return (
    <form className="w-11/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mx-auto space-y-4 mt-12">
        <h1 className='text-2xl'><strong>Login</strong></h1>
        <div className="space-y-3">
            {inputFields.map(info => {
            return (
                <div className="flex flex-col" key={info.label}>
                    <label className="font-semibold">{info.label}</label>
                    <input className="border rounded-md p-2" type={info.inputType} placeholder={info.placeholder} />
                </div>
            )

        }) }
        </div>
        

    <button className="border rounded-md p-2 bg-indigo-400 text-white" type="submit" onClick={loginHandler} >Login</button>
    <div className="flex flex-row justify-between">
        <div className="">Remember Me</div>
        <a href="#" className="text-indigo-400 font-semibold">Forgot Password?</a>
    </div>
    </form>
  )
}

export default LoginV