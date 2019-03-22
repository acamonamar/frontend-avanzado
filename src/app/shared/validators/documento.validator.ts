import {AbstractControl} from '@angular/forms';

export function dniValidator(control: AbstractControl) {
    console.log('este es mi tipo' + control.get('tipo').value);
    if (control.get('tipo').value === 'dni') {
        const numero = control.get('numero').value;
        console.log('Numero de la cadena' + numero.length );
        if (numero.length !== 9) {
            return { 'numero': true };
        }
    }

    if (control.get('tipo').value === 'pasaporte') {
        const numero = control.get('numero').value;
        console.log('Numero de la cadena' + numero.length );
        if (numero.length !== 10) {
            return { 'numero': true };
        }
    }

    return null;
}
