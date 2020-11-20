import { HttpStatusCode } from '@eigenspace/base-http-client';

export class HttpError extends Error {
    code: HttpStatusCode | string;

    constructor(code: HttpStatusCode | string, message = '') {
        super(message);

        this.code = code;
    }
}