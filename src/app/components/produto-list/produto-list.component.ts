import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscribable } from 'rxjs';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

import { MatIcon } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-produto-list',
    imports: [CommonModule, RouterModule, MatIcon, MatInputModule, FormsModule, MatFormFieldModule],
    templateUrl: './produto-list.html',
    styleUrl: './produto-list.css',
})
export class ProdutoListComponent implements OnInit{

    constructor(private produtoService: ProdutoService) {}
    produtos : Produto[] = [];
    pesquisa = signal('');
    prodlist = signal<Produto[]>([]);

    ngOnInit(): void {
        this.produtoService.getAllProdutos().subscribe(dados => {
            this.produtos = dados;
            this.prodlist.set(dados);
            console.log(this.prodlist);
            console.log(this.produtos);
        });
    }

    getProdutos() {
        this.produtoService.getAllProdutos().subscribe({
            next: (dados) => {
              this.produtos = dados;
              console.log(this.produtos);
            },
            error: (error) => {
              console.log("Erro na listagem de produtos!", error);
            }
        })
    }

    filtrarProdutos = computed(() => {
        const palavraPesq = this.pesquisa().toLocaleLowerCase().trim();
        if (!palavraPesq) return this.prodlist();

        return this.prodlist().filter((produto) =>
            produto.nome.toLocaleLowerCase().includes(palavraPesq) ||
            produto.categoria.toLocaleLowerCase().includes(palavraPesq) ||
            produto.status.toLocaleLowerCase().includes(palavraPesq)
        );
    });

    limparPesquisa() {
        this.pesquisa.set('');
    }

    deleteProduto(id: number) {
        if (confirm("Tem certeza que quer excluir o produto?")) {
            this.produtoService.deleteProduto(id).subscribe({
                next: () => {
                  this.produtos = this.produtos.filter(produto => produto.id != id);
                }, 
                error: (error) => {
                  console.log("Falha ao excluir!", error);
                }
            })
        }
    }
}