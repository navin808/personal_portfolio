import React from "react";
import { useForm } from "react-hook-form";

import './Con2.css';
export default function Form() {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit()} action="#">
       
        <div>
            <br/><br/>
          <label>Name</label>
          <input
           
           {...register("name", { required: true,
            pattern:/^[a-zA-Z][a-zA-Z]*$/i,
            })}
      />
      <error>
        {errors.name?.type === "required" && "Name is required"}
        {errors.name?.type === "pattern" && "Number does not exists"}
      </error>
    </div>
    <div>
          <label>Email</label>
          <input
            
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            })}
          />
          <error>
            {errors.email?.type === "required" && "Email is required"}
            {errors.email?.type === "pattern" &&
              "Entered email is in wrong format"}
          </error>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="text"
            
            {...register("number", {
              required: true,
              minLength: 10,
              maxLength: 10, 
              pattern:/^[1-10]\d$/,
            })}
          />
          <error>
            {errors.number?.type === "minLength" && 
              "Entered number is less than 10 digits"}
            {errors.number?.type === "maxLength" &&
              "Entered number is more than 10 digits"}
              {errors.number?.type === "required" &&
              "please enter the number"}
              {errors.name?.type === "pattern" && "alphabet does not exists"}
              
          </error>
        </div>
        <div>
          <label>Comments</label>
          <input
            
            {...register("comments", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
          <error>
          
              {errors.comments?.type === "required" &&
              "please give your valuable comment"}
          </error>
        </div>
        <div>
          <center><input className="button" type="submit" onclick="myFunction()" /></center>
          
        </div>
      </form>
    </div>
    
    
  );
}
