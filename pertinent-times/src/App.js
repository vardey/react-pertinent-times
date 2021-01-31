import Header from './components/Header'
import Navbar from './components/Navbar'
import {useState,useEffect} from 'react'
import Articles from './components/Articles'
import axios from 'axios'


const App =()=> {
  const key ="pODgMHMF8kA3gl6TKpcD47APzHz6AL54"
  const [section,setSection] =useState("home")
  
  const getCategory = (cat)=>{
    setSection(cat.toLowerCase())
    console.log("section: ",section)
    console.log("cat: ",cat)
    
  }
  useEffect(()=>{
    
    const fetchNews = async () =>{
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
      //console.log(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
      //console.log(res.data.results)
      setArticles(res.data.results)
      
      
    }
    fetchNews()
  },[section])

  

  const [articles,setArticles] = useState([])
  const categories = [
    {
      id:1,
      text:'HOME'
    },
    {
      id:2,
      text:'WORLD'
    },
    {
      id:3,
      text:'POLITICS'
    },
    {
      id:4,
      text:'MAGAZINE'
    },
    {
      id:5,
      text:'TECHNOLOGY'
    },
    {
      id:6,
      text:'SCIENCE'
    },
    {
      id:7,
      text:'HEALTH'
    },
    {
      id:8,
      text:'SPORTS'
    },
    {
      id:9,
      text:'ARTS'
    },
    {
      id:10,
      text:'FASHION'
    },
    {
      id:11,
      text:'FOOD'
    },
    {
      id:12,
      text:'TRAVEL'
    },
  ]
 
  
  return (
    <div className="App">
      <Header text="The Pertinent Times"/>
      <Navbar getCat={getCategory} navBarItems={categories}/>
      <Articles articles={articles} />
    </div>
  );
}

export default App;