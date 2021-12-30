export async function getData(url = '') {
    const response = await fetch(url);
    return response.json();
}

export async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function putData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}

export async function deleteData(url = '') {
    const response = await fetch(url, {
        method: 'DELETE'
    });
    return response.json();
}
