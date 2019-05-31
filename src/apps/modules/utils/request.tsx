import axios from 'axios';

const MS = 1000;
const TIMEOUT = 120 * MS;
const GET = 'GET';
const POST = 'POST';
const headers = {
    json: { "Content-type": 'application/json' },
    form: { "Content-type": 'application/x-www-form-urlencoded' }
};

// interface Options {
//     url: string,
//     method: string,
//     data: any,
//     timeout: number,
//     headers: any,
// }

const option = {
    url: '',
    method: GET,
    data: '',
    timeout: TIMEOUT,
    headers: headers.json,
}

export default class Request {
    
    public static timeout: number = TIMEOUT;

    public api(options: any = option): any {
        axios({
            ...options,
            url: options.url,
            timeout: options.timeout * MS || Request.timeout,
            method: options.method || GET || POST,
            headers: options.headers || headers.json,
            data: options.data || ''
        }).then((data) => {
            // console.log('Request: ', data);
            return data;
        }).catch((error) => {
            // console.log('Request: ', error)
            return error;
        });
    }

    public apis(options: any = option): any {
        return axios({
            ...options,
            url: options.url,
            timeout: options.timeout * MS || Request.timeout,
            method: options.method || GET || POST,
            headers: options.headers || headers.json,
            data: options.data || ''
        });
    }
}

export const Requests = new Request();
