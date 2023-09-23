import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { BsFacebook } from 'react-icons/bs';
import { FaWhatsappSquare } from 'react-icons/fa';
import { BsEmojiSmileFill } from 'react-icons/bs';

class Login extends React.Component {
  render() {
    return (
      <>
        <Container fluid="md">
          <Row>
            <Col>
            
              <div className="col-md-4">
                <img src='assets/2008.jpg' alt='' style={{ width: '500px', height: '400px', borderRadius: '7px' }}
                />
              </div>
              <div>"If you don't drive your business,
                 you will be driven out of business." 
                 <p>— B.C. Forbes</p>

              </div>
            </Col>

            <Col>
            <div style={{marginTop:'50px'}}>
              <h5> We have been waiting for you
                <span style={{color:'	#CCCC00'}}>< BsEmojiSmileFill/></span> </h5></div>
            <div style={{marginTop:'50px'}}>
              <input type="email" id="email" name="email" placeholder='email' 
              style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd'}}/>
              <br /><br />

              <input type="password" id="password" name="password" placeholder='password' 
              style={{borderRadius:'7px', width:'300px', backgroundColor:'#82eefd'}}/>
              <br /><br />
              <button  style={{borderRadius:'7px', backgroundColor:'#ffbf00', width:'100px'}}>
                <strong>Login</strong></button>
              <br /><br />
             

              <div  style={{marginTop:'80px'}}>
              <span style={{marginRight:'10px', fontSize:'25px', color:'black'}}><FaSquareXTwitter/> </span>
              <span  style={{marginRight:'12px', fontSize:'25px', color:'blue'}}><BsFacebook/></span>
              <span style={{ fontSize:'27px', color:'green'}}><FaWhatsappSquare/></span>
              </div>
              </div>
              
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Login;