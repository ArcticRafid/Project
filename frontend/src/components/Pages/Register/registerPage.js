import React from 'react'
import Input from '../../Input/input';
import {useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import classes from './registerPage.module.css';


export default function RegisterPage() {
  const {
    handleSubmit,
    register,
    formState: {errors},
} = useForm();

  return (
    <div>
      
    </div>
  )
}
