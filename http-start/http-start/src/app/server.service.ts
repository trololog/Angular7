import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

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
        return this.http.get('https://angular7proj-beb0c.firebaseio.com')
            .pipe(map(
                (response) => {
                    const data = response[Object.keys(response)[0]];
                    
                    for(const server of data) {
                        server.name = 'Fetched ' + server.name; 
                    }
                    
                    return data;
                }), catchError(error => this.handleError(error))
            );
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error);

        return throwError('Error ocurred');
    }
}
