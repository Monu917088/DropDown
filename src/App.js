import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import State from './components/State';
import City from './components/City';

function App() {

  //state variable to store the selected countryId
  const [countryId,setCountryId]= useState();

  //state variable to store the selected stateId
  const [stateId, setStateId]= useState();


  //state variable tomstore the selected cityId
  const [cityId,setCityId]= useState();
 


  // state varibale for countryList

  const [countryList,setCountryList] = useState([]);



  // function to handel the country dropdown
 function handleCountry(e){
     setCountryId(e.target.value);
    
 }  
 

 //fetching country data
  const fetchCountry= async()=>{
    const res= await fetch("https://d32sbion19muhj.cloudfront.net/pub/interview/countries")
    const data = await res.json();
    setCountryList(data.data);

  }

  

 useEffect(()=>{fetchCountry()},[]);
 
  return (
    <div className='w-full  bg-gray-500 h-screen flex justify-center items-center '>
      <div className='  w-[400px] rounded-md h-auto flex-col justify-center bg-gray-300 items-center border border-gray-900 '  >
      <div className='text-lg mt-3 flex justify-between mx-2'>
      <label className='mx-3 font-semibold' > Country:</label>
      <select className='border border-gray-600 rounded-md w-[300px]' value={countryId}  onChange={handleCountry}>
        <option>select your country</option>
        {countryList.map(country=> <option value={country.id} key={country.id}>{country.name}</option>)};
      </select>
      </div>

      

      <State  ids={countryId}  state={stateId} setState={setStateId}/>

      <City state={stateId} city={cityId} setCity={setCityId} ></City>
      
      </div>
    </div>
  );
}

export default App;
