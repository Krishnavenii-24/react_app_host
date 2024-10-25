import React, { useState } from 'react'

const FBCFormEx = () => {
    // const[username , setUsername] = useState("");
    // const[email , setEmail] = useState("");
    // const[password , setPassword] = useState("");
    // const[confirmPass , setConfirmPass] = useState("");

    const [formData , setFormData] = useState(
        {
            username:"",
            email:"",
            password:"",
            confirmPass:""
        }
    )
    // console.log(formData.username);
    let handleChange =e =>{
      let nameVal = e.target.name;
      let inputValue = e.target.value;
    //   console.log(nameVal , inputValue);
    setFormData({...formData , [e.target.name]:e.target.value})
    }
    let handleSubmit=e=>{
        e.preventDefault();
        
        console.log(formData.username , formData.email , formData.password , formData.confirmPass);
    }
  return (
    <section id='formBlock'>
    <article>
        <form onSubmit={handleSubmit}>
            <div className="formgroups">
            <label htmlFor="">UserName: </label>
            <input type="text" placeholder='enter user name'
           name='username'
           value={formData.username}
           onChange={handleChange}
            />
            </div>
           <div className="formgroups">
           <label htmlFor="">Email:</label>
           <input type="email" placeholder='enter user email'
           name='email'
           value={formData.email}
           onChange={handleChange}
           />
         
           </div>
           <div className="formgroups">
            <label htmlFor="">Password:</label>
            <input type="password" placeholder='enter user password'
          name='password'
          value={formData.password}
           onChange={handleChange}
            />
           </div>
           <div className="formgroups">
            <label htmlFor="">Confirm Password:</label>
            <input type="password" placeholder='confirm your password'
           name='confirmPass'
           value={formData.confirmPass}
           onChange={handleChange}
            />
           </div>
           <div className="formgroups">
            <input type="submit" value="Sign Up"/>
           </div>
        </form>
    </article>
  </section>
  )
}
export default FBCFormEx;
