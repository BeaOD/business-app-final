import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import{AiOutlineCopyrightCircle} from 'react-icons/ai';

export default function Footer() {
  return (
    <> 
    <div className="row"  style={{backgroundColor:'#d6d5d2', fontSize:'12px'}}>
    <div className="col-md-4">
    <AiOutlineCopyrightCircle/> 2023 All Rights Reserved 
    </div>
    <div className="col-md-4">
        
    </div>
    <div className="col-md-4">
       Made by BB Info Systems
    </div>
    </div>
    </>
  )
}
