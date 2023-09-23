import React from "react";
import { Container ,Row, Col} from "react-bootstrap";
import CreateInvoice from './CreateInvoice'
import AllInvoices from './AllInvoices'
import { connect } from 'react-redux';
import {addsInvoice} from '../../redux/actions/InvoiceActions'


class Transactions extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            allTheInvoices:[
                {
                quantity: '',
                description: '',
                date: '',
                unitPrice:'',
                totalAmount:'',
                id:''
                    
                },
              
            ]
        }
    }
        addsInvoice =(newinvoice) =>{
            newinvoice.id = Math.random().toString()
            this.props.addsInvoice(newinvoice)
            // this.setState({
            //     allTheInvoices:[...this.state.allTheInvoices, newinvoice]
            // })
        }
    
        editNewInvoice =(id,updatedInvoice)=>{
            //id of what you want to edit and the new data
            this.setState({
                allTheInvoices: this.state.allTheInvoices.map(eachInvoice => 
                    eachInvoice.id ===id ? updatedInvoice: eachInvoice)
            })
        }
    
        deleteInvoice =(id) => {
            //pick one person/form and check whether their id matches
            let notDeletedInvoice = this.state.allTheInvoices.filter(newinvoice => newinvoice.id !==id)
            this.setState({ allTheInvoices: notDeletedInvoice})
        }
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col > <CreateInvoice   addsInvoice={this.addsInvoice}/> </Col>

                    <Col > <AllInvoices   
                     invoiceData={this.state.allTheInvoices}
                     editsInvoice={this.editNewInvoice}
                     deleteInv={this.deleteInvoice}
                     /> </Col>
                </Row>


            </Container>
         );
    }
}

const mapStateToProps = (state) => ({
    allTheInvoices: state.allTheInvoices
  });
  
  const mapDispatchToProps ={
    addsInvoice: addsInvoice
  
  }
   
export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
 
