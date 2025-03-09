import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4500';

  constructor(private http: HttpClient) {}

  addEnquiry(enquiryData: {
    name: string;
    email: string;
    serviceType: string;
    message: string;
  }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/enquiries`, enquiryData);
  }

  getServices(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/services`);
  }

  getProjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/projects`);
  }
  getEnquiries(): Observable<any> {
    return this.http.get('http://localhost:4500/enquiries');
  }
  getDetails(id: string): Observable<any> {
    return this.http.get(`http://localhost:4500/details?id=${id}`);
  }
  addEnquiryReply(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/enquiryresponses', data);
  }
}
