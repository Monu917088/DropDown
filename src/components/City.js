import React, { useEffect, useState } from 'react'

const City = (props) => {
 const stateId= props.state;
 const setCityId=props.setCity;
 const cityId= props.city;

 const [cityList,setCityList]= useState([]);
 const[cities ,setCity]= useState([]);
   
   const fetchCity= async()=>{
    const res= await fetch("https://d32sbion19muhj.cloudfront.net/pub/interview/cities");
    const data= await res.json();
    
    setCityList(data.data);
   }
  
   

    const filterCity=()=>{
      
        const filterdata= cityList.filter(data=> data.state_id==stateId)
            setCity(filterdata)
            
        
    }

 useEffect(()=>{fetchCity()},[]);

 //updating city every time state change

 useEffect(()=>{filterCity()},[stateId])
 
 function handleChange(e){
  setCityId(e.target.value);
 }


  return (
    <div className='text-lg mt-6 mb-3  mx-2 flex justify-between'>
      <label className='mx-3 font-semibold text-lg' >City:</label>
        <select className='border border-gray-600 rounded-md w-[300px]' value={cityId} onChange={handleChange}>
            <option>select city</option>
            {cities.map(city=><option key={city.id} value={city.id}>{city.name}</option>)}
            
        </select>
    </div>
  )
}

export default City
