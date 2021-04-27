//1.	Pregunto si quiere el huevo frito.
//Si me dice que si, lo frio, si me dice que no, lo hago hervido.
//Una vez cocinado le pregunto si quiere sal en el huevo.
//Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

let  pedidohuevo;
let  sal;
     pedidohuevo=prompt(`Quiere huevo frito?  \n1. Si \n2. No`);
    switch (pedidohuevo) {
        case '1':
            //alert ("Huevo Frito");
            sal=prompt(`Quiere sal en el huevo frito?  \n1. Si \n2. No`);
            
            switch (sal) {
                case '1':
                    alert ("Sale pedido en plato de  huevo frito con sal");
                    break;
                case '2':
                    alert ("Sale pedido en plato de huevo frito sin sal");
                    break;
                default:
                    alert("No existe la opción")
                    break;
            }
            break;
        case '2':
                alert ("Se preparara huevo Hervido");
                sal=prompt(`Quiere sal en el huevo hervido?  \n1. Si \n2. No`);
switch (sal) {
    case '1':
        alert ("Sale pedido en plato de huevo hervido con sal");
        break;
    case '2':
        alert ("Sale pedido en plato de huevo hervido sin sal");
        break;
    default:
        alert("No existe la opción")
        break;
}
                break;
    
        default:
            alert("No existe la opción")
            break;
    }   
