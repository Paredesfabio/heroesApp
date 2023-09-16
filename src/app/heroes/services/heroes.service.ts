import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

import { Heroes } from '@heroes/interfaces/heroes.interface';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: string): Observable<Heroes|undefined> {
    return this.http.get<Heroes>(`${this.baseUrl}/heroes/${id}`)
      .pipe(
        catchError( (error) => of(undefined) )
      );
  }

  searchHeroes(query: string): Observable<Heroes[]>{
    return this.http.get<Heroes[]>(`${this.baseUrl}/heroes?q=${query}&_limit=6`);
  }
}
