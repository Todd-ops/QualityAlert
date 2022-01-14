import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MyDataService {

constructor(private http: HttpClient) { }

getQualityAlertByUID(){
    let url = "http://10.51.8.92:444/api/QualityAlertView/GetQAViewByUID/11833";
    return this.http.get(url);
}

getActiveQA(){
    let url = "http://10.51.8.92:444/api/QualityAlertView/GetActiveQA"
    return this.http.get(url);
}

}
