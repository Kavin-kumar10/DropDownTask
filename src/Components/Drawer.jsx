import React,{useState} from "react";
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri';


const Drawer = ({State,setState,items,error,setError})=>{
    console.log(items);
    const [active,setActive] = useState(false);
    return(
      <div className="Drawer">
      <div className="Drawer__btn" onClick={()=>setActive(!active)}>
        <h3>{State}</h3>
        {(active)
        ?<RiArrowDropUpLine color='black' size={40}/>
        :<RiArrowDropDownLine color='black' size={40}/>
        }
      </div>
      {
        (active)?
      <div className="Drawer__content">
        {items.map((item,index)=>{
          return(
            <div className="Drawer__item" key={index} onClick={()=>{
              setState(item);
              setActive(!active);
              setError(false);
            }}>
              {item}
            </div>
          )
        })}
      </div>:
      null
      }
    </div>
    )
  }
  

export default Drawer