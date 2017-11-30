var Xray = require('x-ray');
var x = Xray();
var $ = require('jquery');
var axios = require('axios');



var contador = 1;
$tEnv = "";
$uEnv = "";
setTimeout(buscarCapitulo, 1000);

function buscarCapitulo(){
    x('https://animeflv.net/ver/47545/dragon-ball-super-latino-'+contador, 'body', [{
        title: 'h1.Title@html',
        resul: ['script']
    }])(function (eer, r) {
        $m = r[0].resul[15];
    
        $resultado = $m.indexOf("http", 0);
        $uEnv = $m.slice($resultado, $resultado + 95);
        $tEnv = r[0].title;
    })
    contador++;
    setTimeout(crearCapitulo, 1000);
}

function crearCapitulo(){
    axios.get('api.trucosdeactualidad.com/dbs/llenar.php?titulo=Ruben&url=google.com').then(function(res){
        console.log(res);
        setTimeout(buscarCapitulo, 1000);
    }).catch(function (error) {
        console.log(error);
      });
    console.log("creado");
}