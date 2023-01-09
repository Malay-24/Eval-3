import React from 'react'
import Link from "next/link"
const Navbar = () => {

  return (
    <div style={{display:"flex", gap:"10px" , backgroundColor:"lightcoral" ,padding:"8px" ,justifyContent:"space-between"}}>
        <div style={{display:"flex", gap:"10px"  ,padding:"4px" ,justifyContent:"space-evenly"}}>
        <h3>
        <Link href="/">MalayBajpai</Link>
     </h3>
     <h3>
        <Link href="/projectspage/projectspage">Projects</Link>
     </h3>
     <h3>
        <Link href="/homepage/experience">Experience</Link>
     </h3>
        </div>
    
     <div>
     <img src="https://avatars.githubusercontent.com/u/112858279?v=4" alt="malay" width={"40px"} ></img>
     </div>

    </div>
  )
}

export default Navbar
