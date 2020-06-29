import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TypingappService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getWordsList(id: string = "") {
    let url = `${this.baseUrl}/words//${id.toString()}`;
    // Request Of Type Get That Is Used In .ts File To Upload List Of Words From Database
    return this.http.get(url);
  }

    // Request Of Type Delete That Is Used In .ts File To Delete A Record In Database
  public deleteWord(id: number) {
    let url = `${this.baseUrl}/words//${id.toString()}`;
    return this.http.delete(url);
  }

    // Request Of Type Delete That Is Used In .ts File To Add A Record In Database
  public addWord(word: string) {
    let url = this.baseUrl + '/words';
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(url, word, {headers: header});
  }
}
