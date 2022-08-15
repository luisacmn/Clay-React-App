//GET
export function getData() {
    return Liferay.Util.fetch(
        'http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings',
        { method: 'GET' }
    ).then(res => res.json());
}

//POST
export function saveData({ headline, articleBody, id }) {
    const data = {
        id,
        headline,
        articleBody
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const request = {
        body: JSON.stringify(data),
        headers,
        method: 'POST'
    };

    return Liferay.Util.fetch(
        `http://localhost:8080/o/headless-delivery/v1.0/sites/20121/blog-postings`,
        request
    ).then(res => res.json());
}

//UPDATE



//DELETE
export function deleteData(id) {

    const request = {
        method: 'DELETE'
    };

    return Liferay.Util.fetch(
        `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${id}`,
        request
    ).then(res => res);
}


