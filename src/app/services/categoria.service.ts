import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
    providedIn: 'root',
})
export class CategoriaService {
    private apiUrl = "http://localhost:3000/categoria";

    constructor(private http: HttpClient) { }

    getAllCategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.apiUrl);
    }

    getCategoriaById(id: number): Observable<Categoria> {
      return this.http.get<Categoria>(`${this.apiUrl}/${id}`);
    }
}