import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RickandmortyApiService {

  constructor(private http: HttpClient) { }

  public getPersonajes(page: string) {
    return this.http.get(`${page}`);
  }
  public getPages(num_page: number) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?page=${num_page}`);
  }
  public getFilters(name: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}`);
  }
}
