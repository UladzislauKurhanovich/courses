class ApiService {
    constructor(baseURL) {
        this.url = baseURL;
    }

    createPost(post) {
        try { 
            const request = new Request(this.url + '/posts.json', {
                method: 'post',
                body: JSON.stringify(post)
            })
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }
    
    fetchPost() {
        try {
            const request = new Request (`${this.url}/posts.json`, {
                method: 'get'
            });
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }

    fetchPostById(id) {
        try {
            const request = new Request (`${this.url}/posts/${id}.json`, {
                method: 'get'
            });
            return useRequest(request);
        } catch(error) {
            console.error(error);
        }
    }  
}

async function useRequest(request) {
    const response = await fetch(request);
    return await response.json();
}

export const apiService = new ApiService('https://wfm-js-24978-default-rtdb.firebaseio.com/');