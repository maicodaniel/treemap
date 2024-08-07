


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
    const data = [
      { label: "Eve", value: 10 },
      { label: "Cain", value: 14 },
    ];
   

    var ctx2 = document.getElementById("tCanvas2").getContext("2d");

    const canvas = document.getElementById("treemapCanvas");
    
   
    let valorTotalArray = [500,300,200,100];
    let valorTotal = 1100;
    let areaTotal = totalH * totalV;


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

    for (var i = 0; i < 4; i++) {

      let area2 =0;
      


      console.log(x,y,h,w, 'sequencia antes dos ifs = ' + i);


      if (y == 800) {
        y = lastY;
      }

      if (x == 800) {
        x = lastX;
       }

      w = (  totalV * (((valorTotalArray[i] * 100)/valorTotal)/100));

      console.log('validacao i >0 ' + (w));

      area = w * h;
      resto = totalV - (w + y);

      console.log('validacao i >0 ' +( y + w), h, area);

     if ((modulo % 2) !== 0 && ((y + w) < 800)) {

      
      w =  w + resto;
      h = area/w; 
      area2 = w * h;
     
      if ((y + w) > 800) {

        
      }else if((y + w) == 800){

      }

     }else{
      
      h = totalH;
      area = h * w;
      resto = h - x;
      h = resto;
      w = area/h;

      
     }

     

     console.log(x,y,h,w, 'sequencia = ' + i);

      ctx2.fillStyle =
        "rgb(" +
        Math.floor(155 -  (i * 25)) +
        "," +
        Math.floor(255 - (i * 50)) +
        "," +
        Math.floor(255 -  (i * 65)) +
        ")"
        ;  
      ctx2.fillRect(x, y, h, w);

      ctx2.fillStyle = 'purple';
      ctx2.font = 'bold 25px Arial';
      ctx2.fillText(Math.floor((valorTotalArray[i] * 100)/valorTotal)+'%',(x + 30), (y + 30)) ;
     


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
      x = h;
      
      modulo++
      console.log(area, area2, resto)
    }

}
