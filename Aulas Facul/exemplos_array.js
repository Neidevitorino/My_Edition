//Array SORT (ordenação)
var teleSena = [8,5,32,1,28,90,88,12,100,10];

console.log("normal: "+teleSena);


//sort default (como string)
var teleSena2 = [8,5,32,1,28,90,88,12,100,10];
var teleSenaOrdernado1 = teleSena2.sort();

console.log("ordernando: "+teleSenaOrdernado1);



//sort com numbers
var teleSena3 = [8,5,32,1,28,90,88,12,100,10];
var teleSenaOrdernado3 = teleSena3.sort(function (a, b) {  
                                            return a - b;  
                                      });

console.log("ordernando com number: "+teleSenaOrdernado3);



//Array random
var meu_array = [];
var maximo = 100;


while(meu_array.length < maximo){
  
  var aleatorio = Math.ceil(Math.random()*maximo);
  
  if(meu_array.indexOf(aleatorio) === -1){
    meu_array.push(aleatorio);
  }
  
}

console.log(meu_array);

console.log(meu_array.indexOf(90));