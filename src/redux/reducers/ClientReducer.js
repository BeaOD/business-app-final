const initialState = {
    allthedata:[
        {
            clientName: '',
            contact: '',
            email: '',
            location:'',
            id:''
        },

       
      ]
}


const ClientReducer = (state= initialState , action) =>{
    switch (action.type) {
        case 'ADD_CLIENT':
            const addsClient = {
                clientName:action.payload.clientName,
                contact:action.payload.contact,
                email:action.payload.email,
                location:action.payload.location,
            };
            return {...state,  allthedata: [...state.allthedata, addsClient]}
         
            case 'EDIT_CLIENT':
                const editsClient = state.allthedata.map(client=>{
                   if(client.id === client.client_id) {
                       return {...client, ...action.updateClient }
                   }
                   else{
                      return client;
                   }
                });
                return {...state, allthedata: editsClient}

        case 'DELETE_USER':
            const filteredClientList = 
                   state.allthedata.filter(client => client.id !== action.payload);    
               return {...state, allthedata: filteredClientList}
            
        default:
            return state;
    }

}



export default ClientReducer 