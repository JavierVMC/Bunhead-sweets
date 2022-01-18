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

export async function getImage(url) {
  try {
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        'Content-Type': 'image/jpeg'
      }
    });
    const blob = await response.blob();
    return [URL.createObjectURL(blob), null];
  } catch (error) {
    console.error(`get: error occurred ${error}`);
    return [null, error];
  }
}
