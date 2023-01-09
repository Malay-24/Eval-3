import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from "next/link"

const inter = Inter({ subsets: ['latin'] })

export default function Home({result}) {
  const proj=(result.items)
  return (
    <div style={{display:"flex", gap:"10px" ,padding:"8px" ,justifyContent:"space-between",marginBottom:"10px"}}>
       <div style={{marginBottom:"10px",border:"2px solid red",width:"30%"}}>
        <div>
        <Image src="https://avatars.githubusercontent.com/u/112858279?v=4"alt="malay" width={100} height={40}/>
      <h2>Malay Bajpai</h2>
      <h3>Malay-24</h3>
      <h4>Im a passionate Full Stack Web developer skilled in MERN stack  I love to learn new technology and implement it in my projects</h4>
      <h4>Tech stack</h4>
      <p> HTML, CSS ,Javascript, React, Redux Nodejs</p>
      <button>Resume</button>
      <button>Follow</button>

       </div>
     


      <div style={{marginTop:"15px"}}>
        <h2>Tech Stack</h2>
      <p> HTML, CSS ,Javascript, React, Redux Nodejs, Chakra ui, DSA</p>
    
     </div> 

     <div style={{marginTop:"15px"}}>
      <h2>Education & Experience</h2>
      <h4>B.E (automobile)</h4>
      <h4>Full Stack Web Developer [full time]</h4>
      <p>Masai School</p>
     </div>
     </div>
     
     <div style={{display:"grid", gap:"10px"  ,padding:"8px" ,gridTemplateColumns:"repeat(3, 1fr)",border:"2px solid red"}}>
      
     {proj.map((pro,ind)=>(
    <div key={ind} style={{boxShadow:"rgba(0, 0, 0, 0.35)0px 5px 15px" }}>
        <Link href={pro.url}>
        <h2>{pro.name}</h2>
        <h6>Language:{pro.language}</h6>
        <p>fork:{pro.forks_count}</p>
        <p>stars:{pro.stargazers_count}</p>
        </Link>
    </div>   
   ))}
     </div>





    </div>
  )
  
}



export async function getStaticProps(){
  let username="Malay-24"
 let res=await fetch(`https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositories`)
 let result=await res.json();

 return{
    props:{
        result:result
    }
 }
}