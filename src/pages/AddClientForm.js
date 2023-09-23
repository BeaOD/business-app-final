import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class AddClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            contact: '',
            email: '',
            location:'',
            id:''
        }
    }

    handleChange =(e)=>{
        e.preventDefault()
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    
    handleSubmit =(e)=>{
        e.preventDefault()
        this.props.addsAform(this.state)
          //sets everything back to empty values at the input field
        this.setState(
            {
            clientName: '',
            contact: '',
            email: '',
            location:'',
            id:''
            }
        )
        // console.log(this.state)
    }

    render() {
        return (
            <>
            
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                
                <h2 style={{marginTop:'40px', color:'#065927'}}> New Client Form</h2>
                <form onSubmit={this.handleSubmit} style={{marginTop:'45px', backgroundColor:'#065927',
                  borderRadius:'7px'}}>
                    <label for="clientName" className="email" style={{color:'white', marginTop:'7px'}}>
                        Client Name</label>
                    <br />
                    <input type="text" id="clientName" name="clientName" value={this.state.clientName}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px'}}/>
                    <br /><br />

                    <label for="contact" className="contact" style={{color:'white'}}>Contact</label>
                    <br />
                    <input type="number" id="contact" name="contact" value={this.state.contact}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px'}}/>
                    <br /><br />

                    <label for="email" className="email" style={{color:'white'}}>Email</label>
                    <br />
                    <input type="email" id="email" name="email" value={this.state.email}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px'}}/>
                    <br /><br />

                    <label for="location" style={{color:'white'}}>Location </label>
                    <br />
                    <input type="text" id="location" name="location" value={this.state.location} 
                    onChange={this.handleChange}
                    style={{borderRadius:'7px', width:'400px'}}/>
                    <br /><br />

    
                    <input type="submit" value="Submit" id="submit" 
                    style={{borderRadius:'7px', width:'200px', backgroundColor:'#c9a10e', color:'white'}}/>
                    <br /><br />
                </form>
                </div>

                <div className="col-md-4"></div>
            </div>    
            </>
        );
    }
}

export default AddClientForm;