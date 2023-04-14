import React,{useRef,useEffect,useState} from "react";
import {RiArrowDropDownLine,RiArrowDropUpLine} from 'react-icons/ri';


const Drawer = ({State,setState,items,error,setError})=>{
  const [active,setActive] = useState(false);
    console.log(items);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  
    return(
      
      <div className="Drawer"  ref={wrapperRef}>
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
    function useOutsideAlerter(ref) {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setActive(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }
  }
  

export default Drawer