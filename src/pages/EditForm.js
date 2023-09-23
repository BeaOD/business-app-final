import React from "react";


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName:props.formInfo.clientName,
            contact: props.formInfo.contact,
            location: props.formInfo.location,
            email:props.formInfo.email,
            id:props.formInfo.id,
          
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
        this.props.editsAform(this.state.id, this.state)
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
        this.props.closeModal()
    }

    render() {
        return (
            <>
            <div>
            <form onSubmit={this.handleSubmit} style={{marginTop:'45px',
                  borderRadius:'7px'}}>
                    <label for="clientName" className="email" style={{color:'white', marginTop:'7px'}}>
                        Client Name</label>
                    <br />
                    <input type="text" id="clientName" name="clientName" value={this.state.clientName}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px', backgroundColor:'#065927', color:'white'}}/>
                    <br /><br />

                    <label for="contact" className="contact" style={{color:'white'}}>Contact</label>
                    <br />
                    <input type="number" id="contact" name="contact" value={this.state.contact}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px', backgroundColor:'#065927', color:'white'}}/>
                    <br /><br />

                    <label for="email" className="email" style={{color:'white'}}>Email</label>
                    <br />
                    <input type="email" id="email" name="email" value={this.state.email}
                     onChange={this.handleChange}
                     style={{borderRadius:'7px', width:'400px', backgroundColor:'#065927', color:'white'}}/>
                    <br /><br />

                    <label for="location" style={{color:'white'}}>Location </label>
                    <br />
                    <input type="text" id="location" name="location" value={this.state.location} 
                    onChange={this.handleChange}
                    style={{borderRadius:'7px', width:'400px', backgroundColor:'#065927', color:'white'}}/>
                    <br /><br />

    
                    <input type="submit" value="Submit" id="submit" 
                    style={{borderRadius:'7px', width:'200px', backgroundColor:'#c9a10e', color:'white'}}/>
                    <br /><br />
                </form>
            </div>    
            </>
        );
    }
}

export default EditForm