import swal from'sweetalert2';

export class SweetAlert{

    constructor(){}
    
    static mostrarMensaje(texto:string, tiempo?:number|undefined){
        if(tiempo === undefined)tiempo=2000;
        swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Información de Registro',
            text:`- ${texto} - guardado con exito!!!`,
            showConfirmButton: false,
            timer: tiempo
          });        
    }

}