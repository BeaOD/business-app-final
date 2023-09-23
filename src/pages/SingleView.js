//this is how one submitted bill should look like

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Col, Row, Modal } from 'react-bootstrap';
import EditForm from './EditForm';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deletesClient} from '../redux/actions/ClientActions'

function SingleView(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) =>{
    e.preventDefault()
    props.deleteIt(props.formInfo.id)
  }
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                EDIT CLIENT's DETAILS
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm 
            formInfo={props.formInfo}
            editsAform={props.editsAform}
            closeModal={handleClose}
            />
    </Modal.Body>
    </Modal>

    <Col md='3' style={{backgroundColor:'#42f593', 
    borderRadius:'5px' , fontFamily:'monospace', marginRight:'7px', marginTop:'10px'}}>
        <h3 style={{ textAlign:'center'}}> { props.formInfo.clientName}</h3>
        <Row>
    <Card style={{ width: '18rem' , fontSize:'14px'}}>
      <Card.Body>
        <Card.Title>{ props.formInfo.contact}</Card.Title>
        <Card.Subtitle className="mb-2"> { props.formInfo.location}</Card.Subtitle>
        <Card.Subtitle> { props.formInfo.email}</Card.Subtitle >
        <Card.Subtitle>
        
       
                
        </Card.Subtitle >
        <br />
        <Card.Link href="#" style={{color:'none',textDecoration:'none'}}
        onClick={handleShow}>Edit</Card.Link>
        <Card.Link href="#"style={{color:'red',textDecoration:'none'}}
        onClick={handleDelete}>Delete</Card.Link>
      </Card.Body>
      <br />
      <Link to='/Transactions'><button style={{backgroundColor:'#ce80ed', borderRadius:'5px'}}>
        Transactions</button></Link>

    </Card>
    </Row>
    </Col>
    </>
  );
}

const mapDispatchToProps ={
  deletesClient: deletesClient

}
 

export default connect(null,mapDispatchToProps)(SingleView); 
    