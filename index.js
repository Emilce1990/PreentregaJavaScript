
 //Menu de opciones
 const opciones = 'Menu de opciones.\nIngrese: \n1 - para Cotizar prestamo\n2 - para Cotizar plazo fijo\n3 - para Cotizar divisas\n0 - para salir';
 const mensaje = 'Ingrese un numero valido'; 

const pedirDato = () =>
{
    return parseInt(prompt(mensaje)); 
}

const cotizarPrestamo = () =>
{
    let montoPrestamo = parseInt(prompt('Ingrese monto del prestamo'));
  
    while(isNaN(montoPrestamo))
    {
        montoPrestamo = pedirDato();
    }

    let cantidaCuotas = parseInt(prompt('Ingrese cantidad de cuotas'));
   
    while(isNaN(cantidaCuotas) || cantidaCuotas === 0)
    {
        cantidaCuotas = pedirDato();
    }

    let interes = 1.40;
    let resultado = (montoPrestamo / cantidaCuotas) * interes;
    return alert("El valor de cuota queda determinado en: " + resultado + " el costo total del prestamo es: " + (resultado * cantidaCuotas - montoPrestamo));
}


const cotizadorPlazoFijo = () =>
{
    let capitalAIngresar = parseInt(prompt('Ingrese capital del plazo fijo a simular'));
  
    while(isNaN(capitalAIngresar))
    {
        capitalAIngresar = pedirDato();
    }
    let cantidadDias = parseInt(prompt('Ingrese cantidad de dias del plazo fijo'));
   
    while(isNaN(cantidadDias))
    {
        cantidadDias = pedirDato();
    }

    let tazaAnual = 35;

    let resultado = capitalAIngresar * tazaAnual / 365; 
    return alert("El rendimiento del plazo fijo queda determinado en: " + resultado);
}


const verCotizacionDivisas = () => 
{
    const dolar = 5895.50;
    const euro = 3500.50;
    const real = 1525.50;
    
    let menu = parseInt(prompt('Ingrese 1 ver cotizacion de Dolar \nIngrese 2 ver cotizacion de Euro\nIngrese 3 ver cotizacion de Real'));
   
    while(menu !== 1 && menu !== 2 && menu !== 3 && menu !== NaN)
    {     
        menu = parseInt(prompt('Opcion no valida. Ingrese otra'));
    }

    if (menu === 1) 
    {
        alert('La tazacion del dolar es: ' +dolar);
    }

    if (menu === 2) 
    {
        alert('La tazacion del euro es: ' + euro);
    }

    if (menu === 3) 
    {
        alert('La tazacion del real es: ' + real);
    }

  
}

 const selector = (eleccion) =>
  {

        switch (eleccion)
        {
            case 1:
                cotizarPrestamo();
            break;
            case 2:
                cotizadorPlazoFijo();
            break;
            case 3:
                verCotizacionDivisas();
            break;
            case 0:
            seleccion = 0;
            break;
            default: 
                alert('Ingreso incorrecto');
                while(opciones !== 1 && opciones !== 2 && opciones !== 3 && opciones !== 0)
                {     
                    opciones = parseInt('Opcion no valida. Ingrese otra');
                }
        }
  }

  
alert('Bienvenido');

let seleccion = parseInt(prompt(opciones)); 

const condiciones = () => (seleccion === 1 || seleccion === 2 || seleccion === 3 || seleccion === 0);

while(!condiciones())
{
 seleccion = parseInt(prompt(opciones));  
 condiciones();
}


while (seleccion !== 0) {
    selector(seleccion);
    seleccion = parseInt(prompt(opciones));
} 


