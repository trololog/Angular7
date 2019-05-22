import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {}

    storeServers(servers: any[]) {
        const headers = new HttpHeaders(
            {'Content-Type': 'application/json'}
        );
        return this.http.post('https://angular7proj-beb0c.firebaseio.com/data.json', 
            servers, 
            { headers: headers}
        );
    }

    getServers() {
        return this.http.get('https://angular7proj-beb0c.firebaseio.com/data.json')
            .pipe(map((response: HttpResponse<any>) => {
                const data = response;
                return data;
            }));
    }
}
