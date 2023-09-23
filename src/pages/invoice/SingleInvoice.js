//this is how one submitted bill should look like

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Col, Row, Modal } from 'react-bootstrap';
import InvoiceEdit from './InvoiceEdit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import {deletesInvoice} from '../../redux/actions/InvoiceActions' 

function SingleInvoice(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) =>{
    e.preventDefault()
    props.deleteInv(props.invoiceInfo.id)
  }
  return (
    <>
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit Invoice
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <InvoiceEdit 
            invoiceInfo={props.invoiceInfo}
            editsInvoice={props.editsInvoice}
            closeModal={handleClose}
            />
    </Modal.Body>
    </Modal>

    <Col style={{backgroundColor:'#42f593', 
    borderRadius:'5px' , fontFamily:'monospace', marginRight:'7px', marginTop:'10px'}}>
        <h3 style={{ textAlign:'center'}}> Invoice</h3>
        <Row>
        {/* <img src='../src/assets/blue-light-abstract.webp'
     style={{height:'70px', width:'140px',  }}  
     alt='logo' */}
     {/* /> */}
    <Card style={{ width: '500px' , fontSize:'14px'}}>
      <Card.Body>
        {/* <Card.Title>   <h6 style={{ textAlign:'center'}}> Quantity</h6>
          { props.invoiceInfo.quantity}</Card.Title>
        <Card.Subtitle className="mb-2">{ props.invoiceInfo.description}</Card.Subtitle>
        <Card.Subtitle className="mb-2">Unit Price Gh¢ { props.invoiceInfo.unitPrice}</Card.Subtitle>
        <Card.Subtitle className="mb-2">Total Amount Gh¢ { props.invoiceInfo.totalAmount}</Card.Subtitle>
        <Card.Subtitle> { props.invoiceInfo.date}</Card.Subtitle >
        <Card.Subtitle> */}





    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Unit Price Gh¢ </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{ props.invoiceInfo.description}</td>
          <td>{ props.invoiceInfo.quantity}</td>
          <td> { props.invoiceInfo.unitPrice}</td>
        </tr>
        <tr>
          <td>2</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={2}>Total Amount Gh¢ </td>
          <td> </td>
        </tr>
        <tr>
          <td></td>
          <td colSpan={3}> { props.invoiceInfo.date}</td>
         
        </tr>
      </tbody>
    </Table>
 
                        
        {/* </Card.Subtitle > */}
        <Card.Link href="#" style={{color:'none',textDecoration:'none'}}
        onClick={handleShow}>Edit</Card.Link>
        <Card.Link href="#"style={{color:'red',textDecoration:'none'}}
        onClick={handleDelete}>Delete</Card.Link>
      </Card.Body>
    </Card>
    <Link to='/AllClients'>Back</Link>
    </Row>
    </Col>
    </>
  );
}

const mapDispatchToProps ={
  deletesInvoice: deletesInvoice

}
 
export default connect(null,mapDispatchToProps)(SingleInvoice);
 


    