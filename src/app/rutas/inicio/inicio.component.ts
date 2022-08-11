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
    icono:'bi bi-snapchat'},
    {nombre: 'Salud en cifras',
    icono:''},
    {nombre: 'Certificado de vacunación',
    icono:''},
    {nombre: 'Fijación de Medicamentos',
    icono:''},
    {nombre: 'Biblioteca virtual de salud',
    icono:''},
    {nombre: 'Otro',
    icono:''},
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
