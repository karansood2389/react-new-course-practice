import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import App from './App';

axios.defaults.baseURL = 'https://react-my-burger-4abf5.firebaseio.com';
    axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios.interceptors.request.use(request => {
        console.log(request);
        // Edit request config
        return request;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

    axios.interceptors.response.use(response => {
        console.log(response);
        // Edit response config
        return response;
    }, error => {
        console.log(error);
        return Promise.reject(error);
    });

ReactDOM.render(<App />, document.getElementById('root'));
