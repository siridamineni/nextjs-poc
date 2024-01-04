'use client'
import { Console } from 'console'
import React from 'react'

const Button = () => {
  return (
    <button className='btn btn-primary' onClick={() => console.log('success')}> Add the Product</button>
  )
}

export default Button