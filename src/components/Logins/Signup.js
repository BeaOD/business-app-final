import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



class  Signup extends React.Component {
    render(){
  return (
    <Container fluid="md">
      <Row>
        <Col>
        <div style={{marginTop:'50px', color:'#065927', fontSize:'35px'}}> 
        Welcome to our community</div>

        <input type="text" id="businessName" name="businessName"  placeholder='business name'
         style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd',marginTop:'50px'}}/>
        <br /><br />

        <input type="email" id="email" name="email"  placeholder='email'
         style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd'}}/>
        <br /><br />

        <input type="password" id="password" name="password"  placeholder='password'
         style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd'}}/>
        <br /><br />

        <input type="password" id="confirmpassword" name="password"  placeholder='confirm password'
         style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd'}}/>
        <br /><br />
        <Button style={{backgroundColor:'#065927', color:'#f0da13'}}>create account</Button>

        <div style={{marginTop:'50px',color:'#065927' }}> We will not share your information with any third party</div>
        </Col>

        <Col style={{marginTop:'80px', backgroundColor:'#065927', borderRadius:'7px'}}>
        

        <div style={{marginTop:'80px'}}>
          
         <span style={{color:'white'}}>LET'S BUILD TOGETHER</span> 
       
         
         </div>
         <div style={{marginTop:'30px'}}>
          <p style={{color:'white', fontSize:'20px'}}><i>“Some people dream of success, 
            while other people get up every morning and make it happen.”
          </i>
          </p>
          <span style={{color:'#f0da13'}}> WE PROVIDE 24/7 SUPPORT</span>
          </div>   
        </Col>
      </Row>
     
    </Container>
  );
}
}
export default Signup;