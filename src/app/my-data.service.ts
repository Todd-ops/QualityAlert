import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormInfo } from './delete-uid/formInfo';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyDataService {
  uid: any;
  public formInfo: FormInfo[] = [];

  constructor(private http: HttpClient) {}

  getQualityAlertByUID() {
    let url = 'http://10.51.8.92:444/api/QualityAlertView/GetQAViewByUID/{UID}';
    return this.http.get(url);
  }

  getActiveQA() {
    let url = 'http://10.51.8.92:444/api/QualityAlertView/GetActiveQA';
    return this.http.get(url);
  }

  getQAStatusUpdate(uid: FormInfo): Observable<FormInfo> {
    return this.http.put<FormInfo>(
      `http://10.51.8.92:444/api/QualityAlert/UpdateStatus/${uid}`,
      uid
    );
  }
}
