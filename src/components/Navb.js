import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { FaListUl } from 'react-icons/fa';
import { SlLogin } from 'react-icons/sl';


function Navb() {
  return (
    <Navbar className=" bg-success"  >
      <Container  >
        <Navbar.Brand href="#home">
        <Link to='/'  style={{fontSize:'20px', color:'white'}}><AiFillHome/> </Link></Navbar.Brand>

        <Navbar.Brand href="" >
        <Link to='/AddClientForm'  style={{textDecoration:'none', fontSize:'14px', color:'white'}}>
           <span  style={{textDecoration:'none', fontSize:'16px', color:'white'}}><FaPlus/> </span> 
           New Client</Link></Navbar.Brand>

       
        <Navbar.Brand href="">
        <Link to='/AllClients' style={{textDecoration:'none', fontSize:'14px', color:'white' }} >
        <span  style={{textDecoration:'none', fontSize:'16px', color:'white'}}><FaListUl/> </span> 
            Existing Clients</Link></Navbar.Brand>
        <Navbar.Toggle /> 

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand  href="">
            
          <Link to='/Login' style={{fontSize:'16px', color:'white', textDecoration:'none' }}>
          <SlLogin/><h6 style={{fontSize:'12px' }}>Login</h6>
         </Link>
          </Navbar.Brand>

          <Navbar.Brand  href="">
          <Link to='/Signup' style={{fontSize:'16px', color:'white' , textDecoration:'none'}}>
         < BsFillPersonFill/><h6 style={{fontSize:'12px' }}>Signup</h6>
         </Link>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;