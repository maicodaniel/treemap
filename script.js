


    const canvasWidth = 800;
    const canvasHeight = 800;

function draw() {

    let totalH = 800;
    let totalV = 800;
   
    var ctx2 = document.getElementById("tCanvas2").getContext("2d");

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

    let x = 0;
    let h = 800
    let y = 0;
    let w = 0;
    let area =0;
    let resto = 0;
    let lastY = 0;
    let modulo = 0;
    let lastX = 0;
    
    valorTotalArray.sort(function(a,b) {
      return a.nivel > b.nivel ? -1 : a.nivel < b.nivel ? 1 : 0;
  });

    valorTotalArray.forEach(personagem);

    function personagem(item, index){
      let area2 =0;
      h = 800;

      if (y == 800) {
        y = lastY;
      }

      if (x == 800) {
        x = lastX;
      }

      w = (  totalV * (((item.nivel * 100)/valorTotal)/100));
      area = w * h;
      resto = totalV - (w + y);

     if ((modulo % 2) !== 0) {
      w =  w + resto;
      console.log('validacao i >0 ' + (w));
      h = area/w; 
      area2 = w * h;
     }else{
      h = totalH;
      area = h * w;
      resto = h - x;
      h = resto;
      w = area/h;
     }
  
     
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
        x = 0;
      }

      if ((y + w) > totalV) {
        y = 0;
      }

      lastY = y;
      y = y + w;
      lastX = x;
      x = x + h;
      
      modulo++
    }
}
