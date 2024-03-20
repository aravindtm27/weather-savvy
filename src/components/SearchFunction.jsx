import React  from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import axios from 'axios';
import { searchVal, cityDetails } from '../store/atoms/searchVal';
import './SearchFunction.css';

function SearchFunction() {

    const navigate = useNavigate();
    
    const [searchValue, setSearchValue] = useRecoilState(searchVal);
    const [cityObject, setCityObject] = useRecoilState(cityDetails);


    function handleOnChange(e){
      setSearchValue(e.target.value);
    }

    function handleSearchClick(){
      try{
        axios.get(`https://api.weatherbit.io/v2.0/history/energy?&city=${searchValue}&start_date=2024-03-12&end_date=2024-03-19&threshold=63&units=I&key=8ff6b1c427824112b02b9f92f1485bbb&tp=daily`)
        .then((res)=>{
          setCityObject(res.data);  //sets the response into a atom
          console.log(cityObject);
          navigate('/details');
        })
      }catch(err){ 
        console.log(err);
      }
    }

  return (
    <>
    <div className='searchContent'>      
    <TextField label="Enter a City" id="standard-size-small" 
      value={searchValue} onChange={(e)=>handleOnChange(e)}
      sx={{
        width:250,
        margin: 5,
        background: "white",
        borderRadius: '3px',
      }}
    />
      <Button variant="contained" onClick={()=>handleSearchClick()}>Get Weather</Button>
    </div>
    </>
  )
}

export default SearchFunction;
