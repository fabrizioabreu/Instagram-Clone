import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css'],
  animations: [
    trigger('animacao-banner', [
      state('criado', style({ opacity: 1 })),
      transition('void => criado', [ 
        style({ opacity:0, transform: 'translate(-50px, 0)' }), 
        animate('500ms 0s ease-in-out') // Duração, delay e aceleração
      ])
    ]),
    trigger('animacao-painel', [
      state('criado', style({ opacity: 1 })),
      transition('void => criado', [ 
        style({ opacity:0, transform: 'translate(50px, 0)' }), 
        animate('1s 0s ease-in-out', // Duração, delay e aceleração
        keyframes([
          // offset: Marca o momento que o keyframe será incluido na animação ( de 0 a 1 )

          // 0 void ----x--------------------------x--x--x----------x 1.5s //
          style({ offset: 0.15, opacity: 1, transform: 'translateX(0    )' }),
          style({ offset: 0.86, opacity: 1, transform: 'translateX(0    )' }),
          style({ offset: 0.88, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.90, opacity: 1, transform: 'translateY(10px )' }),
          style({ offset: 0.92, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.94, opacity: 1, transform: 'translateY(10px )' }),
          style({ offset: 0.96, opacity: 1, transform: 'translateY(-10px)' }),
          style({ offset: 0.98, opacity: 1, transform: 'translateY(10px )' })
        ])) 
      ])
    ])
  ]
})
export class AcessoComponent implements OnInit {

  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }

  inicioDaAnimacao(): void {
    console.log('início da animação')
  }

  fimDaAnimacao(): void {
    console.log('fim da animação')
  }

}
