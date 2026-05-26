
'use client'
import { authClient } from '@/lib/auth-client';
import { Alert, Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField, Toast, toast } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CiFloppyDisk } from 'react-icons/ci';

const UpdateData =  () => {
     const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const user = {};
    formData.forEach((value, key) => {
      user[key] = value.toString();
    });
    await authClient.updateUser({
    image: user.photo,
    name: user.name,
});

  };
    return (
        <Form className="w-full max-w-96 mx-auto mt-5" onSubmit={onSubmit}>
      <Fieldset>
        <Fieldset.Legend className='text-center text-2xl font-bold text-cyan-500'>Update Your Information</Fieldset.Legend>
        <FieldGroup>
         
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Your Name" />
            <FieldError />
          </TextField>
          
          <TextField isRequired name="photo" type="url" >
            <Label>Photo URL</Label>
            <Input placeholder="Enter the Photo URL" />
            <FieldError />
          </TextField>
         
        </FieldGroup>
        <Fieldset.Actions>
          <Button type="submit" className='bg-cyan-500'>
            <CiFloppyDisk />
            Update
          </Button>



             <Link href={'/my-profile'} className=''>
               <span className='btn  text-red-500'>Back</span>
             </Link>

        </Fieldset.Actions>
      </Fieldset>
    </Form>
    );
};

export default UpdateData  ;