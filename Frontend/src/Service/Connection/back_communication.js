import axios from 'axios';

const instance = axios.create({
    baseURL: 'url'
});

//-----------------------PLANTILLA DE METODOS PARA EL BACKEND-----------------------
// Registro de usuario
/*export const registro = async (formData) => {
    console.log([...formData.entries()]);
    const response = await instance.post('/registrar', formData,{
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response;
}*/
