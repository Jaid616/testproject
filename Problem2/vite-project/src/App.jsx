import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

   const [ number , setnumber ]  =useState(1)
   const [data , setData] = useState([])
   const [loading  , setLoading] = useState(false)

   const fetchdata = async() => {
       setLoading(true)
    try {
      let response  = await axios.get(`https://swapi.dev/api/people/${number}`)


      setData((pre)=>[...pre , response.data])
     
    } catch (error) {
      console.log(error , "error")
    } finally{

      setLoading(false)
    }
    
   }

  const generateNumber  = () => {
     let newnumber = Math.floor(Math.random(1)*10)
    if(newnumber !== number)
     {
        setnumber(newnumber)
     }
  }

  useEffect(()=> {
      fetchdata()
  },[number])



    const handleDelele = (name) => {
     let newData = data.filter(data => data.name !== name)
     setData(newData)
    }

 

  return (
    <div style={{maxWidth:'600px' , margin:'auto'}}>
     <div style={{ margin : '30px 10px' }} >
        <button  style={{padding:'10px 20px'}} onClick={generateNumber} > Add </button>
    </div>
    <div  style={{maxWidth :'500px'}}>

  
    {
      data?.map((item , index)=> 
      
    

      <div key={index} style={{display:'flex' , justifyContent :'space-between' , alignItems:'center'}}>
           <p>{item?.name}</p>
            <div style={{ margin : '30px 10px'}}>
        <button  style={{padding:'10px 20px'}} onClick={()=> handleDelele(item?.name)} > Delete </button>
    </div>
      </div>
      
      )
    }

    {loading && <>
     <p> Loading .....</p>
    </>}
      </div>
    </div>
  )
}

export default App
