var momentoatual = new Date();

/*data*/
var dia = momentoatual.getDate();
var mes = momentoatual.getMonth();
var ano = momentoatual.getFullYear();

/*hora*/
var hora = momentoatual.getHours();
var minuto = momentoatual.getMinutes();
var segundo = momentoatual.getSeconds();

/*funcoes*/
function convertermes() {
    let listameses = {0:'jan', 1:'fev', 2:'mar', 3:'abr', 4:'mai', 5:'jun',
    6:'jul', 7:'ago', 8:'set', 9:'out', 10:'nov', 11:'dez'};

    if(mes == 1){
    mes = listameses[1];
    }
}

function relogio() {
    convertermes();
    console.log(hora+':'+minuto+':'+segundo+'s');
    console.log(dia+'/'+mes+'/'+ano);
}
relogio();