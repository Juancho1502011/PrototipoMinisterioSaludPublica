import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Input() 

  cartas = [
    {nombre: 'Dirección Nacional de Discapacidades',
    icono:'fa-solid fa-wheelchair'},
    {nombre: 'Salud en cifras',
    icono:'fa-solid fa-book-medical'},
    {nombre: 'Certificado de vacunación',
    icono:'fa-solid fa-file-lines'},
    {nombre: 'Fijación de Medicamentos',
    icono:'fa-solid fa-capsules'},
    {nombre: 'Biblioteca virtual de salud',
    icono:'fa-solid fa-book-medical'},
    {nombre: 'Otros',
    icono:'fa-solid fa-ellipsis'},
  ]

  @Input()
  noticias = [
    {titulo: 'Tres provincias cuentan con cuatro nuevos tomógrofos',
    fechaHora: '2021-05-01 12:00:00',
    },
    {titulo: 'Población entre 18 y 19 años deben acceder al seguno refuerzo COVID 19 ',
    fechaHora: '2021-05-01 12:00:00',
    },
    {titulo: 'Coronavirus COVID 19',
    fechaHora: '2021-05-01 12:00:00',
    },
    {titulo: 'Hospital del Niño rinde homenaje a sus pequeños pacientes',
    fechaHora: '2021-05-01 12:00:00',
    },
  ]
}
