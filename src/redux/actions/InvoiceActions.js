export const addsInvoice = (invoice) => {
    return {
        type: 'ADD_INVOICE',
        payload: invoice
    }
}

export const editsInvoice = (invoice_id, updateInvoice) => {
    return {
        type: 'EDIT_INVOICE',
        invoice_id: invoice_id,
        updateInvoice: updateInvoice
    }
}

export const deletesInvoice = (invoice_id) => {
    return {
        type: 'DELETE_INVOICE',
        payload: invoice_id,
    }
}