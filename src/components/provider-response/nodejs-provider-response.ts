import { Blob, Response } from 'node-fetch';
import { ContentType, HttpStatusCode, RequestProviderResponse, StreamObserver } from '@eigenspace/base-http-client';
import JsonBigInt from 'json-bigint';

export class NodejsProviderResponse<T> extends RequestProviderResponse<T, Response> {

    get status(): HttpStatusCode | number {
        return this.nativeResponse.status;
    }

    protected get contentTypeHeader(): ContentType | string | undefined {
        return this.nativeResponse.headers.get('Content-Type') || undefined;
    }

    protected async json(): Promise<T> {
        const text = await this.nativeResponse.text();
        const jsonParser = JsonBigInt({ useNativeBigInt: true });
        return jsonParser.parse(text);
    }

    protected async blob(): Promise<Blob> {
        return this.nativeResponse.blob();
    }

    protected async observer(): Promise<StreamObserver<T>> {
        return new StreamObserver(this.nativeResponse.body);
    }
}