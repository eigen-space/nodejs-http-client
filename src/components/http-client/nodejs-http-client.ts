import { NodejsRequestProvider } from '../request-provider/nodejs-request-provider';
import { NodejsFormDataAppender } from '../form-data-appender/nodejs-form-data-appender';
import { Response } from 'node-fetch';
import { BaseHttpClient, CommonQueryProps, QueryProvider } from '@eigenspace/base-http-client';
import { OutputData } from '@eigenspace/base-http-client/entities';

export class NodejsHttpClient implements QueryProvider<Response> {
    private baseHttpClient: BaseHttpClient<Response>;

    constructor(baseUrl = '') {
        const requestProvider = new NodejsRequestProvider();
        this.baseHttpClient = new BaseHttpClient(requestProvider, undefined, NodejsFormDataAppender, baseUrl);
    }

    delete<T>(url: string, props?: CommonQueryProps): Promise<OutputData<T, Response>> {
        return this.baseHttpClient.delete<T>(url, props);
    }

    get<T>(url: string, props?: CommonQueryProps): Promise<OutputData<T, Response>> {
        return this.baseHttpClient.get<T>(url, props);
    }

    patch<T>(url: string, props?: CommonQueryProps): Promise<OutputData<T, Response>> {
        return this.baseHttpClient.patch<T>(url, props);
    }

    post<T>(url: string, props?: CommonQueryProps): Promise<OutputData<T, Response>> {
        return this.baseHttpClient.post<T>(url, props);
    }

    put<T>(url: string, props?: CommonQueryProps): Promise<OutputData<T, Response>> {
        return this.baseHttpClient.put<T>(url, props);
    }
}