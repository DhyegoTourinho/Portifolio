import { Component, NgModule } from '@angular/core';

export class AppModule { }

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  projetos: Projeto[] = [];
  constructor() {
    this.projetos.push(this.adicionarProjeto("inegavel", "https://github.com/DhyegoTourinho/FrontEnd-Estudos/tree/main/Projects/Inegavel/inegavel", "ProjetoInegavel.png"));
    this.projetos.push(this.adicionarProjeto("JogoDasCharadas", "https://github.com/DhyegoTourinho/Projetos/tree/main/JogoDasCharadas", "JogoDasCharadas.png"));
    this.projetos.push(this.adicionarProjeto("DesafioAPI", "https://github.com/DhyegoTourinho/APIDesafio", "DesafioAPI.png"));
    this.projetos.push(this.adicionarProjeto("DesafioAPI", "https://github.com/DhyegoTourinho/APIDesafio", "DesafioAPI.png"));
    //TODO: Adicionar mais projetos.
  }

  adicionarProjeto(Nome:string, Link:string, Imagem:string){
    let projeto:Projeto = {
      nome: Nome,
      link: Link,
      imagem: "assets/" + Imagem
    }
    return projeto;
  }

}

class Projeto{
  nome:string;
  link:string;
  imagem:string;
}
