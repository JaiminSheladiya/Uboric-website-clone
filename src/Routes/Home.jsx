import React from 'react'
import HomeMain from '../components/Home/HomeMain'
import { products } from '../data'
export default function Home() {
  document.title = 'Urobic Clone'
  return (
    <div>
        <HomeMain />
    </div>
  )
}
