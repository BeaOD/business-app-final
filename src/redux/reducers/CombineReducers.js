import { combineReducers } from 'redux';
import ClientReducer from './ClientReducer'
import InvoiceReducer from './InvoiceReducer'


const rootReducer = combineReducers({
	ClientReducers: ClientReducer,
	InvoiceReducers: InvoiceReducer
})

export default rootReducer;