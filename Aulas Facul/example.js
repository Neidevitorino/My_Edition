

function CalcArea(){
    var p = 0;
    var x = 0;
    var y = 0;
    var z = 0;
    var total = 0;

    x = parseFloat(document.getElementById('x').value);
    y = parseFloat(document.getElementById('y').value);
    z = parseFloat(document.getElementById('z').value);

    p = ((x + y + z) / 2);
    total = Math.sqrt(p*((p-x)*(p-y)*(p-z)));
    document.getElementById('chg').innerHTML = ("O resultado é:"+(total));    
}

function TipoTriangulo(){

    x = parseFloat(document.getElementById('x').value);
    y = parseFloat(document.getElementById('y').value);
    z = parseFloat(document.getElementById('z').value);


if (x == y || x == z || y == z){
          document.getElementById('chg1').innerHTML = 'O triangulo é isosceles';
    if (x == y && y == z){
      document.getElementById('chg1').innerHTML = 'O triangulo é equilatero';
  }   
    }
    else {document.getElementById('chg1').innerHTML = 'O triangulo é escaleno';
    }
}