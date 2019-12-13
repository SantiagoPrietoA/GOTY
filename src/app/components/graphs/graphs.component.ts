import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  @Input() results: any[] = [];

//   results: any[] = [
//   {
//     "name": "Juego 1",
//     "value": 20
//   },
//   {
//     "name": "juego 2",
//     "value": 10
//   },
//   {
//     "name": "Juego 3",
//     "value": 15
//   },
//   {
//     "name": "Juego 4",
//     "value": 30
//   }
// ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme =  'nightLights';

  // intervalo;

  constructor() {

  //  this.intervalo = setInterval(() => {

    //   console.log('tick');

    //   const newResult = [...this.results];
    //   this.results.forEach( e => e.value = Math.round( Math.random() * 500 ))
    //   this.results = [...newResult];
    // }, 1500);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    // clearInterval(this.intervalo)
    
  }

}
