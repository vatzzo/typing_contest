import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypingappService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getWordsList() {

    // Request Of Type Get That Is Used In .ts File To Upload List Of Words From Database
    let url = this.baseUrl + '/words';
    return this.http.get(url);
  }
}
