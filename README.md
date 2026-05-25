# AngularEmpresaCrud

Este projeto foi criado usando [Angular CLI](https://github.com/angular/angular-cli) versão 21.2.12.

## Servidor Local

Para poder visualizar o projeto na sua máquina, você precisará iniciar o servidor local do Angular. 
Digite o código abaixo no bash de sua preferência, e depois dê enter:

```bash
ng serve
```

Quando o servidor estiver funcionando, abra seu browser e navigue para `http://localhost:4200/`. E a aplicação irá iniciar automaticamente.

## Servidor Json

Os dados utilizados para alimentar o cadastro do projeto foram colocados em um arquivo Json. Assim como também os dados que são cadastrados e atualizados no projeto irão alterar esse mesmo arquivo. Para que esse sistema funcione, é necessário iniciar também o servidor Json. Para isso, digite o código abaixo no bash de sua preferência, e depois dê enter:

```bash
json-server --watch db.json
```
