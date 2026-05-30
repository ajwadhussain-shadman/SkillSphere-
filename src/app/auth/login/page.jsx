
'use client'
import { authClient } from '@/lib/auth-client';
import { Alert, Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField, Toast, toast } from '@heroui/react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { CiFloppyDisk } from 'react-icons/ci';

const Login =  () => {

     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

  
  
    const user = {};
    formData.forEach((value, key) => {
      user[key] = value.toString();
    });
    const { data, error } = await authClient.signIn.email({
    email: user.email, // required
    password: user.password, // required
    rememberMe: true,
    callbackURL: "/",
});

if (data) {
      toast.success("login successful")
    }
  };
    return (
        <Form className="md:w-full max-w-96 mx-auto mt-5" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className='text-center text-2xl font-bold text-cyan-500'>Login</Fieldset.Legend>
        <Description className='text-center text-lg text-gray-400'>Enter your profile information.</Description>
        <FieldGroup>
         
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Your Email" />
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
          <Button type="submit" className='bg-cyan-500'>
            <CiFloppyDisk />
            Login
          </Button>



             <Link href={'/auth/register'} className=''>
               <span className='text-red-500'>Register</span>
             </Link>

        </Fieldset.Actions>
      </Fieldset>
    </Form>
    );
};

export default  Login ;