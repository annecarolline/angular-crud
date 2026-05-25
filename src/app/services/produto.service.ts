import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
    providedIn: 'root',
})
export class ProdutoService {
    private apiUrl = "http://localhost:3000/produto";

    constructor(private http: HttpClient) { }

    getAllProdutos(): Observable<Produto[]> {
      return this.http.get<Produto[]>(this.apiUrl);
    }

    getProdutoById(id: number): Observable<Produto> {
      return this.http.get<Produto>(`${this.apiUrl}/${id}`);
    }

    /*getFiltered(minViews: number, page: number): Observable<Produto[]> {
      const params: HttpParams = new HttpParams()
        .set('views:gte', minViews.toString())
        .set('_page', page.toString())
        .set('_per_page', '10');

      return this.http.get<Produto[]>(this.baseUrl, { params });
    }*/

    createProduto(produto: Produto): Observable<Produto> {
      return this.http.post<Produto>(this.apiUrl, produto);
    }

    updateProduto(id: any, produto: Produto): Observable<Produto> {
      return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
    }

    deleteProduto(id: any): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}