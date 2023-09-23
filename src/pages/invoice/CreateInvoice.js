import React from "react";
// import './form.css'


class CreateInvoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            description: '',
            date: '',
            unitPrice:'',
            totalAmount:'',
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
        this.props.addsInvoice(this.state)
          //sets everything back to empty values at the input field
        this.setState(
            {
                quantity: '',
                description: '',
                date: '',
                unitPrice:'',
                totalAmount:'',
                id:''
            }
        )
        // console.log(this.state)
    }

    render() {
        return (
            <>
            <div style={{ backgroundColor:'#fbf7fc'}}>
                <h5 style={{marginTop:'20px'}}>CREATE INVOICE</h5>
                <form onSubmit={this.handleSubmit} style={{marginTop:'25px'}}>
                    <label for="quantity" className="quantity">Quantity</label>
                    <br />
                    <input type="number" id="quantity" name="quantity" value={this.state.quantity}
                     onChange={this.handleChange}
                     style={{ backgroundColor:'#c0c0c0', borderRadius:'7px'}}/>
                    <br />

                    <label for="description" className="description">Description</label>
                    <br />
                    <textarea type="text" id="description" name="description" 
                    style={{width:'200px', backgroundColor:'#c0c0c0', borderRadius:'7px'}}
                     value={this.state.description}
                     onChange={this.handleChange}></textarea>
                    <br />

                    <label for="unitPrice">Unit Price Gh¢ </label>
                    <br />
                    <input type="number" id="unitPrice" name="unitPrice" value={this.state.unitPrice} 
                    onChange={this.handleChange}
                    style={{ backgroundColor:'#c0c0c0', borderRadius:'7px'}}/>
                    <br />

                    <label for="totalAmount">Total Amount Gh¢ </label>
                    <br />
                    <input type="number" id="totalAmount" name="totalAmount" value={this.state.totalAmount} 
                    onChange={this.handleChange}
                    style={{ backgroundColor:'#c0c0c0', borderRadius:'7px'}}/>
                    <br />

                    <label for="date">Date </label>
                    <br />
                    <input type="date"  name="date" value={this.state.date} 
                    onChange={this.handleChange}
                    style={{ backgroundColor:'#c0c0c0', borderRadius:'7px'}}/>
                    <br /><br />

                    <input type="submit" value="Submit" id="submit" 
                    style={{ backgroundColor:'#32a852', borderRadius:'7px'}}/>
                </form>
            </div>    
            </>
        );
    }
}

export default CreateInvoice;