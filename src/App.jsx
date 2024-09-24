import { useState } from 'react'
import Navbar from './assets/Navbar';

export default function App() {


  return (
      <div className=' max-w-[1084px] max-h-[1440px] border-solid border-2 border-black'>
        
        <Navbar 
        count={"world"}
        value={"!"}
        />
        
      </div>
  )
}