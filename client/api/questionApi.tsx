import client from './client'

const getQuestions = (data) => {
    return client.post("/getBookQuestions", data);
};

export default {getQuestions}
