function main() {
    var momentoatual = new Date();

    /*data*/
    var hoje = momentoatual.getDay();
    var dia = momentoatual.getDate();
    var mes = momentoatual.getMonth();
    var ano = momentoatual.getFullYear();

    /*hora*/
    var hora = momentoatual.toLocaleTimeString();

    /*funcoes*/
    function convertermes() {
        let listameses = { 0: 'janeiro', 1: 'fevereiro', 2: 'março', 3: 'abril', 4: 'maio', 5: 'junho', 6: 'julho', 7: 'agosto', 8: 'setembro', 9: 'outubro', 10: 'novembro', 11: 'dezembro' };

        for (i in listameses) {
            if (mes == i) {
                mes = listameses[i];
            }
        }
    }

    function convertertoday() {
        let listatoday = { 0: 'Domingo', 1: 'Segunda-feira', 2: 'Terça-feira', 3: 'Quarta-feira', 4: 'Quinta-feira', 5: 'Sexta-feira', 6: 'Sábado' }
        for (i in listatoday) {
            if (hoje == i) {
                hoje = listatoday[i];
            }
        }
    }

    function relogio() {
        document.getElementById('hora').textContent = hora;
    }

    function datas() {
        convertertoday();
        convertermes();
        let dataAtual = hoje + ', ' + dia + ' de ' + mes + ' de ' + ano;
        document.getElementById('data').textContent = dataAtual;

    }
    relogio();
    datas();
}
main();
setInterval(() => {
    main();
}, 1000);