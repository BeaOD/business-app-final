import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navb from "../src/components/Navb";
import AddClientForm from "../src/pages/AddClientForm";
import AllClients from '../src/pages/AllClients'
import Homepage from '../src/pages/Homepage'
import Transactions from '../src/pages/invoice/Transactions'
import Login from "./components/Logins/Login";
import Signup from "./components/Logins/Signup";


import { connect } from 'react-redux';
import {addsClient} from './redux/actions/ClientActions'



class Rouuter extends React.Component {
constructor(props){
    super(props)
    this.state = {
        allthedata:[
            {
                clientName: 'Codetrain',
                contact: '024',
                email: 'cd@ymail.com',
                location:'El',
                id:'1'
                
            },
          
        ]
    }
}

    addNewform =(form) =>{
        form.id = Math.random().toString()
        this.props.addsClient(form)
        // this.setState({
        //     allthedata:[...this.state.allthedata, form]
        // })
    }

    editNewform =(id,updatedForm)=>{
        //id of what you want to edit and the new data
        this.setState({
            allthedata: this.state.allthedata.map(eachForm => 
                eachForm.id ===id ? updatedForm: eachForm)
        })
    }

    deleteForm =(id) => {
        //pick one person/form and check whether their id matches
        let notDeletedForm = this.state.allthedata.filter(form => form.id !==id)
        this.setState({ allthedata: notDeletedForm})
    }
   
     render(){
    return (
<Router>
    <Navb/>
    <Routes>
        <Route path="/" element={<Homepage/>}/>

        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>

        <Route path="/AddClientForm" element={<AddClientForm 
         addsAform={this.addNewform}/>}/>

        <Route path="/AllClients" element={<AllClients 
        formsData={this.state.allthedata}
        editsAform={this.editNewform}
        deleteIt={this.deleteForm}
        />}/>

        <Route path="/Transactions" element={<Transactions/>}/>
    </Routes>
    

</Router>
    )
} 
}

const mapStateToProps = (state) => ({
    useallthedata: state.allthedata
  });
  
  const mapDispatchToProps ={
    addsClient: addsClient
  
  }
export default connect(mapStateToProps, mapDispatchToProps)(Rouuter);
