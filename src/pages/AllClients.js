import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap'
import SingleView from './SingleView'


const AllClients =(props)=> {

  return (
    <Container >
        <Row>
          <h3 style={{textAlign:'center',
           marginBottom:'20px', fontFamily:'roboto'}}>ALL CLIENTS LIST</h3>
           
            {props.formsData.map((theform,index)=>{
                return(
                    <SingleView 
                    formInfo={theform} key={index}
                    editsAform={props.editsAform}
                    deleteIt={props.deleteIt}
        />

                )
            })}

        </Row>
    </Container>
  )
}


export default AllClients