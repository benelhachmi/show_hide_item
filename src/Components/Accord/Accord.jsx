import React,{useState,useRef,useEffect} from 'react'
import './Accord.css'
import Chevron from './down-chevron.svg'

export default function Accord(){
    const [toggle,setToggle] =useState(false);
    const [heightEl,setHeightEl] =useState();

    const toggleStatte  =() =>{
        setToggle(!toggle)
    }

    const refHeight  = useRef();

    useEffect(() =>{
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    },[])
    
    return(
        <div 
        className="accord">
            <div
            onClick={toggleStatte}
            className="accord-visible">
                <h2>Lorem ipsum dolor sit amet </h2>
                <img src={Chevron} alt="chevron" />
            </div>
            <div 
            ref={refHeight}
            className={toggle ?'accord-toggle animeted' :'accord-toggle' }
            style={{height:toggle ? `${heightEl}`:"0px"}}
            >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi earum nobis incidunt? 
                    Omnis praesentium blanditiis quos.
                     Numquam ad laborum debitis nemo sequi magni ducimus deleniti, reprehenderit unde minima placeat!
                </p>
            </div>
        </div>
    )
}