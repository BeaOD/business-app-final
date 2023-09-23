export const addsClient = (client) => {
    return {
        type: 'ADD_CLIENT',
        payload: client
    }
}

export const editsClient = (client_id, updateClient) => {
    return {
        type: 'EDIT_CLIENT',
        client_id: client_id,
        updateClient: updateClient 
    }
}

export const deletesClient = (client_id) => {
    return {
        type: 'DELETE_USER',
        payload: client_id,
    }
}