import { Observable } from 'rxjs/Observable';

export function cache(httpRequest: Observable<any>): Observable<any> {
    return httpRequest
        .publishLast()
        .refCount();
}
