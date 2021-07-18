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
export const callApi = (url: string, body?: any) => {
    return fetch('https://bookmind.ew.r.appspot.com/' + url, getInit(body))
        .then(response => response.json());
}
