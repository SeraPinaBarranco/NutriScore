import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any,pagina:number): any {
    const resultadoFiltro= [];
    //arg es lo que se escribe
    //value es el array

    for(const resultado of value){
      if(resultado.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoFiltro.push(resultado);
      }
    }
    console.log(pagina);
    return resultadoFiltro;
  }

}
