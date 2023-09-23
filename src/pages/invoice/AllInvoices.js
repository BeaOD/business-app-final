import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import SingleInvoice from './SingleInvoice';


const AllInvoices =(props)=> {

  return (
    <Container >
        <Row>
          <h3 style={{textAlign:'center',
           marginBottom:'20px', fontFamily:'roboto'}}>ALL GENERATED INVOICES</h3>
           
            {props.invoiceData.map((theInvoice,index)=>{
                return(
                    <SingleInvoice
                    invoiceInfo={theInvoice} key={index}
                    editsInvoice={props.editsInvoice}
                    deleteInv={props.deleteInv}
        />

                )
            })}

        </Row>
    </Container>
  )
}


export default AllInvoices