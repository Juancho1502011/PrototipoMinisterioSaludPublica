import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  destacados = [
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/noticia1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/noticia1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/noticia1.png',
    },
  ];  

  recientes = [
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/reciente1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/reciente1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/reciente1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/reciente1.png',
    },
    {
      titulo: 'Noticia 1',
      fechaHora: '2020-10-10 10:10:10',
      imagen: '/assets/img/reciente1.png',
    },
  ];  

  vistos=[
    'Salud rechaza obstrucción de ambulacia que debía asistir a una persona en estado grave',
    'Ecuador sería el segundo país en certificar la eliminación de la rabia humana',
    'Ecuador sería el segundo país en certificar la eliminación de la rabia humana',
    'Ecuador sería el segundo país en certificar la eliminación de la rabia humana'
  ]
}
