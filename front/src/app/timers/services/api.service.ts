import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Timer} from "../types/type";

const baseUrl = environment.bas_url;


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private endpoint = {
        getNumber: `${baseUrl}/timers`
    };

    constructor(private http: HttpClient) {
    }

    // get promise timer
    getTimers(num: number): Observable<Timer> {
        return this.http.get<Timer>(`${this.endpoint.getNumber}/${num}`);
    }
}
