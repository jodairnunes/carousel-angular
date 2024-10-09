import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  baseUrl: string = 'http://localhost:3000/items';

  constructor(private readonly httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(this.baseUrl);
  }
}
