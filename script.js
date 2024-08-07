


    const canvasWidth = 800;
    const canvasHeight = 800;

function draw() {

  /*  var ctx = document.getElementById("tCanvas").getContext("2d");
    for (var i = 0; i < 32; i++) {
      for (var j = 0; j < 32; j++) {
        ctx.fillStyle =
          "rgb(" +
          Math.floor(255 - 10 * i) +
          "," +
          Math.floor(255 - 10 * j) +
          ",0)";
        ctx.fillRect(j * 25, i * 25, 25, 25);
        
       
      }
    }


  */


    let totalH = 800;
    let totalV = 800;
   
   

    var ctx2 = document.getElementById("tCanvas2").getContext("2d");

    const canvas = document.getElementById("treemapCanvas");
    
   
    let valorTotalArray = 
    [
      {name: "Bruxadacruz", class: "Ocultista", nivel: 82},
      {name: "Bruxostoza", class: "Necromancer", nivel: 63},
      {name: "Comedoradeelemento", class: "Elementalista", nivel: 44},
      {name: "Magadearcozuado", class: "Elementalista", nivel: 76},
      {name: "Magnova", class: "Necromancer", nivel: 69},
      {name: "Maico_arqueira", class: "Deadeye", nivel: 70},
      {name: "Maico_Contagiante", class: "Ocultista", nivel: 61},

      
    
    ];



    const valorTotal = valorTotalArray.reduce((soma, item) => soma + item.nivel,0);
    let areaTotal = totalH * totalV;

    console.log(valorTotal);

    

   
    // Area total e 64000
    let x = 0;
    let h = 800
    let y = 0;
    let w = 0;
    let area =0;
    let resto = 0;
    let lastY = 0;
    let modulo = 0;
    let lastX = 0;

    //for (var i = 0; i < valorTotalArray.length; i++) {

    valorTotalArray.sort(function(a,b) {
      return a.nivel > b.nivel ? -1 : a.nivel < b.nivel ? 1 : 0;
  });

    valorTotalArray.forEach(personagem);

    function personagem(item, index){
      let area2 =0;
      h = 800;

      console.log(item,index);
   


      if (y == 800) {
        y = lastY;
      }

      if (x == 800) {
        x = lastX;
       }

      w = (  totalV * (((item.nivel * 100)/valorTotal)/100));

      console.log('/////////////////////////////');
      console.log( 'lastY = ' + lastY);
      console.log('y = ' + y);
      console.log('lastX = ' + lastX);
      console.log('x = ' + x);
      console.log('\\\\\\\\\\\\\\\\\\\\\\\\\\\\');

      area = w * h;
      resto = totalV - (w + y);

    

     if ((modulo % 2) !== 0) {

      
      w =  w + resto;
      console.log('validacao i >0 ' + (w));
      h = area/w; 
      area2 = w * h;
     
      console.log('area2 = ' + (area2));

     }else{
      
      h = totalH;
      area = h * w;
      resto = h - x;
      h = resto;
      w = area/h;

      
     }
     console.log('x = ' + (x));
     console.log('h = ' + (h));
     console.log('w = ' + (w));
     console.log('y = ' + (y));
     console.log('w + y = ' + (w + y));
     console.log('x + h = ' + (x + h));
     console.log('tptaçV = ' + (totalV));
     console.log('resto = ' + (resto));
     console.log('area = ' + (area));
     console.log('valor total = ' + (valorTotal));
     

    

      ctx2.fillStyle =
        "rgb(" +
        Math.floor(255 -  (index * 25)) +
        "," +
        Math.floor(255 - (index * 45)) +
        "," +
        Math.floor(255 -  (index * 65)) +
        ")"
        ;  
      ctx2.fillRect(x, y, h, w);

      ctx2.fillStyle = 'black';
      ctx2.font = 'bold 25px Arial';
      ctx2.fillText(Math.floor((((item.nivel * 100)/valorTotal)/100) * 100)+'%  ' + item.name,(x + 30), (y + 30)) ;
     


      if ((x + h) > totalH) {

        console.log('validacao (x + h) > totalH');
          x = 0;
      }

      if ((y + w) > totalV) {
        console.log('validacao (y + w) > totalV');
        y = 0;
      }

      lastY = y;
      y = y + w;
      lastX = x;
      x = x + h;
      
      modulo++

      console.log('***************************');
      console.log( 'lastY = ' + lastY);
      console.log('y = ' + y);
      console.log('lastX = ' + lastX);
      console.log('x = ' + x);
      console.log('***************************');
      
    }

}
