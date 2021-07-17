const getInit = (body?: any) => (
    {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
)
export const callApi = (url: string,body?: any) => {
    return fetch('http://10.0.2.2:3000/' + url, getInit(body));
}