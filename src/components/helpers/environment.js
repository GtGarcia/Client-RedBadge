let APIURL = '';

switch (window.location.hostname) {

    case 'localhost' || '127.0.0.1':

    APIURL = 'http://localhost:3000';
    break;

    case 'gtg-boxout-c.herokuapp.com':

    APIURL = 'https://gtg-boxout-s.herokuapp.com/'
}

export default APIURL;