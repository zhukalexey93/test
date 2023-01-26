import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})
export class HttpService {
    constructor(private httpClient: HttpClient) {

    }

    get(url: string): Observable<any> {
        return this.httpClient.get(url);
    }

    post(url: string, body: any): Observable<any> {
        return this.httpClient.post(url, body);
    }

    put(url: string, body: any): Observable<any> {
        return this.httpClient.put(url, body);
    }

    delete(url: string): Observable<any> {
        return this.httpClient.delete(url);
    }
}
