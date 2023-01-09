import Link from 'next/link'

const Projectpage = ({data}) => {
    const proj=(data.items)
    console.log(proj[0])
        
  return (
    <div>
        <div style={{display:"grid", gap:"10px"  ,padding:"8px" ,gridTemplateColumns:"repeat(3, 1fr)",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            
        {proj.map((pro,ind)=>(
    <div key={ind} style={{boxShadow:"rgba(0, 0, 0, 0.35)0px 5px 15px" }}>
        <Link href={pro.html_url}>
        <h2>{pro.name}</h2>
        <h6>{pro.language}</h6>
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
 let data=await res.json();

 return{
    props:{
        data:data
    }
 }
}

export default Projectpage