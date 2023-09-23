import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PagesCss/Homepage.css'
import Footer from '../components/others/Footer'
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BsFacebook } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';



function Homepage() {
  return (
    <>


      <div style={{ backgroundColor: '#7cd69d', height: '550px' }} className="row">
        <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
          <p style={{ fontSize: '80px', fontFamily: 'Roboto', alignItems: 'center', marginBottom:'3p' }}>
           B <span style={{color:'#eb4034'}}>&</span> B</p>

        </div>

        
      <div style={{ color: 'white', display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontSize: '20px', fontFamily: 'sans-serif', alignItems: 'center', color: 'white' }}>
          <span style={{color:'#a1165c', fontSize:'30px'}}> GET ALL YOUR BUSINESS </span> <i>in one place</i> 
        </p>
      
      </div>
      <div className="row" style={{marginBottom:'35px'}}>
  <div className="col-md-4">
    <img src='assets/6963.jpg' alt='' style={{width:'350px', height:'300px', borderRadius:'7px'}} 
    className='zoom plogo'/>
    {/* <div > */}
      <button style={{backgroundColor:'#f26113', color:'white',width:'200px', height:'35px', marginTop:'10px',
    borderRadius:'7px' , textAlign:'center', fontFamily:'sans-serif', fontSize:'12px'}}>
      WORK EVERYWHERE</button>
      {/* </div> */}
  </div>
  <div className="col-md-4">
  <img src='assets/5482.jpg' alt='' style={{width:'400px', height:'300px', borderRadius:'7px'}}
  className='zoom plogo' />
   
      <button style={{backgroundColor:'#e6cf25', color:'white',width:'200px', height:'35px',  marginTop:'10px',
    borderRadius:'7px' , textAlign:'center', fontFamily:'sans-serif', fontSize:'12px'}}>
      CUSTOMER CARE</button>
    
  </div>
  <div className="col-md-4">
  <img src='assets/6155818.jpg' alt='' style={{width:'350px', height:'300px', borderRadius:'7px'}}
  className='zoom plogo' />
   
      <button style={{backgroundColor:'#0000ff', color:'white',width:'200px', height:'35px', marginTop:'10px', 
    borderRadius:'7px' , textAlign:'center', fontFamily:'sans-serif', fontSize:'12px'}}>
      TRACK PAYMENTS</button>
      
  </div>

{/* second row */}
  <div className='row'>
    <div className="col-md-4">
    <img src='assets/4534751.jpg' alt='' style={{width:'500px', height:'500px', borderRadius:'200px'
  , marginTop:'20px', marginLeft:'50px'}} />

    </div>
    <div className="col-md-8">
      <h3 style={{marginTop:'80px', color: '#065927'}}>
        Connect to your business</h3>
      <p style={{marginTop:'50px'}}><i>“Focus on what makes you different, 
        connect to your business with emerging technology”</i></p>
      <p> — Boadu Nick, Data Analyst </p>
      <p><button style={{marginTop:'25px', backgroundColor:'#ffbf00', width:'15px'}}></button></p>

      <p style={{marginTop:'50px'}}><i>“You can't get it wrong, stay abreast with B&B”</i></p>
      <p> — Adwoa Cee, Entrepreneur</p>
      <p><button style={{marginTop:'25px', backgroundColor:'#0000ff', width:'15px'}}></button></p>

    </div>
  </div>
  </div>
      <div className="row">
      <div className="col-md-6">
      <h3 style={{marginTop:'80px', color:'#065927'}}>Services</h3>
      <p style={{marginTop:'50px'}}><i>Easily add new clients from wherever you are. Enjoy  logins 
         from multiple devices</i></p>
      <p> Stay signed in from web and or mobile services </p>
      <p><button style={{marginTop:'25px', backgroundColor:'#eb3440', width:'15px'}}></button></p>

      <p style={{marginTop:'50px'}}><i>Excellent technical team ready  to assist 24/7.</i></p>
      <p> Join a Global Community of bsinesses using cutting edge technology to automate their processes</p>
      <p><button style={{marginTop:'25px', backgroundColor:'#52f013', width:'15px'}}></button></p>

    </div>

    <div className="col-md-6">
    <img src='assets/7199773.jpg' alt='' style={{width:'500px', height:'500px', borderRadius:'200px'
  , marginTop:'20px', marginLeft:'50px'}} />

    </div>
    
    <div>

      </div>
       </div>

      <div  className='row'>
      <div className='col-md-4'>
        <h6>ABOUT</h6>
        <p>BB Info Systems</p>
        
      </div>

      <div className='col-md-4'>
      <h6>FOLLOW US ON SOCIAL </h6>
      <div  style={{marginTop:'10px'}}>
              <span style={{marginRight:'10px', fontSize:'25px', color:'black'}}><FaSquareXTwitter/> </span>
              <span  style={{marginRight:'12px', fontSize:'25px', color:'blue'}}><BsFacebook/></span>
              <span style={{ fontSize:'27px', color:'green'}}><FaWhatsappSquare/></span>
              </div>
      </div>

      <div className='col-md-4' >
      <h6>CONTACT US</h6>
      <p> Email: b&b@gmail.com</p>
      <p>Phone: +23320419419</p>
      </div>

       </div>
      <div >
      <Footer/>
       </div>

</div>
     
      



    </>
  )
}

export default Homepage;