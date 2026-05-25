import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Categoria } from '../../models/categoria';
import { CategoriaService } from '../../services/categoria.service';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-produto-form',
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    templateUrl: './produto-form.html',
    styleUrl: './produto-form.css',
})

export class ProdutoFormComponent implements OnInit{
    produto : Produto | null = null;
    produtoForm ! : FormGroup
    isEdit : boolean = false;
    editingProdutoId : number | null = null;
    categorias : Categoria[] = [];
    categlist = signal<Categoria[]>([]);

    constructor(private produtoService: ProdutoService, private categoriaService: CategoriaService, private route : ActivatedRoute, private formBuilder: FormBuilder, private router : Router) {
        this.produtoForm = this.formBuilder.group({
            nome: '',
            categoria: '',
            preco: 0,
            status: ''
        })
    }

    ngOnInit(): void {
        const segments = this.route.snapshot.url;
        const secondSegment = segments[1]?.path;

        this.categoriaService.getAllCategorias().subscribe(dados => {
            this.categorias = dados;
            this.categlist.set(dados);
            console.log(this.categorias);
        });

        if (secondSegment == "edit") {
            this.isEdit = true;
            const id = this.route.snapshot.params["id"];
            this.editProduto(id);
        }
    }

    filtrarCategorias = computed(() => {
        return this.categlist();
    });

    editProduto(id : number) : void {
        this.editingProdutoId = id;
        
        this.produtoService.getProdutoById(id).subscribe({
            next: (produto) => {
              this.produtoForm.patchValue({
                    nome: produto.nome,
                    categoria: produto.categoria,
                    preco: produto.preco,
                    status: produto.status
                })
            }, 
            error: (error) => {
                console.log("Erro ao listar produto na edição!", error)
            }
        });
        console.log(this.produtoForm);
    }

    onSubmit() : void {
        const formValue = this.produtoForm.value;

        if (this.isEdit && this.editingProdutoId) {
            this.updateProduto(this.editingProdutoId, formValue);
        } 
        else {
            this.createProduto(formValue);
        }
    }

    updateProduto(id: number, produto: Produto) {
        this.produtoService.updateProduto(id, produto).subscribe({
            next: () => {
                alert('Produto atualizado com sucesso!');
                this.router.navigate(['/produto']);
            }, 
            error: (error) => {
                console.log("Erro ao atualizar produto!", error);
            }
        })
    }

    createProduto(produto : Produto) {
        console.log(produto);
        this.produtoService.createProduto(produto).subscribe({
            next: () => {
                alert('Produto cadastrado com sucesso!');
                this.router.navigate(['/produto']);
            }, 
            error: (error) => {
                console.log("Erro ao tentar listar depois de cadastrar produto!", error);
            }
        });
    }
}