import { Observable } from 'rxjs/Observable';

export function cache(stream: Observable<any>): Observable<any> {
    return stream
        .publishLast()
        .refCount();
}
