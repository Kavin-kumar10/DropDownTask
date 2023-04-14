import { useEffect, useState } from 'react';
import Drawer from './Components/Drawer';
import './App.scss';

function App() {
  const datas = [
    {Country:'India',place:['Tamil nadu','Karnataka','Andrapradesh']},
    {Country:'USA',place:['California','Texas','Ohio']},
    {Country:'China',place:['Shandong','Jigansa','Yunan']}
  ]
  const [country,setCountry] = useState('Select Country');
  const [state,setState] = useState('Select State');
  const [listState,setListState] = useState();
  const [output,setOutput] = useState(false);

  const listCountry = datas.map((item)=>{
    return item.Country
  })
  useEffect(()=>{
    if(country != 'Select Country')
    setListState(datas.filter((item)=>item.Country === country)[0].place);  
  },[country])

  const [error,setError] = useState(false);
  const Validate =()=>{
    if(country == 'Select Country'){
      setError(true);
    }
    else if (state == 'Select State'){
      setError(true);
    }
    else{
      setOutput(true);
    }
  }

  return (
    <div className="App">
      <div className="Container">
        <Drawer State={country} setState={setCountry} items={listCountry} error={error} setError={setError}/>
        {
          (country!='Select Country')?
          <Drawer State={state} setState={setState} items={listState} error={error} setError={setError}/>
          :null
        }
      {(error)?
      <p style={{color:'red',margin:'12px'}}>Please select the field</p>:
      null
      }
        <button onClick={Validate}>Submit</button>
      {(output)?
        <p>The Country is {country} and the State is {state}</p>
        :null
      }
      </div>
    </div>
  );

}


export default App;
