import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisualizationService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  generateVisualization(language: string, code: string): Observable<any> {
    console.log("Calling API:", `${this.apiUrl}/visualize`);
    return this.http.post(`${this.apiUrl}/visualize`, { language, code });
  }
}
