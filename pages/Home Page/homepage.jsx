import React from 'react'

const Homepage = () => {
  return (
    <div>homepage</div>
  )
}

export async function getStaticServerProps(){
 let res=await fetch(`https://api.github.com/users/${username}`)



}

export default Homepage