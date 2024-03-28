import React from 'react'
import classes from './CartPage.module.css'
import { useCart } from '../../../Controller/useCart'
import Title from '../../Title/Title';

export default function CartPage() {
    const {cart} = useCart();
  return (
    <>
       <Title title="Cart Page" margin = "1.5rem 0 0 2.5rem"/> 

    </>
  )
}
