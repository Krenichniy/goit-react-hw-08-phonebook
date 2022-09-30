
import { instance } from './auth';

export const getContacts = async () => {
    const result = await instance.get('/contacts');
    return result;
}

export const addNewContact = async (data) => {
    const result = await instance.post('/contacts', data);
    return result;
}

export const removeContact = async (id) => {
    const { data } = await instance.delete(`/contacts/${id}`);
    return data;
}