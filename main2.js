//2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema:
// los precios no están al lado de cada estante con su respectivo helado.
// “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
// Miguel tiene $1.000 
// Carlos tiene $2.000 
// Manuel tiene $500 
// Los precios de helados son los siguientes:
// Bonais: $400
// Palito de helado de agua: $1.000 
// Palito de helado de crema: $2.200
// Bombón helado con arequipe: $1.500
// Bombón helado con chispas de chocolate: $2.500
// Bombón helado con fresas: $2.800
// Medio litro de helado: $ 2.000
// 
// El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
// Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
// El programa también tiene que poder dar los vueltos de su compra con su factura
// 
// 
let listahelados = ["Bonais: $400", "Palito de helado de agua: $1.000", "Palito de helado de crema: $2.200",
    "Bombón helado con arequipe: $1.500", "Bombón helado con chispas de chocolate: $2.500", "Bombón helado con fresas: $2.800",
    "Medio litro de helado: $ 2.000"
];


let nombrecliente;
let dinerocliente;
let helados;
let pedido;
let cambio;

nombrecliente = prompt(`Digite su nombre:`);
dinerocliente = (parseInt(prompt(`Registre el dinero disponible:`)));
if ((parseInt(dinerocliente)) < 400) {

    alert(`No hay helados de ese valor`);
}
if ((parseInt(dinerocliente)) >= 400 && (parseInt(dinerocliente)) < 1000) {

    pedido = prompt(`Seleccione el Helado: \n1. ${listahelados[0]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
}

if ((parseInt(dinerocliente)) >= 1000 && (parseInt(dinerocliente)) < 1500) {

    pedido = prompt(`Seleccione el Helado: \n1. ${ listahelados[0]}\n2. ${listahelados[1]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }

    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);

    }

}
if ((parseInt(dinerocliente)) >= 1500 && (parseInt(dinerocliente)) < 2000) {

    pedido = prompt(`Seleccione el Helado: \n1. ${ listahelados[0]}\n2. ${listahelados[1]}\n3. ${ listahelados[3]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);
    }
    if (pedido == 3) {
        cambio = parseInt(dinerocliente) - parseInt(1500);
        alert("Usted compro un " + listahelados[3] + " su cambio es $ " + cambio);
    }
}

if ((parseInt(dinerocliente)) >= 2000 && (parseInt(dinerocliente)) < 2200) {

    pedido = prompt(`Seleccione el Helado: \n1. ${ listahelados[0]}\n2. ${listahelados[1]}\n3. ${listahelados[3]}\n4. ${listahelados[6]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);
    }
    if (pedido == 3) {
        cambio = parseInt(dinerocliente) - parseInt(1500);
        alert("Usted compro un " + listahelados[3] + " su cambio es $ " + cambio);
    }
    if (pedido == 4) {
        cambio = parseInt(dinerocliente) - parseInt(2000);
        alert("Usted compro un " + listahelados[6] + " su cambio es $ " + cambio);
    }
}

if ((parseInt(dinerocliente)) >= 2200 && (parseInt(dinerocliente)) < 2500) {

    pedido = prompt(`Seleccione el Helado: \n1. ${ listahelados[0]}\n2. ${listahelados[1]}\n3. ${listahelados[3]}\n4. ${listahelados[6]}\n5. ${listahelados[2] }`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);
    }
    if (pedido == 3) {
        cambio = parseInt(dinerocliente) - parseInt(1500);
        alert("Usted compro un " + listahelados[3] + " su cambio es $ " + cambio);
    }
    if (pedido == 4) {
        cambio = parseInt(dinerocliente) - parseInt(2000);
        alert("Usted compro un " + listahelados[6] + " su cambio es $ " + cambio);
    }
    if (pedido == 5) {
        cambio = parseInt(dinerocliente) - parseInt(2200);
        alert("Usted compro un " + listahelados[2] + " su cambio es $ " + cambio);
    }
}

if ((parseInt(dinerocliente)) >= 2500 && (parseInt(dinerocliente)) < 2800) {

    pedido = prompt(`Seleccione el Helado: \n1. ${listahelados[0] }\n2. ${listahelados[1] }\n3. ${listahelados[3]}\n4. ${listahelados[6]}\n5. ${listahelados[2]}\n6. ${listahelados[4]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);
    }
    if (pedido == 3) {
        cambio = parseInt(dinerocliente) - parseInt(1500);
        alert("Usted compro un " + listahelados[3] + " su cambio es $ " + cambio);
    }
    if (pedido == 4) {
        cambio = parseInt(dinerocliente) - parseInt(2000);
        alert("Usted compro un " + listahelados[6] + " su cambio es $ " + cambio);
    }
    if (pedido == 5) {
        cambio = parseInt(dinerocliente) - parseInt(2200);
        alert("Usted compro un " + listahelados[2] + " su cambio es $ " + cambio);
    }
    if (pedido == 6) {
        cambio = parseInt(dinerocliente) - parseInt(2500);
        alert("Usted compro un " + listahelados[4] + " su cambio es $ " + cambio);
    }
}
if ((parseInt(dinerocliente)) >= 2800) {

    pedido = prompt(`Seleccione el Helado: \n1. ${listahelados[0]}\n2. ${listahelados[1]}\n3. ${listahelados[3]}\n4. ${listahelados[6]}\n5. ${listahelados[2]}\n6. ${listahelados[4]}\n7. ${listahelados[5]}`);
    if (pedido == 1) {
        cambio = parseInt(dinerocliente) - parseInt(400);
        alert("Usted compro un " + listahelados[0] + " su cambio es $ " + cambio);
    }
    if (pedido == 2) {
        cambio = parseInt(dinerocliente) - parseInt(1000);
        alert("Usted compro un " + listahelados[1] + " su cambio es $ " + cambio);
    }
    if (pedido == 3) {
        cambio = parseInt(dinerocliente) - parseInt(1500);
        alert("Usted compro un " + listahelados[3] + " su cambio es $ " + cambio);
    }
    if (pedido == 4) {
        cambio = parseInt(dinerocliente) - parseInt(2000);
        alert("Usted compro un " + listahelados[6] + " su cambio es $ " + cambio);
    }
    if (pedido == 5) {
        cambio = parseInt(dinerocliente) - parseInt(2200);
        alert("Usted compro un " + listahelados[2] + " su cambio es $ " + cambio);
    }
    if (pedido == 6) {
        cambio = parseInt(dinerocliente) - parseInt(2500);
        alert("Usted compro un " + listahelados[4] + " su cambio es $ " + cambio);
    }
    if (pedido == 7) {
        cambio = parseInt(dinerocliente) - parseInt(2800);
        alert("Usted compro un " + listahelados[5] + " su cambio es $ " + cambio);
    }
}