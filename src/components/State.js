import React, { useEffect, useState } from 'react'

const State = (props) => {
    const countryId= props.ids;
    const setStateId= props.setState;
    const stateId=props.state;
    
     //state variable for storing all state
    const [stateList,setStateList]= useState([]);
    
    //state varibale for selected country states
    const [states,setState]= useState([]);

//function for updating selcted state
    function handelState(e){
    setStateId(e.target.value);
    }
    
    

    //fetching sates data from given Api
    const fetchState= async()=>{
        const res=await fetch("https://d32sbion19muhj.cloudfront.net/pub/interview/states")
        const data= await res.json();
        setStateList(data.data);
        
        

    }
    
// filtes the state from all state
    const filterState= ()=>{
        if(stateList.length>0){
        const filterdata= stateList.filter(data=> data.country_id==countryId)
            setState(filterdata);
            
        }
        
    
    
    }

      useEffect(()=>{fetchState()},[])

      useEffect(()=>filterState(),[countryId]);
      

  

    


    
  return (
    <div className='mt-6 flex mx-2 justify-between'>
        <label className='mx-3 font-semibold text-lg' >State:</label>
        <select className='border border-gray-600 rounded-md w-[300px] items-end' value={stateId} onChange={handelState}>
           <option >select your state</option>
           {states.map(state=><option value={state.id} key={state.id}>{state.name}</option>)}
        </select>
    </div>
  )
}

export default State