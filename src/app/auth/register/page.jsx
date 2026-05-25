
'use client'
import { authClient } from '@/lib/auth-client';
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField, Toast, toast } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CiFloppyDisk } from 'react-icons/ci';
import { GrGoogle } from 'react-icons/gr';

const Register =  () => {

    const handleGoogleSignUp= async()=>{
           const data = await authClient.signIn.social({
          provider: "google",
  });
    }

     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const user = {};
    formData.forEach((value, key) => {
      user[key] = value.toString();
    });
    const { data, error } = await authClient.signUp.email({
    name: user.name, // required
    email: user.email, // required
    password: user.password, // required
    image: user.photo,
    callbackURL: "/",
});

if (data) {
      alert("SignUp successful");
    }
  };
    return (
      <div className=''>
        <Form className="w-full max-w-96 mx-auto mt-5" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend>Enter Your Information</Fieldset.Legend>
        <Description>Enter your profile information.</Description>
        <FieldGroup>
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Your Email" />
            <FieldError />
          </TextField>
          <TextField isRequired name="photo" type="url">
            <Label>photo</Label>
            <Input placeholder="Your Photo URL" />
            <FieldError />
          </TextField>



          <TextField isRequired name="password" type="password"
           validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              return null;
            }}
          >
            <Label>password</Label>
            <Input placeholder="Enter the password" />
            <FieldError />
          </TextField>
         
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit" className='bg-cyan-500 w-full'>
            <CiFloppyDisk />
            Submit
          </Button>
            
        </Fieldset.Actions>
      </Fieldset>
        
    </Form>
    <div className='max-w-96 mx-auto'>
          <p className='text-center font-bold mt-3'>OR</p>
          <button className='btn w-full mt-3 text-center' onClick={handleGoogleSignUp}>Sign In with google <GrGoogle></GrGoogle> </button>
        </div>
          
          <div className='text-center mt-3'>
            <span>Already signed up? </span> <Link href={'/auth/login'} className=''>
               <span className='text-red-500 underline'>Login</span>
             </Link>
          </div>
          </div>
    );
};

export default  Register ;