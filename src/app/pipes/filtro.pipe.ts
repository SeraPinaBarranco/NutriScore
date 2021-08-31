import { Pipe, PipeTransform } from '@angular/core';
import { Productos } from '../models/productos.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Productos[], filtro: string,pagina:number): Productos[] {
    //let resultadoFiltro: Productos[]= [];
    //arg es lo que se escribe
    //value es el array

    /*for(const resultado of value){
      if(resultado.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoFiltro.push(resultado);
      }
    }*/
    console.log(pagina);
    if(filtro.length === 0) return value = value.slice(pagina, pagina + 3);

    //resultadoFiltro = value.slice(pagina, pagina + 2);

    //
    const resultadoFiltro = value.filter( prod => prod.nombre.toLowerCase().includes(filtro.toLowerCase()));

    return resultadoFiltro.slice(pagina, pagina + 3);
  }

}
