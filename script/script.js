let saldo = 1000;
let saldoactual = document.getElementById('saldoactual').value;
let importe = document.getElementById('importe').value;

const retirar = () => {
    if(importe === isNaN || saldoactual >= '0'){
        document.getElementById('mensaje').innerHTML = 'Importe no valido';
    } else {
        saldoactual = saldoactual - importe;
        document.getElementById('mensajeret').innerHTML = 'Retirar: '+importe;
        document.getElementById('saldodepo').innerHTML = 'Saldo: '+saldoactual;
    }
}

const depositar = () => {
    if(importe === isNaN){
        document.getElementById('mensaje').innerHTML = 'Importe no valido';
    } else {
        saldoactual = saldoactual + importe;
        document.getElementById('mensajedepo').innerHTML = 'Depositar: '+importe;
        document.getElementById('saldodepo').innerHTML = 'Saldo: '+saldoactual;
    }
}