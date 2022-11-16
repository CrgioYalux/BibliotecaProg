async function execGetReq(endpoint) {
    try {
        const req = await axios.get(endpoint);
        return req.data;
    }
    catch (error) {
        return { error, failed: true };
    }
} 

async function execPostReq(endpoint, payload) {
    try {
        if (payload === undefined) throw new Error('Payload is undefined');
        const req = await axios.post(endpoint, payload);
        return req.data;
    } catch (error) {
        return { error, failed: true };
    }
} 

async function execDeleteReq(endpoint) {
    try {
        const req = await axios.delete(endpoint);
        return req.data;
    } catch (error) {
        return { error, failed: true };
    }
} 

async function execPutReq(endpoint, payload) {
    try {
        if (payload === undefined) throw new Error('Payload is undefined');
        const req = await axios.put(endpoint, payload);
        return req.data;
    } catch (error) {
        return { error, failed: true };
    }
}

const ENDPOINT = (path) => `http://localhost:3000/${path}`;

const PATH = {
    BOOKS: 'libros',
    STUDENTS: 'alumnos',
    LENDINGS: 'prestamos'
};

const api = {
    reqs: {
        execGetReq,
        execPostReq,
        execDeleteReq,
        execPutReq,
    },
    utils: {
        PATH,
        ENDPOINT
    }
}

export default api;
