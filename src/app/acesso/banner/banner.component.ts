import { Imagem } from './../imagem.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [ 
    trigger('banner', [
      state('escondido', style({ opacity: 0 })),
      state('visivel'  , style({ opacity: 1 })),
      transition('escondido <=> visivel', animate('1s ease-in'))
    ])
    // Documentação.
    // https://angular.io/guide/animations
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'visivel'

  public imagens: Imagem[] = [
    { estado: 'visivel'  , url: '/assets/banner-acesso/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/img_5.png' }
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.logicaRotacao()
    }, 3000);
  }

  logicaRotacao(): void {

    // Auxilia na exibição da próxima imagem
    let position: number = 0

    // Ocultar imagem
    for(let i = 0; i <= this.imagens.length; i++) {

      if(this.imagens[i].estado == 'visivel') {

        this.imagens[i].estado = 'escondido'        
        position = i === 4 ? 0 : i + 1
        break

      }
    }

    // Exibir a próxima imagem
    this.imagens[position].estado = 'visivel';

    setTimeout(() => {
      this.logicaRotacao()
    }, 3000);
  }

}
