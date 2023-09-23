const initialState = {
    allthedata:[
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


const InvoiceReducer = (state= initialState , action) =>{
    switch (action.type) {
        case 'ADD_INVOICE':
            const addsInvoice = {
                quantity:action.payload.quantity,
                description:action.payload.description,
                date:action.payload.date,
                location:action.payload.location,
                unitPrice:action.payload.unitPrice,
                totalAmount:action.payload.totalAmount,
            };
            return {...state,  allTheInvoices: [...state.allTheInvoices, addsInvoice]}
         
            case 'EDIT_INVOICE':
                const editsInvoice = state.allTheInvoices.map(invoice=>{
                   if(invoice.id === invoice.invoice_id) {
                       return {...invoice, ...action.updateInvoice }
                   }
                   else{
                      return invoice;
                   }
                });
                return {...state, allTheInvoices: editsInvoice}

        case 'DELETE_INVOICE':
            const filteredInvoice = 
                   state.allTheInvoices.filter(invoice => invoice.id !== action.payload);    
               return {...state, allTheInvoices: filteredInvoice}
            
        default:
            return state;
    }

}



export default InvoiceReducer 