import React from 'react'

const Homepage = ({data}) => {
    console.log(data)
  return (
    <div>
      <img src={data.avatar_url} alt="malay" width={"100px"}></img>
      <h2>{data.name}</h2>
      <h2>{data.login}</h2>
      <h4>{data.bio}</h4>
      <h4>Tech stack</h4>
      <p> HTML, CSS ,Javascript, React, Redux Nodejs</p>
      <button>Resume</button>
      <button>Follow</button>


     <div>
      <p> HTML, CSS ,Javascript, React, Redux Nodejs, Chakra ui, DSA</p>
    
     </div> 

     <div>
      <h2>Education & Experience</h2>
      <h4>B.E (automobile)</h4>
      <h4>Full Stack Web Developer [full time]</h4>
      <p>Masai School</p>
     </div>

    </div>
  )
}

export async function getStaticProps(){
  let username="Malay-24"
 let res=await fetch(`https://api.github.com/users/${username}`)
 let data=await res.json();

 return{
    props:{
        data:data
    }
 }
}

export default Homepage