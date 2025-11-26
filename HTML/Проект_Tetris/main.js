
var ir = 1;
var chdi=["",""];
var score = 0;
var score2=0;
var chdi2 = ["", ""];
var count=0;
var count2 = 0;
var a2 = ["", ""];
var b2 = ["", ""];
var c2 = ["", ""];
var d2 = ["", ""];
var tf2 = 0;
var e2 = ["", "", "", ""];
var f2 = 1;
var flag2 = 0;
var type2 = 0;
var typeco2 = 2;
var a = ["", ""];
var b = ["", ""];
var c = ["", ""];
var d = ["", ""];
var tf = 0;
var e = ["", "", "", ""];
var f = 1;
var flag = 0;
var type = 0;
var typeco = 1;
var keyacheck;
var keydcheck;
var keya2check;
var keyd2check;
var ka = 0;
var kd = 0;
var ka2 = 0;
var kd2 = 0;
document.getElementById('all2').innerHTML += "  <div id='score2'>";
var i = 10;
while (i >= 1) {
    document.getElementById('score2').innerHTML += "<div class='score' style='background-color:transparent;' id=sc2-" + i + "></div>";
    i--;
}
document.getElementById('all2').innerHTML += "  </div>";

function draw(m, n) {
    document.getElementById('n' + m + '-' + n).style.backgroundColor = 'lightskyblue';
}
function drawdou(l, m, n) {
    var o = 1;
    while (o <= 10) {
        if (o != m || o != n) {
            document.getElementById('n' + o + '-' + l).style.backgroundColor = 'lightskyblue';
        }
        o++;
    }
    document.getElementById('n' + m + '-' + l).style.backgroundColor = 'darkslategrey';
    document.getElementById('n' + n + '-' + l).style.backgroundColor = 'darkslategrey';

}
function drawdou2(l, m, n) {
    var o = 1;
    while (o <= 10) {
        if (o != m || o != n) {
            document.getElementById('n2' + o + '-' + l).style.backgroundColor = 'lightskyblue';
        }
        o++;
    }
    document.getElementById('n2' + m + '-' + l).style.backgroundColor = 'darkslategrey';
    document.getElementById('n2' + n + '-' + l).style.backgroundColor = 'darkslategrey';

}
function draw2(m, n) {
    document.getElementById('n2' + m + '-' + n).style.backgroundColor = 'lightskyblue';
}
function clearsco() {
    var i = 1;
    while (i <= 10) {
        document.getElementById('sc-' + i).style.backgroundColor = 'transparent';
        document.getElementById('sc2-' + i).style.backgroundColor = 'transparent';
        i++;
    }
}
while (ir <= 36) {
    var jr = 1;
    while (jr <= 4) {
        if (jr == 1) document.getElementById('display').innerHTML += "<div class='colum'  id='dis-"+ ir + "'>";
        document.getElementById('dis-' + ir).innerHTML += "<div class='pic1' style='background-color:transparent' id=dis-"+ir + "-" + jr + "></div>";
        jr++;
    }
    if (jr == 4) document.getElementById('display').innerHTML += '</div>';
    ir++;
}

var ir = 1;
while (ir <= 36) {
    var jr = 1;
    while (jr <= 4) {
        if (jr == 1) document.getElementById('display2').innerHTML += "<div class='colum'  id='dis2-" + ir + "'>";
        document.getElementById('dis2-' + ir).innerHTML += "<div class='pic1' style='background-color:transparent' id=dis2-" + ir + "-" + jr + "></div>";
        jr++;
    }
    if (jr == 4) document.getElementById('display2').innerHTML += '</div>';
    ir++;
}
var w = 0;
var i = 1;
    while (i <= 10) {
        var j = 1;
       while (j<=21) {
            if (j == 1) document.getElementById('all').innerHTML += "<div class='colum'  id='n" + i + "'>";
            document.getElementById('n' + i).innerHTML += "<div class='pic' style='background-color:darkslategrey' id=n" + i + "-" + j + "></div>";
          
            j++;
        }
       if (j == 21) document.getElementById('all').innerHTML += "</div>";
        i++;
    }
 
    function format() {
        var i = 1;
       
        while (i <= 10) {
            var j = 1;
            while (j <= 21) {
                document.getElementById('n' + i + '-' + j).style.backgroundColor = 'darkslategrey';
                j++;
            }
            i++;
        }
        if (score == 0) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
                draw(1, 21);
                draw(2, 21);
                draw(3, 21);
                draw(4, 21);
                draw(7, 21);
                draw(7, 20);
                draw(4, 20);
                draw(10, 21);
            }
            if (hh == 1) {
                draw(3, 20);
                draw(3, 21);
                draw(4, 20);
                draw(6, 21);
                draw(7, 21);
                draw(9, 21);
                draw(7, 20);
            }
            if (hh == 2) {
                draw(10, 21);
                draw(10, 20);
                draw(9, 20);
                draw(5, 21);
                draw(5, 20);
                draw(2, 21);
                draw(3, 20);
            }
            if (hh == 3) {
                draw(1, 21);
                draw(5, 21);
                draw(6, 21);
                draw(6, 20);

            }
            if (hh == 4) {
                draw(10, 21);
                draw(10, 20);
                draw(8, 21);
                draw(6, 21);
                draw(5, 21);
                draw(1, 21);
                draw(2, 21);
            }
            if (hh == 5) {
                draw(4, 20);
                draw(4, 21);
                draw(5, 21);
                draw(6, 20); draw(6, 21);
                draw(8, 21);
                draw(9, 20);
                draw(1, 21);
            }
            if (hh == 6) {
                draw(5, 21);
                draw(6, 21);
                draw(7, 21);
                draw(10, 20);
                draw(10, 21);
                draw(2, 21);
                draw(1, 21);
                draw(3, 20);
            }
        }
        if (score == 1) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
              
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
            }
            if (hh == 1) {
               
                drawdou(20, 2, 9);
                drawdou(21, 6, 4);
            }
            if (hh == 2) {
              
                drawdou(20, 1, 3);
                drawdou(21, 2, 10);
            }
            if (hh == 3) {
                
                drawdou(20, 1, 5);
                drawdou(21, 2, 3);
            }
            if (hh == 4) {
               
                drawdou(20, 1, 2);
                drawdou(21, 8, 7);
            }
            if (hh == 5) {
                
                drawdou(20, 1, 9);
                drawdou(21, 2, 3);
            }
            if (hh == 6) {
             
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
            }
        }
        if (score == 2) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
               
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 3, 6);
            }
            if (hh == 1) {
               
                drawdou(20, 2, 9);
                drawdou(21, 6, 4);
                drawdou(19, 7, 8);
            }
            if (hh == 2) {
                
                drawdou(20, 1, 3);
                drawdou(21, 2, 10);
                drawdou(19, 3, 6);
            }
            if (hh == 3) {
                
                drawdou(20, 1, 5);
                drawdou(21, 2, 3);
                drawdou(19, 4, 9);
            }
            if (hh == 4) {
               
                drawdou(20, 1, 2);
                drawdou(21, 8, 7);
                drawdou(19, 9, 10);
            }
            if (hh == 5) {
            
                drawdou(20, 1, 9);
                drawdou(21, 2, 3);
                drawdou(19, 3, 2);
            }
            if (hh == 6) {
             
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 2, 4);
            }
        }
        if (score == 3) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
                draw(1, 19);
                draw(2, 19);
                draw(3, 19);
                draw(4, 19);
                draw(7, 19);
                draw(7, 19);
                draw(4, 19);
                draw(10, 19);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 3, 6);
                drawdou(18, 2, 8);
            }
            if (hh == 1) {
                draw(3, 18);
                draw(3, 19);
                draw(4, 18);
                draw(6, 19);
                draw(7, 19);
                draw(9, 19);
                draw(7, 19);
                drawdou(20, 2, 9);
                drawdou(21, 6, 4);
                drawdou(19, 7, 8);
                drawdou(18, 1, 6);
            }
            if (hh == 2) {
                draw(10, 19);
                draw(10, 18);
                draw(9, 18);
                draw(5, 19);
                draw(5, 18);
                draw(2, 19);
                draw(3, 18);
                drawdou(20, 1, 3);
                drawdou(21, 2, 10);
                drawdou(19, 3, 6);
                drawdou(18, 3, 10);
            }
            if (hh == 3) {
                draw(1, 19);
                draw(5, 19);
                draw(6, 19);
                draw(6, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 3);
                drawdou(19, 4, 9);
                drawdou(18, 1, 6);
            }
            if (hh == 4) {
                draw(10, 19);
                draw(10, 18);
                draw(8, 19);
                draw(6, 19);
                draw(5, 19);
                draw(1, 19);
                draw(2, 19);
                drawdou(20, 1, 2);
                drawdou(21, 8, 7);
                drawdou(19, 9, 10);
                drawdou(18, 2, 8);
            }
            if (hh == 5) {
                draw(4, 18);
                draw(4, 19);
                draw(5, 19);
                draw(6, 18); draw(6, 19);
                draw(8, 19);
                draw(9, 18);
                draw(1, 19);
                drawdou(20, 1, 9);
                drawdou(21, 2, 3);
                drawdou(19, 3, 2);
                drawdou(18, 2, 6);
            }
            if (hh == 6) {
                draw(5, 19);
                draw(6, 19);
                draw(7, 19);
                draw(10, 19);
                draw(10, 19);
                draw(2, 19);
                draw(1, 19);
                draw(3, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 2, 4);
                drawdou(19, 3, 5);
            }
        }
        if (score == 4) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
                draw(1, 19);
                draw(2, 19);
                draw(3, 19);
                draw(4, 19);
                draw(7, 19);
                draw(7, 19);
                draw(4, 19);
                draw(10, 19);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 3, 6);
                drawdou(18, 2, 8);
                drawdou(17, 1, 8);
            }
            if (hh == 1) {
                draw(3, 18);
                draw(3, 19);
                draw(4, 18);
                draw(6, 19);
                draw(7, 19);
                draw(9, 19);
                draw(7, 19);
                drawdou(20, 2, 9);
                drawdou(21, 6, 4);
                drawdou(19, 7, 8);
                drawdou(18, 1, 6);
                drawdou(17, 2, 10);
            }
            if (hh == 2) {
                draw(10, 19);
                draw(10, 18);
                draw(9, 18);
                draw(5, 19);
                draw(5, 18);
                draw(2, 19);
                draw(3, 18);
                drawdou(20, 1, 3);
                drawdou(21, 2, 10);
                drawdou(19, 3, 6);
                drawdou(18, 3, 10);
                drawdou(17, 6, 1);
            }
            if (hh == 3) {
                draw(1, 19);
                draw(5, 19);
                draw(6, 19);
                draw(6, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 3);
                drawdou(19, 4, 9);
                drawdou(18, 1, 6);
                drawdou(17, 2, 8);
            }
            if (hh == 4) {
                draw(10, 19);
                draw(10, 18);
                draw(8, 19);
                draw(6, 19);
                draw(5, 19);
                draw(1, 19);
                draw(2, 19);
                drawdou(20, 1, 2);
                drawdou(21, 8, 7);
                drawdou(19, 9, 10);
                drawdou(18, 2, 8);
                drawdou(17, 2, 4);
            }
            if (hh == 5) {
                draw(4, 18);
                draw(4, 19);
                draw(5, 19);
                draw(6, 18); draw(6, 19);
                draw(8, 19);
                draw(9, 18);
                draw(1, 19);
                drawdou(20, 1, 9);
                drawdou(21, 2, 3);
                drawdou(19, 3, 2);
                drawdou(18, 2, 6);
                drawdou(17, 2, 9);
            }
            if (hh == 6) {
                draw(5, 19);
                draw(6, 19);
                draw(7, 19);
                draw(10, 19);
                draw(10, 19);
                draw(2, 19);
                draw(1, 19);
                draw(3, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 2, 4);
                drawdou(18, 3, 5);
                drawdou(17, 2, 10);
            }
        }
        if (score >= 5) {
            var hh = Math.floor(Math.random() * 7);
            if (hh == 0) {
                draw(1, 19);
                draw(2, 19);
                draw(3, 19);
                draw(4, 19);
                draw(7, 19);
                draw(7, 19);
                draw(4, 19);
                draw(10, 19);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 3, 6);
                drawdou(18, 2, 8);
                drawdou(17, 1, 8);
                drawdou(16, 2, 8);
                drawdou(15, 6, 3);
            }
            if (hh == 1) {
                draw(3, 18);
                draw(3, 19);
                draw(4, 18);
                draw(6, 19);
                draw(7, 19);
                draw(9, 19);
                draw(7, 19);
                drawdou(20, 2, 9);
                drawdou(21, 6, 4);
                drawdou(19, 7, 8);
                drawdou(18, 1, 6);
                drawdou(17, 2, 10);
                drawdou(16, 2, 3);
                drawdou(15, 6, 8);
            }
            if (hh == 2) {
                draw(10, 19);
                draw(10, 18);
                draw(9, 18);
                draw(5, 19);
                draw(5, 18);
                draw(2, 19);
                draw(3, 18);
                drawdou(20, 1, 3);
                drawdou(21, 2, 10);
                drawdou(19, 3, 6);
                drawdou(18, 3, 10);
                drawdou(17, 6, 1);
                drawdou(16, 1, 3);
                drawdou(15, 8, 3);
            }
            if (hh == 3) {
                draw(1, 19);
                draw(5, 19);
                draw(6, 19);
                draw(6, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 3);
                drawdou(19, 4, 9);
                drawdou(18, 1, 6);
                drawdou(17, 2, 8);
                drawdou(16, 2, 9);
                drawdou(15, 6, 1);
            }
            if (hh == 4) {
                draw(10, 19);
                draw(10, 18);
                draw(8, 19);
                draw(6, 19);
                draw(5, 19);
                draw(1, 19);
                draw(2, 19);
                drawdou(20, 1, 2);
                drawdou(21, 8, 7);
                drawdou(19, 9, 10);
                drawdou(18, 2, 8);
                drawdou(17, 2, 4);
                drawdou(16, 5, 8);
                drawdou(15, 6, 3);
            }
            if (hh == 5) {
                draw(4, 18);
                draw(4, 19);
                draw(5, 19);
                draw(6, 18); draw(6, 19);
                draw(8, 19);
                draw(9, 18);
                draw(1, 19);
                drawdou(20, 1, 9);
                drawdou(21, 2, 3);
                drawdou(19, 3, 2);
                drawdou(18, 2, 6);
                drawdou(17, 2, 9);
                drawdou(16, 2, 8);
                drawdou(15, 6, 3);
            }
            if (hh == 6) {
                draw(5, 19);
                draw(6, 19);
                draw(7, 19);
                draw(10, 19);
                draw(10, 19);
                draw(2, 19);
                draw(1, 19);
                draw(3, 18);
                drawdou(20, 1, 5);
                drawdou(21, 2, 7);
                drawdou(19, 2, 4);
                drawdou(18, 3, 5);
                drawdou(17, 2, 10);
                drawdou(16, 2, 8);
                drawdou(15, 6, 3);
            }
        }
        }
    
    document.getElementById('all').innerHTML += "  <div id='score'>";
    var i = 10;
    while (i >= 1) {
        document.getElementById('score').innerHTML += "<div class='score' style='background-color:transparent' id=sc-" + i + "></div>";
        i--;
    }
    document.getElementById('all').innerHTML += "  </div>";
    function formatnew() {
        var i = 1;
        while (i <= 3) {
            var j = 1;
            while (j <= 4) {
                document.getElementById('new' + i + '-' + j).style.backgroundColor = 'transparent';
                j++;
            }
            i++;
        }
    }


   function painttotal() {
      
       f = 1;
       ka = 0;
       kd = 0;

       keyacheck = 0;
       keydcheck = 0;
     
       if (type == 0) {
           var num = Math.floor(Math.random() * 7);
           if (num == 0) {
               typeco = 1;

           }
           if (num == 1) {
               typeco = 2;
               
     
           }
           if (num == 2) {
               typeco = 3;

           }
           if (num == 3) {
               typeco = 4;

           }
           if (num == 4) {
               typeco = 5;

           }
           if (num == 5) {
               typeco = 6;
  

           }
           if (num == 6) {
               typeco = 7;

           }

       
           type = typeco;
           action();
          
       }
       else {
           type = typeco;
           action();

       }
       choose();
           paint();
    
           function action() {
               if (type == 1) {
                   a = ["5", "0"];
                   b = ["5", "1"];
                   c = ["6", "0"];
                   d = ["6", "1"];
               }
               if (type == 2) {
                   a = ["5", "0"];
                   b = ["6", "0"];
                   c = ["7", "0"];
                   d = ["6", "1"];
               }
               if (type == 3) {
                   a = ["5", "0"];
                   b = ["6", "0"];
                   c = ["7", "0"];
                   d = ["7", "1"];
               }
               if (type == 4) {
                   a = ["5", "0"];
                   b = ["5", "1"];
                   c = ["6", "0"];
                   d = ["7", "0"];
               }
               if (type == 5) {
                   a = ["5", "1"];
                   b = ["5", "2"];
                   c = ["6", "0"];
                   d = ["6", "1"];
               }
               if (type == 6) {
                   a = ["5", "0"];
                   b = ["5", "1"];
                   c = ["6", "1"];
                   d = ["6", "2"];
               }
               if (type == 7) {
                   a = ["5", "0"];
                   b = ["5", "1"];
                   c = ["5", "2"];
                   d = ["5", "3"];
               }
           }
       function choose() {
           var num = Math.floor(Math.random() * 7);
           if (num == 0) {
               typeco = 1;
             
               formatnew();
            
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-2').style.backgroundColor = 'lightskyblue';
           }
           if (num == 1) {
               typeco = 2;
               
               formatnew();
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new3-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-2').style.backgroundColor = 'lightskyblue';
           }
           if (num == 2) {
               typeco = 3;
              
               formatnew();
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new3-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new3-2').style.backgroundColor = 'lightskyblue';
           }
           if (num == 3) {
               typeco = 4;
              
               formatnew();
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new3-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-2').style.backgroundColor = 'lightskyblue';
           }
           if (num == 4) {
               typeco = 5;
              
               formatnew();
               document.getElementById('new2-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-3').style.backgroundColor = 'lightskyblue';
           }
           if (num == 5) {
               typeco = 6;
 
               formatnew();
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new2-3').style.backgroundColor = 'lightskyblue';
           }
           if (num == 6) {
               typeco = 7;
      
               formatnew();
               document.getElementById('new1-1').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-2').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-3').style.backgroundColor = 'lightskyblue';
               document.getElementById('new1-4').style.backgroundColor = 'lightskyblue';
           }

       }
      
   }
   function cleardis() {
       var i=26;
       while (i <= 36) {
           var j = 1;
           while (j <= 4) {
               document.getElementById('dis-' + i + '-' + j).style.backgroundColor = 'transparent';
               j++;
           }
           i++;
       }
   }
   function cleardisall() {
       var i = 1;
       while (i <= 36) {
           var j = 1;
           while (j <= 4) {
               document.getElementById('dis-' + i + '-' + j).style.backgroundColor = 'transparent';
               j++;
           }
           i++;
       }
   }
   function cleardis2() {
       var i = 1;
       while (i <= 11) {
           var j = 1;
           while (j <= 4) {
               document.getElementById('dis2-' + i + '-' + j).style.backgroundColor = 'transparent';
               j++;
           }
           i++;
       }
   }
   var cho;
   var choa;
   var chob;
   var choc;
   var cho2;
   var choa2;
   var chob2;
   var choc2;
   var yy=28;
   var yya=28;
   var yyb = 28;
   var yyc = 28;
   function move() {
       if (yy == 28)
       {
           if (count % 7 == 2) cho = chdi[1];
           if (count % 7 == 3) cho = chdi[2];
           if (count % 7 == 4) cho = chdi[3];
           if (count % 7 == 5) cho = chdi[4];
           if (count % 7 == 6) cho = chdi[5];
           if (count % 7 == 0) cho = chdi[6];
           if (count % 7 == 1) cho = chdi[7];
           yy = 1;
         
       }
       else if (yy >= 1 || yy <= 27) {
           if (yya == 28) {
               if (count % 7 == 2) choa = chdi[1];
               if (count % 7 == 3) choa = chdi[2];
               if (count % 7 == 4) choa = chdi[3];
               if (count % 7 == 5) choa = chdi[4];
               if (count % 7 == 6) choa = chdi[5];
               if (count % 7 == 0) choa = chdi[6];
               if (count % 7 == 1) choa = chdi[7];
               yya = 1;
              
           }
              
           else if (yya >= 1 || yya <= 27) {
               if (yyb == 28)
               {
                   if (count % 7 == 2) chob = chdi[1];
                   if (count % 7 == 3) chob = chdi[2];
                   if (count % 7 == 4) chob = chdi[3];
                   if (count % 7 == 5) chob = chdi[4];
                   if (count % 7 == 6) chob = chdi[5];
                   if (count % 7 == 0) chob = chdi[6];
                   if (count % 7 == 1) chob = chdi[7];
                   yyb = 1;
                 
               }
               else if (yyb >= 1 || yyb <= 27) {
                   if (yyc == 28)
                   {
                       if (count % 7 == 2) choc = chdi[1];
                       if (count % 7 == 3) choc = chdi[2];
                       if (count % 7 == 4) choc = chdi[3];
                       if (count % 7 == 5) choc = chdi[4];
                       if (count % 7 == 6) choc = chdi[5];
                       if (count % 7 == 0) choc = chdi[6];
                       if (count % 7 == 1) choc = chdi[7];
                       yyc = 1;
                       
                   }
                   else if (yyc >= 1 || yyc <= 27) {
                       if (count % 7 == 2) cho = chdi[1];
                       if (count % 7 == 3) cho = chdi[2];
                       if (count % 7 == 4) cho = chdi[3];
                       if (count % 7 == 5) cho = chdi[4];
                       if (count % 7 == 6) cho = chdi[5];
                       if (count % 7 == 0) cho = chdi[6];
                       if (count % 7 == 1) cho = chdi[7];
                       yy = 1;
                      
                   }
               }
           }

       }

   }
 
   function proce() {

      
   
       if (yy <= 26) {
          
               var uu = (yy + 10);
               var m = 10;
               var n = uu;
               var ii;
               while (m>=1) {
                   ii = n - 1;
                   for (var i = 1; i <= cho; i++) {

                       document.getElementById('dis-' + n + '-' + i).style.backgroundColor = document.getElementById('dis-' + ii + '-' + i).style.backgroundColor;

                   }
                   n--;
                   m--;
               }
               var i = 1;
               while (i <= cho) {
                   if (n != 0) {
                       document.getElementById('dis-' + n + '-' + i).style.backgroundColor = 'transparent';

                   }

                   i++;

               }
               yy++;
           }
          else if(yy==27){
               var k = a2[1];
               var l = b2[1];
               var m = c2[1];
               var n = d2[1];

               document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor = 'darkslategrey';
               document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor = 'darkslategrey';
               document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor = 'darkslategrey';
               document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor = 'darkslategrey';
                                  
               var t  = 1;
               var rr=22-cho;
               while (t < rr) {
                   var h = 1;
                   while (h <= 10) {
                       var tr = t + cho;
                       document.getElementById('n2' + h + '-' + t).style.backgroundColor = document.getElementById('n2' + h + '-' + tr).style.backgroundColor;
                       h++;
                   }
                   t++;
               }
               var l=1;
               while (l <= cho) {
                   var k = 1;
                   var u = 22 - l;
                   while (k <= 10) {
                       
                       document.getElementById('n2' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                       k++;
                   }
                   l++;
               }
               
               var w = 0;
               while (w < cho) {
                   var h = 1;
                   var q = 27;
                   var r = w + 1;
                   var p = 22 - cho + w;
                   var i = 27; var chk=0;
                   while (i <= 36) {
                       if (document.getElementById('dis-' + i + '-' + r).style.backgroundColor == 'coral') {chk = 1; break; }
                       i++;
                   }
                  
                   if (chk == 1) {
                       while (h <= 10) {

                           if (document.getElementById('dis-' + q + '-' + r).style.backgroundColor == 'transparent') {
                               document.getElementById('n2' + h + '-' + p).style.backgroundColor = 'darkslategrey';
                           }

                           else document.getElementById('n2' + h + '-' + p).style.backgroundColor = 'coral';
                           h++;
                           q++;
                       }
                   }
                   w++;
               }
               cleardis();
               painttotal2();
               yy++;
           }
   
       }
   function procea() {
      
       if (yya <= 26) {

           var uu = (yya + 10);
           var m = 10;
           var n = uu;
           var ii;
           while (m >= 1) {
               ii = n - 1;
               for (var i = 1; i <= choa; i++) {

                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = document.getElementById('dis-' + ii + '-' + i).style.backgroundColor;

               }
               n--;
               m--;
           }
           var i = 1;
           while (i <= choa) {
               if (n != 0) {
                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = 'transparent';

               }

               i++;

           }
           yya++;
       }
       else if (yya == 27) {
           var k = a2[1];
           var l = b2[1];
           var m = c2[1];
           var n = d2[1];

           document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t = 1;
           var rr = 22 - choa;
           while (t < rr) {
               var h = 1;
               while (h <= 10) {
                   var tr = t + choa;
                   document.getElementById('n2' + h + '-' + t).style.backgroundColor = document.getElementById('n2' + h + '-' + tr).style.backgroundColor;
                   h++;
               }
               t++;
           }
           var l = 1;
           while (l <= choa) {
               var k = 1;
               var u = 22 - l;
               while (k <= 10) {

                   document.getElementById('n2' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l++;
           }

           var w = 0;
           while (w < choa) {
               var h = 1;
               var q = 27;
               var r = w + 1;
               var i = 27;
               var p = 22 - choa + w;
               var chk = 0;
               while (i <= 36) {
                   if (document.getElementById('dis-' + i + '-' + r).style.backgroundColor == 'coral') { chk = 1; break; }
                   i++;
               }
               if (chk == 1) {
                   while (h <= 10) {
                       if (document.getElementById('dis-' + q + '-' + r).style.backgroundColor == 'transparent') {
                           document.getElementById('n2' + h + '-' + p).style.backgroundColor = 'darkslategrey';
                       }

                       else document.getElementById('n2' + h + '-' + p).style.backgroundColor = document.getElementById('dis-' + q + '-' + r).style.backgroundColor;
                       h++;
                       q++;
                   }
                  
               }
               w++;
           }
           cleardis();
           painttotal2();
           yya++;
       }

   }
   function proceb() {

       if (yyb <= 26) {

           var uu = (yyb + 10);
           var m = 10;
           var n = uu;
           var ii;
           while (m >= 1) {
               ii = n - 1;
               for (var i = 1; i <= chob; i++) {

                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = document.getElementById('dis-' + ii + '-' + i).style.backgroundColor;

               }
               n--;
               m--;
           }
           var i = 1;
           while (i <= chob) {
               if (n != 0) {
                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = 'transparent';

               }

               i++;

           }
           yyb++;
       }
       else if (yyb == 27) {
           var k = a2[1];
           var l = b2[1];
           var m = c2[1];
           var n = d2[1];

           document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t = 1;
           var rr = 22 - chob;
           while (t < rr) {
               var h = 1;
               while (h <= 10) {
                   var tr = t + chob;
                   document.getElementById('n2' + h + '-' + t).style.backgroundColor = document.getElementById('n2' + h + '-' + tr).style.backgroundColor;
                   h++;
               }
               t++;
           }
           var l = 1;
           while (l <= chob) {
               var k = 1;
               var u = 22 - l;
               while (k <= 10) {

                   document.getElementById('n2' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l++;
           }

           var w = 0;
           while (w < chob) {
               var h = 1;
               var q = 27;
               var r = w + 1;
               var p = 22 - chob + w;
               var chk = 0;
               var i = 27;
               while (i <= 36) {
                   if (document.getElementById('dis-' + i + '-' + r).style.backgroundColor == 'coral') { chk = 1; break; }
                   i++;
               }
               if (chk == 1) {
                   while (h <= 10) {
                       if (document.getElementById('dis-' + q + '-' + r).style.backgroundColor == 'transparent') {
                           document.getElementById('n2' + h + '-' + p).style.backgroundColor = 'darkslategrey';
                       }

                       else document.getElementById('n2' + h + '-' + p).style.backgroundColor = document.getElementById('dis-' + q + '-' + r).style.backgroundColor;
                       h++;
                       q++;
                   }

                
               }
               w++;
           }
           cleardis();
           painttotal2();
           yyb++;
       }
       
   }
   function procec() {
    
       if (yyc <= 26) {

           var uu = (yyc + 10);
           var m = 10;
           var n = uu;
           var ii;
           while (m >= 1) {
               ii = n - 1;
               for (var i = 1; i <= choc; i++) {

                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = document.getElementById('dis-' + ii + '-' + i).style.backgroundColor;

               }
               n--;
               m--;
           }
           var i = 1;
           while (i <= choc) {
               if (n != 0) {
                   document.getElementById('dis-' + n + '-' + i).style.backgroundColor = 'transparent';

               }

               i++;

           }
           yyc++;
       }
       else if (yyc == 27) {
           var k = a2[1];
           var l = b2[1];
           var m = c2[1];
           var n = d2[1];

           document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t = 1;
           var rr = 22 - choc;
           while (t < rr) {
               var h = 1;
               while (h <= 10) {
                   var tr = t + choc;
                   document.getElementById('n2' + h + '-' + t).style.backgroundColor = document.getElementById('n2' + h + '-' + tr).style.backgroundColor;
                   h++;
               }
               t++;
           }
           var l = 1;
           while (l <= choc) {
               var k = 1;
               var u = 22 - l;
               while (k <= 10) {

                   document.getElementById('n2' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l++;
           }

           var w = 0;
           while (w < choc) {
               var h = 1;
               var q = 27;
               var r = w + 1;
               var p = 22 - choc + w;
               var chk = 0;
               var i = 27;
               while (i <= 36) {
                   if (document.getElementById('dis-' + i + '-' + r).style.backgroundColor == 'coral') { chk = 1; break; }
                   i++;
               }
               if (chk == 1) {
                   while (h <= 10) {
                       if (document.getElementById('dis-' + q + '-' + r).style.backgroundColor == 'transparent') {
                           document.getElementById('n2' + h + '-' + p).style.backgroundColor = 'darkslategrey';
                       }

                       else document.getElementById('n2' + h + '-' + p).style.backgroundColor = document.getElementById('dis-' + q + '-' + r).style.backgroundColor;
                       h++;
                       q++;
                   }


               }
               w++;
           }
           cleardis();
           painttotal2();
           yyc++;
       }
      
   }
   function move2(){
       if ( yy2 == 28)
       {
           if (count2 % 7 == 2) cho2 = chdi2[1];
           if (count2 % 7 == 3) cho2 = chdi2[2];
           if (count2 % 7 == 4) cho2 = chdi2[3];
           if (count2 % 7 == 5) cho2 = chdi2[4];
           if (count2 % 7 == 6) cho2 = chdi2[5];
           if (count2 % 7 == 0) cho2 = chdi2[6];
           if (count2 % 7 == 1) cho2 = chdi2[7];
           yy2 = 1;
           
       }
       else if (yy2 >= 1 || yy2 <= 27) {
           if (yya2 == 28)
          
           {
               if (count2 % 7 == 2) choa2 = chdi2[1];
               if (count2 % 7 == 3) choa2 = chdi2[2];
               if (count2 % 7 == 4) choa2 = chdi2[3];
               if (count2 % 7 == 5) choa2 = chdi2[4];
               if (count2 % 7 == 6) choa2 = chdi2[5];
               if (count2 % 7 == 0) choa2 = chdi2[6];
               if (count2 % 7 == 1) choa2 = chdi2[7];
                   yya2 = 1;
                  
               }
           
           else if (yya2 >= 1 || yya2 <= 27) {
               if (yyb2 == 28)
               {
                   if (count2 % 7 == 2) chob2 = chdi2[1];
                   if (count2 % 7 == 3) chob2 = chdi2[2];
                   if (count2 % 7 == 4) chob2 = chdi2[3];
                   if (count2 % 7 == 5) chob2 = chdi2[4];
                   if (count2 % 7 == 6) chob2 = chdi2[5];
                   if (count2 % 7 == 0) chob2 = chdi2[6];
                   if (count2 % 7 == 1) chob2 = chdi2[7];
                   yyb2 = 1;
                   
               }
               else if (yyb2 >= 1 || yyb2 <= 27) {
                   if (yyc2 == 28)
                   {
                       if (count2 % 7 == 2) choc2 = chdi2[1];
                       if (count2 % 7 == 3) choc2 = chdi2[2];
                       if (count2 % 7 == 4) choc2 = chdi2[3];
                       if (count2 % 7 == 5) choc2 = chdi2[4];
                       if (count2 % 7 == 6) choc2 = chdi2[5];
                       if (count2 % 7 == 0) choc2 = chdi2[6];
                       if (count2 % 7 == 1) choc2 = chdi2[7];
                       yyc2 = 1;
                       
                   }
                   else if (yyc2 >= 1 || yyc2 <= 27) {
                       if (count2 % 7 == 2) choc2 = chdi2[1];
                       if (count2 % 7 == 3) choc2 = chdi2[2];
                       if (count2 % 7 == 4) choc2 = chdi2[3];
                       if (count2 % 7 == 5) choc2 = chdi2[4];
                       if (count2 % 7 == 6) choc2 = chdi2[5];
                       if (count2 % 7 == 0) choc2 = chdi2[6];
                       if (count2 % 7 == 1) choc2 = chdi2[7];
                       yyc2 = 1;
                   
                   }
               }
           }
          
       }
       
   }
   setInterval(proce, 40);
   setInterval(proce2, 40);
   setInterval(procea, 40);
   setInterval(procea2, 40);
   setInterval(proceb, 40);
   setInterval(proceb2, 40);
   setInterval(procec, 40);
   setInterval(procec2, 40);
   var yy2=28;
   var yya2=28;
   var yyb2=28;
   var yyc2 = 28;
   function proce2() {
      
      
       if (yy2 <= 26) {
           
           var uu2 = 28 - yy2;
               var m2 = 10;
          
               var ii2;
              
               var n2 = uu2;
               while (m2 >= 1) {
                   var i = 1;
               while(i <= cho2) {
                       ii2 = n2 - 1;
                       document.getElementById('dis2-' + ii2 + '-' + i).style.backgroundColor = document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor;
                   
                       i++;
                      
               }

               m2--;
               n2++;
             
               }
               var i = 1;
               while (i <= cho2) {
                   if (n2 != 37) {
                       document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor = 'transparent';

                     
                   }
                   i++;
               }
               yy2++;
               }
             
               if (yy2 == 27) {
                   var k = a[1];
                   var l = b[1];
                   var m = c[1];
                   var n = d[1];

                   document.getElementById('n' + a[0] + '-' + k).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + b[0] + '-' + l).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + c[0] + '-' + m).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + d[0] + '-' + n).style.backgroundColor = 'darkslategrey';

                   var t2 = 1;
                   var rr2 = 22 - cho2;
                   while (t2 < rr2) {
                       var h = 1;
                       while (h <= 10) {
                           var tr2 = t2 + cho2;
                           document.getElementById('n' + h + '-' + t2).style.backgroundColor = document.getElementById('n' + h + '-' + tr2).style.backgroundColor;
                           h++;
                           
                       }
                       t2++;
                   }
                   var l2 = 1;
                   while (l2 <= cho2) {
                       var k = 1;
                       var u = 22 - l2;
                       while (k <= 10) {

                           document.getElementById('n' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                           k++;
                       }
                       l2++;
                   }

                   var w2 = 0;
                   while (w2 < cho2) {
                       var h2 = 1;
                       var p2 = 21 - w2;
                       var r2 = w2 + 1;
                       var chk2 = 0;
                       var i = 1;
                       while (i <= 10) {
                           if (document.getElementById('dis2-' + i + '-' + r2).style.backgroundColor == 'coral') { chk2 = 1; break; }
                           i++;
                       }
                       if (chk2 == 1) {
                           while (h2 <= 10) {
                               if (document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor == 'transparent') {
                                   document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = 'darkslategrey';
                               }

                               else
                                   document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor;
                               h2++;
                            
                           }
                         
                       }
                       w2++;
                  
                   }
                   cleardis2();
                   painttotal();
                   yy2++;
               }
             
           }
   function procea2() {
      
     
       if (yya2 <= 26) {

           var uu2 = 28 - yya2;
           var m2 = 10;

           var ii2;

           var n2 = uu2;
           while (m2 >= 1) {
               var i = 1;
               while (i <= choa2) {
                   ii2 = n2 - 1;
                   document.getElementById('dis2-' + ii2 + '-' + i).style.backgroundColor = document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor;

                   i++;

               }

               m2--;
               n2++;

           }
           var i = 1;
           while (i <= choa2) {
               if (n2 != 37) {
                   document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor = 'transparent';


               }
               i++;
           }
           yya2++;
       }

       if (yya2 == 27) {
           var k = a[1];
           var l = b[1];
           var m = c[1];
           var n = d[1];

           document.getElementById('n' + a[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + b[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + c[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + d[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t2 = 1;
           var rr2 = 22 - choa2;
           while (t2 < rr2) {
               var h = 1;
               while (h <= 10) {
                   var tr2 = t2 + choa2;
                   document.getElementById('n' + h + '-' + t2).style.backgroundColor = document.getElementById('n' + h + '-' + tr2).style.backgroundColor;
                   h++;

               }
               t2++;
           }
           var l2 = 1;
           while (l2 <= choa2) {
               var k = 1;
               var u = 22 - l2;
               while (k <= 10) {

                   document.getElementById('n' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l2++;
           }

           var w2 = 0;
           while (w2 < choa2) {
               var h2 = 1;
               var p2 = 21 - w2;
               var r2 = w2 + 1;
               var chk2 = 0;
               var i = 1;
               while (i <= 10) {
                   if (document.getElementById('dis2-' + i + '-' + r2).style.backgroundColor == 'coral') { chk2 = 1; break; }
                   i++;
               }
               if (chk2 == 1) {
                   while (h2 <= 10) {
                       if (document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor == 'transparent') {
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = 'darkslategrey';
                       }

                       else
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor;
                       h2++;

                   }
                  
               }
               w2++;
           }
           cleardis2();
           painttotal();
           yya2++;
       }
   
   }
   function proceb2() {
    
       
       if (yyb2 <= 26) {

           var uu2 = 28 - yyb2;
           var m2 = 10;

           var ii2;

           var n2 = uu2;
           while (m2 >= 1) {
               var i = 1;
               while (i <= chob2) {
                   ii2 = n2 - 1;
                   document.getElementById('dis2-' + ii2 + '-' + i).style.backgroundColor = document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor;

                   i++;

               }

               m2--;
               n2++;

           }
           var i = 1;
           while (i <= chob2) {
               if (n2 != 37) {
                   document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor = 'transparent';


               }
               i++;
           }
           yyb2++;
       }

       if (yyb2 == 27) {
           var k = a[1];
           var l = b[1];
           var m = c[1];
           var n = d[1];

           document.getElementById('n' + a[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + b[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + c[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + d[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t2 = 1;
           var rr2 = 22 - chob2;
           while (t2 < rr2) {
               var h = 1;
               while (h <= 10) {
                   var tr2 = t2 + chob2;
                   document.getElementById('n' + h + '-' + t2).style.backgroundColor = document.getElementById('n' + h + '-' + tr2).style.backgroundColor;
                   h++;

               }
               t2++;
           }
           var l2 = 1;
           while (l2 <= chob2) {
               var k = 1;
               var u = 22 - l2;
               while (k <= 10) {

                   document.getElementById('n' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l2++;
           }

           var w2 = 0;
           while (w2 < chob2) {
               var h2 = 1;
               var p2 = 21 - w2;
               var r2 = w2 + 1;
               var chk2 = 0;
               var i = 1;
               while (i <= 10) {
                   if (document.getElementById('dis2-' + i + '-' + r2).style.backgroundColor == 'coral') { chk2 = 1; break; }
                   i++;
               }
               if (chk2 == 1) {
                   while (h2 <= 10) {
                       if (document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor == 'transparent') {
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = 'darkslategrey';
                       }

                       else
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor;
                       h2++;

                   }
                  
               }
               w2++;
           }
           cleardis2();
           painttotal();
           yyb2++;
       }
       
   }
   function procec2() {
      
       if (yyc2 <= 26) {

           var uu2 = 28 - yyc2;
           var m2 = 10;

           var ii2;

           var n2 = uu2;
           while (m2 >= 1) {
               var i = 1;
               while (i <= choc2) {
                   ii2 = n2 - 1;
                   document.getElementById('dis2-' + ii2 + '-' + i).style.backgroundColor = document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor;

                   i++;

               }

               m2--;
               n2++;

           }
           var i = 1;
           while (i <= choc2) {
               if (n2 != 37) {
                   document.getElementById('dis2-' + n2 + '-' + i).style.backgroundColor = 'transparent';


               }
               i++;
           }
           yyc2++;
       }

       if (yyc2 == 27) {
           var k = a[1];
           var l = b[1];
           var m = c[1];
           var n = d[1];

           document.getElementById('n' + a[0] + '-' + k).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + b[0] + '-' + l).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + c[0] + '-' + m).style.backgroundColor = 'darkslategrey';
           document.getElementById('n' + d[0] + '-' + n).style.backgroundColor = 'darkslategrey';

           var t2 = 1;
           var rr2 = 22 - choc2;
           while (t2 < rr2) {
               var h = 1;
               while (h <= 10) {
                   var tr2 = t2 + choc2;
                   document.getElementById('n' + h + '-' + t2).style.backgroundColor = document.getElementById('n' + h + '-' + tr2).style.backgroundColor;
                   h++;

               }
               t2++;
           }
           var l2 = 1;
           while (l2 <= choc2) {
               var k = 1;
               var u = 22 - l2;
               while (k <= 10) {

                   document.getElementById('n' + k + '-' + u).style.backgroundColor = 'darkslategrey';
                   k++;
               }
               l2++;
           }

           var w2 = 0;
           while (w2 < choc2) {
               var h2 = 1;
               var p2 = 21 - w2;
               var r2 = w2 + 1;
               var chk2 = 0;
               var i = 1;
               while (i <= 10) {
                   if (document.getElementById('dis2-' + i + '-' + r2).style.backgroundColor == 'coral') { chk2 = 1; break; }
                   i++;
               }
               if (chk2 == 1) {
                   while (h2 <= 10) {
                       if (document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor == 'transparent') {
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = 'darkslategrey';
                       }

                       else
                           document.getElementById('n' + h2 + '-' + p2).style.backgroundColor = document.getElementById('dis2-' + h2 + '-' + r2).style.backgroundColor;
                       h2++;

                   }

               }
               w2++;
           }
           cleardis2();
           painttotal();
           yyc2++;
       }
    
   }

   function exchange() {
       var j = 1;
       var num=0;
       var rt = 0;
       var ticn = 0;
       chdi[0] = 0;
       while (j <= 21) {
           var i = 1;
           while (i <= 10) {
               if (document.getElementById('n' + i + '-' + j).style.backgroundColor == 'darkslategrey') { ticn = 1; break; }
               i++;
               }
           if (ticn == 0) num++;
           ticn = 0;
           j++;
       }
       j = 1;
       ticn = 0;
       while (j <= 21) {
           var i = 1;
           ticn = 0;
        
               while (i <= 10) {

                   if (document.getElementById('n' + i + '-' + j).style.backgroundColor == 'darkslategrey') { ticn = 1; break; }
                   i++;
               }

               if (ticn == 0) {
                   chdi[0]++;
                   if (j == a[1]) document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                  
                   if (j == b[1]) document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                   if (j == c[1]) document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                   if (j == d[1]) document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';
                   if (num == 1) {
                       var io = j;
                       var tr
                       while (io != 1) {
                           var p = 1;
                           while (p <= 10) {
                               tr = io - 1;
                               document.getElementById('n' + p + '-' + io).style.backgroundColor = document.getElementById('n' + p + '-' + tr).style.backgroundColor;
                               p++;
                           }

                            io--;
                       }
                   }    
                   else {
                       document.getElementById('display').style.opacity = 0.6;
                       document.getElementById('display').style.zIndex = 10;
                       document.getElementById('display2').style.opacity = 0.5;
                       document.getElementById('display2').style.zIndex = 0;
                     

                       var o = 1;
                       while (o <= 10) {
                           
                           if (document.getElementById('n' + o + "-" + j).style.backgroundColor != 'darkslategrey') 
                               document.getElementById('dis-' + o + "-" + chdi[0]).style.backgroundColor = 'coral';
                              
                           else document.getElementById('dis-' + o + "-" + chdi[0]).style.backgroundColor = 'transparent';
                           o++;
                       }
                       
                       var io = j;
                       var tr;
                       while (io != 1) {
                           var p = 1;
                           while (p <= 10) {
                               tr = io - 1;
                               document.getElementById('n' + p + '-' + io).style.backgroundColor = document.getElementById('n' + p + '-' + tr).style.backgroundColor;

                               p++;
                           }

                           io--;
                       }

                    

                   }
               
           }
           
           j++;
       }

       painttotal();
       if (chdi[0] >= 2) {
           if (count % 7 == 1) chdi[1] = chdi[0];
           if (count % 7 == 2) chdi[2] = chdi[0];
           if (count % 7 == 3) chdi[3] = chdi[0];
           if (count % 7 == 4) chdi[4] = chdi[0];
           if (count % 7 == 5) chdi[5] = chdi[0];
           if (count % 7 == 6) chdi[6] = chdi[0];
           if (count % 7 == 0) chdi[7] = chdi[0];
               
               
           count++;
               move();
       }
      
   }
   function exchange2() {
       var j2 = 1;
       var rt2 = 0;
       var ticn2 = 0;
       var num2 = 0;
       chdi2[0] = 0;

       while (j2 <= 21) {
           var i = 1;
           while (i <= 10) {
               if (document.getElementById('n2' + i + '-' + j2).style.backgroundColor == 'darkslategrey') { ticn2 = 1; break; }
               i++;
           }
           if (ticn2 == 0) num2++;
           ticn2 = 0;
           j2++;
       }
       j2 = 1;
       ticn2 = 1;
       while (j2 <= 21) {
           var i = 1;
           ticn2 = 0;
        
               while (i <= 10) {

                   if (document.getElementById('n2' + i + '-' + j2).style.backgroundColor == 'darkslategrey') { ticn2 = 1; break; }
                   i++;
               }
               if (ticn2 == 0) {
                   chdi2[0]++;
                   if (j2 == a2[1]) document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';

                   if (j2 == b2[1]) document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                   if (j2 == c2[1]) document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                   if (j2 == d2[1]) document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';
                   if (num2 == 1) {
                       var io = j2;

                       while (io != 1) {
                           var p = 1;
                           while (p <= 10) {
                               var tr = io - 1;
                               document.getElementById('n2' + p + '-' + io).style.backgroundColor = document.getElementById('n2' + p + '-' + tr).style.backgroundColor;
                               p++;
                           }

                           io--;
                       }
                   }
                   else {
                       document.getElementById('display').style.opacity = 0.5;
                       document.getElementById('display').style.zIndex = 0;
                       document.getElementById('display2').style.opacity = 0.6;
                       document.getElementById('display2').style.zIndex = 10;



                       var o = 1;
                       while (o <= 10) {

                           var ll = 26 + o;
                           if (document.getElementById('n2' + o + "-" + j2).style.backgroundColor != 'darkslategrey')
                               document.getElementById('dis2-' + ll + "-" + chdi2[0]).style.backgroundColor = 'coral';
                           else document.getElementById('dis2-' + ll + "-" + chdi2[0]).style.backgroundColor = 'transparent';
                           o++;
                       }

                       var io = j2;

                       while (io != 1) {
                           var p = 1;
                           while (p <= 10) {
                               var tr = io - 1;
                               document.getElementById('n2' + p + '-' + io).style.backgroundColor = document.getElementById('n2' + p + '-' + tr).style.backgroundColor;
                               p++;
                           }

                           io--;
                       }

                   }

               }

           
           j2++;
       }
       painttotal2();
       if (chdi2[0] >= 2) {
           if (count2 % 7 == 1) chdi2[1] = chdi2[0];
           if (count2 % 7 == 2) chdi2[2] = chdi2[0];
           if (count2 % 7 == 3) chdi2[3] = chdi2[0];
           if (count2 % 7 == 4) chdi2[4] = chdi2[0];
           if (count2 % 7 == 5) chdi2[5] = chdi2[0];
           if (count2 % 7 == 6) chdi2[6] = chdi2[0];
           if (count2 % 7 == 0) chdi2[7] = chdi2[0];
           count2++;
           move2();
       }
     
   }
   function paint() {
           a[0] = Number(a[0]);
           b[0] = Number(b[0]);
           c[0] = Number(c[0]);
           d[0] = Number(d[0]);
           a[1] = Number(a[1]);
           b[1] = Number(b[1]);
           c[1] = Number(c[1]);
           d[1] = Number(d[1]);
           
           if (a[1] == 21 || b[1] == 21 || c[1] == 21 || d[1] == 21) {
               
               if (document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor == 'lightskyblue') {
                   document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
               }
               exchange();
           }

           else if (a[0] > 0 && a[0] <= 10 && b[0] > 0 && b[0] <= 10 && c[0] > 0 && c[0] <= 10 && d[0] > 0 && d[0] <= 10 && a[1] > 0 && a[1] <= 21 && b[1] > 0 && b[1] <= 21 && c[1] > 0 && c[1] <= 21 && d[1] > 0 && d[1] <= 21) {
         
               if (a[0] == b[0] && a[1]+1 == b[1] || a[0]  == c[0] && a[1]+1 == c[1] || a[0]  == d[0] && a[1]+1 == d[1]) e[0] = 1;
               else e[0] = 0;
               if (b[0]  == a[0] && b[1]+1 == a[1] || b[0]  == c[0] && b[1]+1 == c[1] || b[0]  == d[0] && b[1]+1 == d[1]) e[1] = 1;
               else e[1] = 0;
               if (c[0]  == a[0] && c[1]+1 == a[1] || c[0]  == b[0] && c[1]+1 == b[1] || c[0]  == d[0] && c[1]+1 == d[1]) e[2] = 1;
               else e[2] = 0;
               if (d[0] == a[0] && d[1]+1 == a[1] || d[0]  == b[0] && d[1]+1 == b[1] || d[0]  == c[0] && d[1]+1 == c[1]) e[3] = 1;
               else e[3] = 0;
               var k=a[1]+1;
               var l = b[1]+1;
               var m = c[1]+ 1;
               var n = d[1]+1;
               var condit='';
               tf = 0;
               for (

                   var mn = 0; mn < 4; mn++) {
                   if (e[mn] == 0) {
                      
                       if (mn == 0) { if (document.getElementById('n' + a[0] + '-' + k).style.backgroundColor != 'darkslategrey') tf=1; }
                       if (mn == 1) {if (document.getElementById('n' + b[0] + '-' + l).style.backgroundColor != 'darkslategrey') tf = 1;}
                       if (mn == 2) {if (document.getElementById('n' + c[0] + '-' + m).style.backgroundColor != 'darkslategrey') tf = 1;}
                       if (mn == 3) { if (document.getElementById('n' + d[0] + '-' + n).style.backgroundColor != 'darkslategrey') tf = 1; }

                   }
                
               }
               if (tf==0) {
                   
                   if (flag == 0) {
                       document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';
                   }
                   flag = 0;
                   a[1]++;
                   b[1]++;
                   c[1]++;
                   d[1]++;
                   if (a[1] <= 21 && b[1] <= 21 && c[1] <= 21 && d[1] <= 21) {
                       document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
                      
                   }
               }
               else {
                   document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
                 
                   painttotal();
               }
           }
           else {
               a[1] = Number(a[1]) + 1;
               b[1] = Number(b[1]) + 1;
               c[1] = Number(c[1]) + 1;
               d[1] = Number(d[1]) + 1;
               if (document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor != 'darkslategrey') {
                   document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
                   yy = 28;
                   yya = 28;
                   yyb = 28;
                   yyc = 28;
                   yya2 = 28;
                   yyb2 = 28;
                   yy2 = 28;
                   yyc2 = 28;
                   if (score == 0) score2++;
                   else score--;
                   clearInterval(proce);
                   clearInterval(proce2);
                   cleardisall();
                   clearsco();
                   var i = 1;
                   if(score!=0 && score!=11){
                       while (i <= score) {
                           if(i%2==0)
                               document.getElementById('sc-' + i).style.backgroundColor = 'pink';
                           else document.getElementById('sc-' + i).style.backgroundColor = 'aqua';
                       
                           i++;
                       }
                   }
                   var j = 1;
                   if (score2 != 0 && score2!=11) {
                       while (j <= score2) {
                           if (j % 2 == 0)
                               document.getElementById('sc2-' + j).style.backgroundColor = 'pink';
                           else document.getElementById('sc2-' + j).style.backgroundColor = 'aqua';
                           
                           j++;
                       }
                   }
                   ka = 0;
                   kd = 0;
                   ka2 = 0;
                   kd2=0
                   format();
                   format2();
                   painttotal();
                   painttotal2();
                   alert('Player2 Won!');
                  
               }
               else {
                   document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                   document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
                   flag = 0;
               }
           }
           
       }

       var i = 1;
       while (i <= 10) {
           var j = 1;
           while (j <= 21) {
               if (j == 1) document.getElementById('all2').innerHTML += "<div class='colum'  id='n2" + i + "'>";
               document.getElementById('n2' + i).innerHTML += "<div class='pic' style='background-color:darkslategrey' id=n2" + i + "-" + j + "></div>";

               j++;
           }
           if (j == 21) document.getElementById('all2').innerHTML += "</div>";
           i++;
       }

       function format2() {
           var i = 1;
           while (i <= 10) {
               var j = 1;
               while (j <= 21) {
                   document.getElementById('n2' + i + '-' + j).style.backgroundColor = 'darkslategrey';
                   j++;
               }
               i++;
           }
           if (score2 == 0 ) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                   draw2(1, 21);
                   draw2(2, 21);
                   draw2(3, 21);
                   draw2(4, 21);
                   draw2(7, 21);
                   draw2(7, 20);
                   draw2(4, 20);
                   draw2(10, 21);
               }
               if (hh == 1) {
                   draw2(3, 20);
                   draw2(3, 21);
                   draw2(4, 20);
                   draw2(6, 21);
                   draw2(7, 21);
                   draw2(9, 21);
                   draw2(7, 20);
               }
               if (hh == 2) {
                   draw2(10, 21);
                   draw2(10, 20);
                   draw2(9, 20);
                   draw2(5, 21);
                   draw2(5, 20);
                   draw2(2, 21);
                   draw2(3, 20);
               }
               if (hh == 3) {
                   draw2(1, 21);
                   draw2(5, 21);
                   draw2(6, 21);
                   draw2(6, 20);

               }
               if (hh == 4) {
                   draw2(10, 21);
                   draw2(10, 20);
                   draw2(8, 21);
                   draw2(6, 21);
                   draw2(5, 21);
                   draw2(1, 21);
                   draw2(2, 21);
               }
               if (hh == 5) {
                   draw2(4, 20);
                   draw2(4, 21);
                   draw2(5, 21);
                   draw2(6, 20); draw2(6, 21);
                   draw2(8, 21);
                   draw2(9, 20);
                   draw2(1, 21);
               }
               if (hh == 6) {
                   draw2(5, 21);
                   draw2(6, 21);
                   draw2(7, 21);
                   draw2(10, 20);
                   draw2(10, 21);
                   draw2(2, 21);
                   draw2(1, 21);
                   draw2(3, 20);
               }
           }
           if (score2 == 1) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                  
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
               }
               if (hh == 1) {
                  
                   drawdou2(20, 2, 9);
                   drawdou2(21, 6, 4);
               }
               if (hh == 2) {
                 
                   drawdou2(20, 1, 3);
                   drawdou2(21, 2, 10);
               }
               if (hh == 3) {
                
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 3);
               }
               if (hh == 4) {
                  
                   drawdou2(20, 1, 2);
                   drawdou2(21, 8, 7);
               }
               if (hh == 5) {
                   
                   drawdou2(20, 1, 9);
                   drawdou2(21, 2, 3);
               }
               if (hh == 6) {
                  
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
               }
           }
           if (score2 == 2) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                 
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 3, 6);
               }
               if (hh == 1) {
                 
                   drawdou2(20, 2, 9);
                   drawdou2(21, 6, 4);
                   drawdou2(19, 7, 8);
               }
               if (hh == 2) {
                 
                   drawdou2(20, 1, 3);
                   drawdou2(21, 2, 10);
                   drawdou2(19, 3, 6);
               }
               if (hh == 3) {
                 
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 4, 9);
               }
               if (hh == 4) {
                  
                   drawdou2(20, 1, 2);
                   drawdou2(21, 8, 7);
                   drawdou2(19, 9, 10);
               }
               if (hh == 5) {
                   
                   drawdou2(20, 1, 9);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 3, 2);
               }
               if (hh == 6) {
                
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 2, 4);
               }
           }
           if (score2 == 3) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                   draw2(1, 19);
                   draw2(2, 19);
                   draw2(3, 19);
                   draw2(4, 19);
                   draw2(7, 19);
                   draw2(7, 19);
                   draw2(4, 19);
                   draw2(10, 19);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 2, 8);
               }
               if (hh == 1) {
                   draw2(3, 18);
                   draw2(3, 19);
                   draw2(4, 18);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(9, 19);
                   draw2(7, 19);
                   drawdou2(20, 2, 9);
                   drawdou2(21, 6, 4);
                   drawdou2(19, 7, 8);
                   drawdou2(18, 1, 6);
               }
               if (hh == 2) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(9, 18);
                   draw2(5, 19);
                   draw2(5, 18);
                   draw2(2, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 3);
                   drawdou2(21, 2, 10);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 3, 10);
               }
               if (hh == 3) {
                   draw2(1, 19);
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(6, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 4, 9);
                   drawdou2(18, 1, 6);
               }
               if (hh == 4) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(8, 19);
                   draw2(6, 19);
                   draw2(5, 19);
                   draw2(1, 19);
                   draw2(2, 19);
                   drawdou2(20, 1, 2);
                   drawdou2(21, 8, 7);
                   drawdou2(19, 9, 10);
                   drawdou2(18, 2, 8);
               }
               if (hh == 5) {
                   draw2(4, 18);
                   draw2(4, 19);
                   draw2(5, 19);
                   draw2(6, 18); draw2(6, 19);
                   draw2(8, 19);
                   draw2(9, 18);
                   draw2(1, 19);
                   drawdou2(20, 1, 9);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 3, 2);
                   drawdou2(18, 2, 6);
               }
               if (hh == 6) {
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(10, 19);
                   draw2(10, 19);
                   draw2(2, 19);
                   draw2(1, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 2, 4);
                   drawdou2(18, 3, 5);
               }
           }
           if (score2 == 4) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                   draw2(1, 19);
                   draw2(2, 19);
                   draw2(3, 19);
                   draw2(4, 19);
                   draw2(7, 19);
                   draw2(7, 19);
                   draw2(4, 19);
                   draw2(10, 19);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 2, 8);
                   drawdou2(17, 1, 8);
               }
               if (hh == 1) {
                   draw2(3, 18);
                   draw2(3, 19);
                   draw2(4, 18);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(9, 19);
                   draw2(7, 19);
                   drawdou2(20, 2, 9);
                   drawdou2(21, 6, 4);
                   drawdou2(19, 7, 8);
                   drawdou2(18, 1, 6);
                   drawdou2(17, 2, 10);
               }
               if (hh == 2) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(9, 18);
                   draw2(5, 19);
                   draw2(5, 18);
                   draw2(2, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 3);
                   drawdou2(21, 2, 10);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 3, 10);
                   drawdou2(17, 6, 1);
               }
               if (hh == 3) {
                   draw2(1, 19);
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(6, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 4, 9);
                   drawdou2(18, 1, 6);
                   drawdou2(17, 2, 8);
               }
               if (hh == 4) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(8, 19);
                   draw2(6, 19);
                   draw2(5, 19);
                   draw2(1, 19);
                   draw2(2, 19);
                   drawdou2(20, 1, 2);
                   drawdou2(21, 8, 7);
                   drawdou2(19, 9, 10);
                   drawdou2(18, 2, 8);
                   drawdou2(17, 2, 4);
               }
               if (hh == 5) {
                   draw2(4, 18);
                   draw2(4, 19);
                   draw2(5, 19);
                   draw2(6, 18); draw2(6, 19);
                   draw2(8, 19);
                   draw2(9, 18);
                   draw2(1, 19);
                   drawdou2(20, 1, 9);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 3, 2);
                   drawdou2(18, 2, 6);
                   drawdou2(17, 2, 9);
               }
               if (hh == 6) {
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(10, 19);
                   draw2(10, 19);
                   draw2(2, 19);
                   draw2(1, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 2, 4);
                   drawdou2(18, 3, 5);
                   drawdou2(17, 2, 10);
               }
           }
           if (score2 >= 5) {
               var hh = Math.floor(Math.random() * 7);
               if (hh == 0) {
                   draw2(1, 19);
                   draw2(2, 19);
                   draw2(3, 19);
                   draw2(4, 19);
                   draw2(7, 19);
                   draw2(7, 19);
                   draw2(4, 19);
                   draw2(10, 19);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 2, 8);
                   drawdou2(17, 1, 8);
                   drawdou2(16, 2, 8);
                   drawdou2(15, 6, 3);
               }
               if (hh == 1) {
                   draw2(3, 18);
                   draw2(3, 19);
                   draw2(4, 18);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(9, 19);
                   draw2(7, 19);
                   drawdou2(20, 2, 9);
                   drawdou2(21, 6, 4);
                   drawdou2(19, 7, 8);
                   drawdou2(18, 1, 6);
                   drawdou2(17, 2, 10);
                   drawdou2(16, 2, 3);
                   drawdou2(15, 6, 8);
               }
               if (hh == 2) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(9, 18);
                   draw2(5, 19);
                   draw2(5, 18);
                   draw2(2, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 3);
                   drawdou2(21, 2, 10);
                   drawdou2(19, 3, 6);
                   drawdou2(18, 3, 10);
                   drawdou2(17, 6, 1);
                   drawdou2(16, 1, 3);
                   drawdou2(15, 8, 3);
               }
               if (hh == 3) {
                   draw2(1, 19);
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(6, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 4, 9);
                   drawdou2(18, 1, 6);
                   drawdou2(17, 2, 8);
                   drawdou2(16, 2, 9);
                   drawdou2(15, 6, 1);
               }
               if (hh == 4) {
                   draw2(10, 19);
                   draw2(10, 18);
                   draw2(8, 19);
                   draw2(6, 19);
                   draw2(5, 19);
                   draw2(1, 19);
                   draw2(2, 19);
                   drawdou2(20, 1, 2);
                   drawdou2(21, 8, 7);
                   drawdou2(19, 9, 10);
                   drawdou2(18, 2, 8);
                   drawdou2(17, 2, 4);
                   drawdou2(16, 5, 8);
                   drawdou2(15, 6, 3);
               }
               if (hh == 5) {
                   draw2(4, 18);
                   draw2(4, 19);
                   draw2(5, 19);
                   draw2(6, 18); draw2(6, 19);
                   draw2(8, 19);
                   draw2(9, 18);
                   draw2(1, 19);
                   drawdou2(20, 1, 9);
                   drawdou2(21, 2, 3);
                   drawdou2(19, 3, 2);
                   drawdou2(18, 2, 6);
                   drawdou2(17, 2, 9);
                   drawdou2(16, 2, 8);
                   drawdou2(15, 6, 3);
               }
               if (hh == 6) {
                   draw2(5, 19);
                   draw2(6, 19);
                   draw2(7, 19);
                   draw2(10, 19);
                   draw2(10, 19);
                   draw2(2, 19);
                   draw2(1, 19);
                   draw2(3, 18);
                   drawdou2(20, 1, 5);
                   drawdou2(21, 2, 7);
                   drawdou2(19, 2, 4);
                   drawdou2(18, 3, 5);
                   drawdou2(17, 2, 10);
                   drawdou2(16, 2, 8);
                   drawdou2(15, 6, 3);
               }
           }
       }

       function formatnew2() {
           var i = 1;

           while (i <= 3) {
               var j = 1;
               while (j <= 4) {
                   document.getElementById('new2' + i + '-' + j).style.backgroundColor = 'transparent';
                   j++;
               }
               i++;
           }
       }


       function painttotal2() {


           f2 = 1;
    
           ka2 = 0;
           kd2 = 0;
           keya2check = 0;
           keyd2check = 0;
           if (type2 == 0) {
               var num = Math.floor(Math.random() * 7);
               if (num == 0) {
                   typeco2 = 1;

               }
               if (num == 1) {
                   typeco2 = 2;


               }
               if (num == 2) {
                   typeco2 = 3;

               }
               if (num == 3) {
                   typeco2 = 4;

               }
               if (num == 4) {
                   typeco2 = 5;

               }
               if (num == 5) {
                   typeco2 = 6;


               }
               if (num == 6) {
                   typeco2 = 7;

               }


               type2 = typeco2;
               action2();

           }
           else {
               type2 = typeco2;
               action2();

           }
           choose2();
           paint2();
       }
           function action2() {
               if (type2 == 1) {
                   a2 = ["5", "0"];
                   b2 = ["5", "1"];
                   c2 = ["6", "0"];
                   d2 = ["6", "1"];
               }
               if (type2 == 2) {
                   a2 = ["5", "0"];
                   b2 = ["6", "0"];
                   c2 = ["7", "0"];
                   d2 = ["6", "1"];
               }
               if (type2 == 3) {
                   a2 = ["5", "0"];
                   b2 = ["6", "0"];
                   c2 = ["7", "0"];
                   d2 = ["7", "1"];
               }
               if (type2 == 4) {
                   a2 = ["5", "0"];
                   b2 = ["5", "1"];
                   c2 = ["6", "0"];
                   d2 = ["7", "0"];
               }
               if (type2 == 5) {
                   a2 = ["5", "1"];
                   b2 = ["5", "2"];
                   c2 = ["6", "0"];
                   d2 = ["6", "1"];
               }
               if (type2 == 6) {
                   a2 = ["5", "0"];
                   b2 = ["5", "1"];
                   c2 = ["6", "1"];
                   d2 = ["6", "2"];
               }
               if (type2 == 7) {
                   a2 = ["5", "0"];
                   b2 = ["5", "1"];
                   c2 = ["5", "2"];
                   d2 = ["5", "3"];
               }
           }
           function choose2() {
               var num = Math.floor(Math.random() * 7);
               if (num == 0) {
                   typeco2 = 1;

                   formatnew2();

                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-2').style.backgroundColor = 'lightskyblue';
               }
               if (num == 1) {
                   typeco2 = 2;

                   formatnew2();
                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new23-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-2').style.backgroundColor = 'lightskyblue';
               }
               if (num == 2) {
                   typeco2 = 3;

                   formatnew2();
                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new23-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new23-2').style.backgroundColor = 'lightskyblue';
               }
               if (num == 3) {
                   typeco2 = 4;
                   formatnew2();
                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new23-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-2').style.backgroundColor = 'lightskyblue';
               }
               if (num == 4) {
                   typeco2 = 5;

                   formatnew2();
                   document.getElementById('new22-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-3').style.backgroundColor = 'lightskyblue';
               }
               if (num == 5) {
                   typeco2 = 6;

                   formatnew2();
                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new22-3').style.backgroundColor = 'lightskyblue';
               }
               if (num == 6) {
                   typeco2 = 7;
                   formatnew2();
                   document.getElementById('new21-1').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-2').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-3').style.backgroundColor = 'lightskyblue';
                   document.getElementById('new21-4').style.backgroundColor = 'lightskyblue';
               }

           }



           function paint2() {
               a2[0] = Number(a2[0]);
               b2[0] = Number(b2[0]);
               c2[0] = Number(c2[0]);
               d2[0] = Number(d2[0]);
               a2[1] = Number(a2[1]);
               b2[1] = Number(b2[1]);
               c2[1] = Number(c2[1]);
               d2[1] = Number(d2[1]);
             
               if (a2[1] == 21 || b2[1] == 21 || c2[1] == 21 || d2[1] == 21) {
       
                   if (document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor == 'lightskyblue' && document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor == 'lightskyblue') {
                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';
                   }

            
                   painttotal2();
               }

               else if (a2[0] > 0 && a2[0] <= 10 && b2[0] > 0 && b2[0] <= 10 && c2[0] > 0 && c2[0] <= 10 && d2[0] > 0 && d2[0] <= 10 && a2[1] > 0 && a2[1] <= 21 && b2[1] > 0 && b2[1] <= 21 && c2[1] > 0 && c2[1] <= 21 && d2[1] > 0 && d2[1] <= 21) {

                   if (a2[0] == b2[0] && a2[1] + 1 == b2[1] || a2[0] == c2[0] && a2[1] + 1 == c2[1] || a2[0] == d2[0] && a2[1] + 1 == d2[1]) e2[0] = 1;
                   else e2[0] = 0;
                   if (b2[0] == a2[0] && b2[1] + 1 == a2[1] || b2[0] == c2[0] && b2[1] + 1 == c2[1] || b2[0] == d2[0] && b2[1] + 1 == d2[1]) e2[1] = 1;
                   else e2[1] = 0;
                   if (c2[0] == a2[0] && c2[1] + 1 == a2[1] || c2[0] == b2[0] && c2[1] + 1 == b2[1] || c2[0] == d2[0] && c2[1] + 1 == d2[1]) e2[2] = 1;
                   else e2[2] = 0;
                   if (d2[0] == a2[0] && d2[1] + 1 == a2[1] || d2[0] == b2[0] && d2[1] + 1 == b2[1] || d2[0] == c2[0] && d2[1] + 1 == c2[1]) e2[3] = 1;
                   else e2[3] = 0;
                   var k = a2[1] + 1;
                   var l = b2[1] + 1;
                   var m = c2[1] + 1;
                   var n = d2[1] + 1;
                   tf2 = 0;
                   for (var mn = 0; mn < 4; mn++) {
                       if (e2[mn] == 0) {

                           if (mn == 0) { if (document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                           if (mn == 1) { if (document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                           if (mn == 2) { if (document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                           if (mn == 3) { if (document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor != 'darkslategrey') tf2 = 1; }

                       }

                   }
                   if (tf2 == 0) {

                       if (flag2 == 0) {
                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';
                       }
                       flag2 = 0;
                       a2[1]++;
                       b2[1]++;
                       c2[1]++;
                       d2[1]++;
                       if (a2[1] <= 21 && b2[1] <= 21 && c2[1] <= 21 && d2[1] <= 21) {
                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';


                       }
                   }
                   else {
                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';
                    

                       painttotal2();
                   }
               }
               else {
                   a2[1] = Number(a2[1]) + 1;
                   b2[1] = Number(b2[1]) + 1;
                   c2[1] = Number(c2[1]) + 1;
                   d2[1] = Number(d2[1]) + 1;
                  

                  
                   if (document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor != 'darkslategrey') {
                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';
                       yy = 28;
                       yya = 28;
                       yyb = 28;
                       yyc = 28;
                       yy2 = 28;
                       yya2 = 28;
                       yyb2 = 28;
                       yyc2 = 28;
                       ka = 0;
                      kd = 0;
                      ka2 = 0;
                      kd2 = 0;
                       alert('Player1 Won!');
                       if (score2 != 0) score2--;
                       else score++;
                       clearsco();
                       clearInterval(proce);
                       clearInterval(proce2);
                       cleardisall();
                     
                       var i = 1;
                       if (score != 0 && score!=11) {
                           while (i <= score) {
                               if (i % 2 == 0)
                                   document.getElementById('sc-' + i).style.backgroundColor = 'pink';
                               else document.getElementById('sc-' + i).style.backgroundColor = 'aqua';
                      
                               i++;
                           }
                       }
                       var j = 1;
                       if (score2 != 0 && score2!=11) {
                           while (j <= score2) {
                               if (j % 2 == 0)
                                   document.getElementById('sc2-' + j).style.backgroundColor = 'pink';
                               else document.getElementById('sc2-' + j).style.backgroundColor = 'aqua';
                              
                               j++;
                           }
                       }
                       format();
                       format2();
                       painttotal();
                       painttotal2();


                   }
                   else {
                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';
                       flag2 = 0;
                   }
               }

           }
           document.onkeyup = function (keypress) {
               if (keypress.key == 'a') {
                 
                   keyacheck = 0;
                   ka=0;
                
                  
               }
               if (keypress.key == 'd') {
               
                   keydcheck = 0;
                   kd = 0;

               }
               if (keypress.key == 'ArrowLeft') {
                   keya2check = 0;
                   ka2 = 0;
                 
               }
               if (keypress.key == 'ArrowRight') {
                 
                   keyd2check = 0;
                   k2 = 0;
                
               }
           }
     
  
           setInterval(keya, 50);
           setInterval(keyd, 50);
           setInterval(keya2, 50);
           setInterval(keyd2, 50);
           function keya() {
               if (keyacheck == 1 && ka == 3) {
                 
                   if (a[0] > 0 && b[0] > 0 && c[0] > 0 && d[0] > 0) {
                       kd = 0;
                       keydcheck = 0;
                       if (a[0] - 1 == b[0] && a[1] == b[1] || a[0] - 1 == c[0] && a[1] == c[1] || a[0] - 1 == d[0] && a[1] == d[1]) e[0] = 1;
                       else e[0] = 0;
                       if (b[0] - 1 == a[0] && b[1] == a[1] || b[0] - 1 == c[0] && b[1] == c[1] || b[0] - 1 == d[0] && b[1] == d[1]) e[1] = 1;
                       else e[1] = 0;
                       if (c[0] - 1 == a[0] && c[1] == a[1] || c[0] - 1 == b[0] && c[1] == b[1] || c[0] - 1 == d[0] && c[1] == d[1]) e[2] = 1;
                       else e[2] = 0;
                       if (d[0] - 1 == a[0] && d[1] == a[1] || d[0] - 1 == b[0] && d[1] == b[1] || d[0] - 1 == c[0] && d[1] == c[1]) e[3] = 1;
                       else e[3] = 0;
                       var k = a[0] - 1;
                       var l = b[0] - 1;
                       var m = c[0] - 1;
                       var n = d[0] - 1;
                       var condit = '';
                       tf = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e[mn] == 0) {
                               if (mn == 0) { if (k == 0 || document.getElementById('n' + k + '-' + a[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 1) { if (l == 0 || document.getElementById('n' + l + '-' + b[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 2) { if (m == 0 || document.getElementById('n' + m + '-' + c[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 3) { if (n == 0 || document.getElementById('n' + n + '-' + d[1]).style.backgroundColor != 'darkslategrey') tf = 1; }

                           }


                       }

                       if (tf == 0) {

                           document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';

                           a[0] -= 1;
                           b[0] -= 1;
                           c[0] -= 1;
                           d[0] -= 1;
                           if (a[0] == 0 || b[0] == 0 || c[0] == 0 || d[0] == 0) {
                               a[0] += 1;
                               b[0] += 1;
                               c[0] += 1;
                               d[0] += 1;
                           }
                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                           flag = 1;

                           paint();
                       }
                   }
               }
               else ka ++;
           }
         
           function keyd() {
               if (keydcheck == 1 && kd == 3) {
                   if (a[0] <= 10 && b[0] <= 10 && c[0] <= 10 && d[0] <= 10) {
                       ka = 0;
                       keyacheck = 0;
                       if (a[0] + 1 == b[0] && a[1] == b[1] || a[0] + 1 == c[0] && a[1] == c[1] || a[0] + 1 == d[0] && a[1] == d[1]) e[0] = 1;
                       else e[0] = 0;
                       if (b[0] + 1 == a[0] && b[1] == a[1] || b[0] + 1 == c[0] && b[1] == c[1] || b[0] + 1 == d[0] && b[1] == d[1]) e[1] = 1;
                       else e[1] = 0;
                       if (c[0] + 1 == a[0] && c[1] == a[1] || c[0] + 1 == b[0] && c[1] == b[1] || c[0] + 1 == d[0] && c[1] == d[1]) e[2] = 1;
                       else e[2] = 0;

                       if (d[0] + 1 == a[0] && d[1] == a[1] || d[0] + 1 == b[0] && d[1] == b[1] || d[0] + 1 == c[0] && d[1] == c[1]) e[3] = 1;
                       else e[3] = 0;
                       var k = a[0] + 1;
                       var l = b[0] + 1;
                       var m = c[0] + 1;
                       var n = d[0] + 1;
                       var condit = '';
                       tf = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e[mn] == 0) {
                               if (mn == 0) { if (k == 11 || document.getElementById('n' + k + '-' + a[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 1) { if (l == 11 || document.getElementById('n' + l + '-' + b[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 2) { if (m == 11 || document.getElementById('n' + m + '-' + c[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 3) { if (n == 11 || document.getElementById('n' + n + '-' + d[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }


                           }


                       }



                       if (tf == 0) {

                           document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';
                           a[0] += 1;
                           b[0] += 1;
                           c[0] += 1;
                           d[0] += 1;
                           if (a[0] == 11 || b[0] == 11 || c[0] == 11 || d[0] == 11) {
                               a[0] -= 1;
                               b[0] -= 1;
                               c[0] -= 1;
                               d[0] -= 1;
                           }
                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                           flag = 1;
                           paint();
                       }
                   }
               }
               else kd ++;
           }
           
           function keya2() {
               if (keya2check == 1 && ka2 == 3) {
                   if (a2[0] > 0 && b2[0] > 0 && c2[0] > 0 && d2[0] > 0) {
                       kd2 = 0;
                       keyd2check = 0;
                       if (a2[0] - 1 == b2[0] && a2[1] == b2[1] || a2[0] - 1 == c2[0] && a2[1] == c2[1] || a2[0] - 1 == d2[0] && a2[1] == d2[1]) e2[0] = 1;
                       else e2[0] = 0;
                       if (b2[0] - 1 == a2[0] && b2[1] == a2[1] || b2[0] - 1 == c2[0] && b2[1] == c2[1] || b2[0] - 1 == d2[0] && b2[1] == d2[1]) e2[1] = 1;
                       else e2[1] = 0;
                       if (c2[0] - 1 == a2[0] && c2[1] == a2[1] || c2[0] - 1 == b2[0] && c2[1] == b2[1] || c2[0] - 1 == d2[0] && c2[1] == d2[1]) e2[2] = 1;
                       else e2[2] = 0;
                       if (d2[0] - 1 == a2[0] && d2[1] == a2[1] || d2[0] - 1 == b2[0] && d2[1] == b2[1] || d2[0] - 1 == c2[0] && d2[1] == c2[1]) e2[3] = 1;
                       else e2[3] = 0;
                       var k = a2[0] - 1;
                       var l = b2[0] - 1;
                       var m = c2[0] - 1;
                       var n = d2[0] - 1;

                       tf2 = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e2[mn] == 0) {
                               if (mn == 0) { if (k == 0 || document.getElementById('n2' + k + '-' + a2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 1) { if (l == 0 || document.getElementById('n2' + l + '-' + b2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 2) { if (m == 0 || document.getElementById('n2' + m + '-' + c2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 3) { if (n == 0 || document.getElementById('n2' + n + '-' + d2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }

                           }


                       }

                       if (tf2 == 0) {

                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';

                           a2[0] -= 1;
                           b2[0] -= 1;
                           c2[0] -= 1;
                           d2[0] -= 1;
                           if (a2[0] == 0 || b2[0] == 0 || c2[0] == 0 || d2[0] == 0) {
                               a2[0] += 1;
                               b2[0] += 1;
                               c2[0] += 1;
                               d2[0] += 1;
                           }
                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                           flag2 = 1;

                           paint2();
                       }
                   }
               }
               else ka2 ++;
           }
        
           function keyd2() {
               if (keyd2check == 1 && kd2 == 3) {
                   if (a2[0] <= 10 && b2[0] <= 10 && c2[0] <= 10 && d2[0] <= 10) {
                       ka2 = 0;
                       keya2check = 0;
                       if (a2[0] + 1 == b2[0] && a2[1] == b2[1] || a2[0] + 1 == c2[0] && a2[1] == c2[1] || a2[0] + 1 == d2[0] && a2[1] == d2[1]) e2[0] = 1;
                       else e2[0] = 0;
                       if (b2[0] + 1 == a2[0] && b2[1] == a2[1] || b2[0] + 1 == c2[0] && b2[1] == c2[1] || b2[0] + 1 == d2[0] && b2[1] == d2[1]) e2[1] = 1;
                       else e2[1] = 0;
                       if (c2[0] + 1 == a2[0] && c2[1] == a2[1] || c2[0] + 1 == b2[0] && c2[1] == b2[1] || c2[0] + 1 == d2[0] && c2[1] == d2[1]) e2[2] = 1;
                       else e2[2] = 0;

                       if (d2[0] + 1 == a2[0] && d2[1] == a2[1] || d2[0] + 1 == b2[0] && d2[1] == b2[1] || d2[0] + 1 == c2[0] && d2[1] == c2[1]) e2[3] = 1;
                       else e2[3] = 0;
                       var k = a2[0] + 1;
                       var l = b2[0] + 1;
                       var m = c2[0] + 1;
                       var n = d2[0] + 1;

                       tf2 = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e2[mn] == 0) {
                               if (mn == 0) { if (k == 11 || document.getElementById('n2' + k + '-' + a2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 1) { if (l == 11 || document.getElementById('n2' + l + '-' + b2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 2) { if (m == 11 || document.getElementById('n2' + m + '-' + c2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 3) { if (n == 11 || document.getElementById('n2' + n + '-' + d2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }


                           }


                       }



                       if (tf2 == 0) {

                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';
                           a2[0] += 1;
                           b2[0] += 1;
                           c2[0] += 1;
                           d2[0] += 1;
                           if (a2[0] == 11 || b2[0] == 11 || c2[0] == 11 || d2[0] == 11) {
                               a2[0] -= 1;
                               b2[0] -= 1;
                               c2[0] -= 1;
                               d2[0] -= 1;
                           }
                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                           flag2 = 1;
                           paint2();
                       }
                   }
               }
               else kd2 ++;
           }

           
           document.onkeydown = function (keypress) {

               if (keypress.key == 'Enter' && w == 0) {

                   document.getElementById('ask').style.opacity = 0;
                   document.getElementById('left').style.opacity = 1;
                   document.getElementById('right').style.opacity = 1;
                   document.getElementById('display').style.opacity = 0.5;
                   document.getElementById('display2').style.opacity = 0.5;
                   document.getElementById('mark').style.opacity = 1;
                   document.getElementById('text').style.animationName = 'aa';
                   document.getElementById('ask').style.animationName = 'aa';
                   painttotal();
                   setInterval(paint, 600);
                   painttotal2();
                   format();
                   format2();
                   setInterval(paint2, 600);
                   w = 1;
               }
               if (keypress.key == 's') {
                   ka = 0;
                   kd = 0;
                   keyacheck = 0;
                   keydcheck = 0;
                   document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';
                   if (type == 2) {
                       if (f % 4 == 1) {
                           a[0]++;
                           a[1]--;

                       }
                       if (f % 4 == 2) {
                           d[0]--;
                           d[1]--;

                       }
                       if (f % 4 == 3) {
                           c[0]--;
                           c[1]++;

                       }
                       if (f % 4 == 0) {
                           a[0]--;
                           a[1]++;
                           d[0]++;
                           d[1]++;
                           c[0]++;
                           c[1]--;

                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;
                   }
                   if (type == 3) {
                       if (f % 4 == 1) {
                           a[0]++;
                           a[1]--;
                           d[0]--;
                           c[1]--;

                       }
                       if (f % 4 == 2) {
                           a[0]--;
                           c[1]++;
                           d[0]--; d[1]--;


                       }
                       if (f % 4 == 3) {
                           a[0]++;
                           d[1]++;
                           c[0]--;
                           c[1]++;

                       }
                       if (f % 4 == 0) {
                           a[0]--;
                           a[1]++;
                           c[0]++;
                           c[1]--;
                           d[0] += 2;


                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;
                   }
                   if (type == 4) {
                       if (f % 4 == 1) {
                           c[1]--;
                           c[0]--;
                           d[1]++;
                           d[0]--;
                       }
                       if (f % 4 == 2) {
                           c[0]++;
                           b[0]--;
                           b[1]--;
                           d[1]--;

                       }
                       if (f % 4 == 3) {
                           b[1]--;
                           b[0]++;
                           a[0]++;
                           a[1]++;

                       }
                       if (f % 4 == 0) {
                           a[0]--;
                           a[1]--;
                           b[1] += 2;
                           c[1]++;
                           d[0]++;




                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;
                   }
                   if (type == 5) {
                       if (f % 2 == 1) {
                           d[0] -= 2;
                           c[1] += 2;

                       }
                       if (f % 2 == 0) {
                           d[0] += 2;
                           c[1] -= 2;

                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;

                   }
                   if (type == 6) {
                       if (f % 2 == 1) {
                           b[0] += 2;
                           a[1] += 2;

                       }
                       if (f % 2 == 0) {
                           b[0] -= 2;
                           a[1] -= 2;

                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;
                   }
                   if (type == 7) {
                       if (f % 2 == 1) {
                           a[0]--;
                           a[1] += 2;
                           b[0]++;
                           b[1]++;
                           d[0] += 2;
                           d[1]--;

                       }
                       if (f % 2 == 0) {
                           a[0]++;
                           a[1] -= 2;
                           b[0]--;
                           b[1]--;
                           d[0] -= 2;
                           d[1]++;

                       }
                       if (a[0] <= 0 || b[0] <= 0 || c[0] <= 0 || d[0] <= 0) {
                           var y = (1 - Math.min(a[0], b[0], c[0], d[0]));
                           a[0] += y;
                           b[0] += y;
                           c[0] += y;
                           d[0] += y;
                       }
                       if (a[0] > 10 || b[0] > 10 || c[0] > 10 || d[0] > 10) {
                           var y = (Math.max(a[0], b[0], c[0], d[0]) - 10);
                           a[0] -= y;
                           b[0] -= y;
                           c[0] -= y;
                           d[0] -= y;
                       }
                       f++;
                   }

                   a[1]--;
                   b[1]--;
                   c[1]--;
                   d[1]--;
                   paint();
               }

               if (keypress.key == 'Shift') {
                   tf = 0;

                   ka = 0;
                   kd = 0;
                   keyacheck = 0;
                   keydcheck = 0;
                   if (a[1] != 21 && b[1] != 21 && c[1] != 21 && d[1] != 21) {

                       document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';

                       if (a[0] == b[0] && a[1] + 1 == b[1] || a[0] == c[0] && a[1] + 1 == c[1] || a[0] == d[0] && a[1] + 1 == d[1]) e[0] = 1;
                       else e[0] = 0;
                       if (b[0] == a[0] && b[1] + 1 == a[1] || b[0] == c[0] && b[1] + 1 == c[1] || b[0] == d[0] && b[1] + 1 == d[1]) e[1] = 1;
                       else e[1] = 0;
                       if (c[0] == a[0] && c[1] + 1 == a[1] || c[0] == b[0] && c[1] + 1 == b[1] || c[0] == d[0] && c[1] + 1 == d[1]) e[2] = 1;
                       else e[2] = 0;
                       if (d[0] == a[0] && d[1] + 1 == a[1] || d[0] == b[0] && d[1] + 1 == b[1] || d[0] == c[0] && d[1] + 1 == c[1]) e[3] = 1;
                       else e[3] = 0;

                       while (tf == 0 && k != 21 && l != 21 && m != 21 && n != 21) {
                           var k = a[1] + 1;
                           var l = b[1] + 1;
                           var m = c[1] + 1;
                           var n = d[1] + 1;


                           for (var mn = 0; mn < 4; mn++) {
                               if (e[mn] == 0) {

                                   if (mn == 0) { if (document.getElementById('n' + a[0] + '-' + k).style.backgroundColor == 'lightskyblue' || document.getElementById('n' + a[0] + '-' + k).style.backgroundColor == 'coral') tf = 1; }
                                   if (mn == 1) { if (document.getElementById('n' + b[0] + '-' + l).style.backgroundColor == 'lightskyblue' || document.getElementById('n' + b[0] + '-' + l).style.backgroundColor == 'coral') tf = 1; }
                                   if (mn == 2) { if (document.getElementById('n' + c[0] + '-' + m).style.backgroundColor == 'lightskyblue' || document.getElementById('n' + c[0] + '-' + m).style.backgroundColor == 'coral') tf = 1; }
                                   if (mn == 3) { if (document.getElementById('n' + d[0] + '-' + n).style.backgroundColor == 'lightskyblue' || document.getElementById('n' + d[0] + '-' + n).style.backgroundColor == 'coral') tf = 1; }

                               }

                           }

                           a[1]++;
                           b[1]++;
                           c[1]++;
                           d[1]++;

                       }
                       if (a[1] != 21 && b[1] != 21 && c[1] != 21 && d[1] != 21) {

                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                       }

                       else if (document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor != 'darkslategrey') {
                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                       }
                       document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'lightskyblue';
                       exchange();

                   }
               }



               if (keypress.key == 'a') {
                   if (a[0] > 0 && b[0] > 0 && c[0] > 0 && d[0] > 0) {
                       kd = 0;
                       ka = 0;
                       keyacheck = 0;
                       keydcheck = 0;
                       if (a[0] - 1 == b[0] && a[1] == b[1] || a[0] - 1 == c[0] && a[1] == c[1] || a[0] - 1 == d[0] && a[1] == d[1]) e[0] = 1;
                       else e[0] = 0;
                       if (b[0] - 1 == a[0] && b[1] == a[1] || b[0] - 1 == c[0] && b[1] == c[1] || b[0] - 1 == d[0] && b[1] == d[1]) e[1] = 1;
                       else e[1] = 0;
                       if (c[0] - 1 == a[0] && c[1] == a[1] || c[0] - 1 == b[0] && c[1] == b[1] || c[0] - 1 == d[0] && c[1] == d[1]) e[2] = 1;
                       else e[2] = 0;
                       if (d[0] - 1 == a[0] && d[1] == a[1] || d[0] - 1 == b[0] && d[1] == b[1] || d[0] - 1 == c[0] && d[1] == c[1]) e[3] = 1;
                       else e[3] = 0;
                       var k = a[0] - 1;
                       var l = b[0] - 1;
                       var m = c[0] - 1;
                       var n = d[0] - 1;
                       var condit = '';
                       tf = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e[mn] == 0) {
                               if (mn == 0) { if (k == 0 || document.getElementById('n' + k + '-' + a[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 1) { if (l == 0 || document.getElementById('n' + l + '-' + b[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 2) { if (m == 0 || document.getElementById('n' + m + '-' + c[1]).style.backgroundColor != 'darkslategrey') tf = 1; }
                               if (mn == 3) { if (n == 0 || document.getElementById('n' + n + '-' + d[1]).style.backgroundColor != 'darkslategrey') tf = 1; }

                           }


                       }

                       if (tf == 0) {

                           document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';

                           a[0] -= 1;
                           b[0] -= 1;
                           c[0] -= 1;
                           d[0] -= 1;
                           if (a[0] == 0 || b[0] == 0 || c[0] == 0 || d[0] == 0) {
                               a[0] += 1;
                               b[0] += 1;
                               c[0] += 1;
                               d[0] += 1;
                           }
                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                           flag = 1;

                           paint();
                       }
                   }
                   keyacheck = 1;
          
                
               }

               if (keypress.key == 'd') {
                   if (a[0] <= 10 && b[0] <= 10 && c[0] <= 10 && d[0] <= 10) {
                       ka = 0;
                       kd = 0;
                       keyacheck = 0;
                       keydcheck = 0;
                       if (a[0] + 1 == b[0] && a[1] == b[1] || a[0] + 1 == c[0] && a[1] == c[1] || a[0] + 1 == d[0] && a[1] == d[1]) e[0] = 1;
                       else e[0] = 0;
                       if (b[0] + 1 == a[0] && b[1] == a[1] || b[0] + 1 == c[0] && b[1] == c[1] || b[0] + 1 == d[0] && b[1] == d[1]) e[1] = 1;
                       else e[1] = 0;
                       if (c[0] + 1 == a[0] && c[1] == a[1] || c[0] + 1 == b[0] && c[1] == b[1] || c[0] + 1 == d[0] && c[1] == d[1]) e[2] = 1;
                       else e[2] = 0;

                       if (d[0] + 1 == a[0] && d[1] == a[1] || d[0] + 1 == b[0] && d[1] == b[1] || d[0] + 1 == c[0] && d[1] == c[1]) e[3] = 1;
                       else e[3] = 0;
                       var k = a[0] + 1;
                       var l = b[0] + 1;
                       var m = c[0] + 1;
                       var n = d[0] + 1;
                       var condit = '';
                       tf = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e[mn] == 0) {
                               if (mn == 0) { if (k == 11 || document.getElementById('n' + k + '-' + a[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 1) { if (l == 11 || document.getElementById('n' + l + '-' + b[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 2) { if (m == 11 || document.getElementById('n' + m + '-' + c[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }
                               if (mn == 3) { if (n == 11 || document.getElementById('n' + n + '-' + d[1]).style.backgroundColor != 'darkslategrey') { tf = 1; } }


                           }


                       }



                       if (tf == 0) {

                           document.getElementById('n' + a[0] + "-" + a[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + b[0] + "-" + b[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + c[0] + "-" + c[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n' + d[0] + "-" + d[1]).style.backgroundColor = 'darkslategrey';
                           a[0] += 1;
                           b[0] += 1;
                           c[0] += 1;
                           d[0] += 1;
                           if (a[0] == 11 || b[0] == 11 || c[0] == 11 || d[0] == 11) {
                               a[0] -= 1;
                               b[0] -= 1;
                               c[0] -= 1;
                               d[0] -= 1;
                           }
                           a[1]--;
                           b[1]--;
                           c[1]--;
                           d[1]--;
                           flag = 1;
                           paint();
                       }
                   }
                   keydcheck = 1;
                 
                
               }



               if (keypress.key == 'ArrowDown') {
                   
                   ka2 = 0;
                   kd2 = 0;
                   keya2check = 0;
                   keyd2check = 0;
                   document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                   document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';
                   if (type2 == 2) {
                       if (f2 % 4 == 1) {
                           a2[0]++;
                           a2[1]--;

                       }
                       if (f2 % 4 == 2) {
                           d2[0]--;
                           d2[1]--;

                       }
                       if (f2 % 4 == 3) {
                           c2[0]--;
                           c2[1]++;

                       }
                       if (f2 % 4 == 0) {
                           a2[0]--;
                           a2[1]++;
                           d2[0]++;
                           d2[1]++;
                           c2[0]++;
                           c2[1]--;

                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;
                   }
                   if (type2 == 3) {
                       if (f2 % 4 == 1) {
                           a2[0]++;
                           a2[1]--;
                           d2[0]--;
                           c2[1]--;

                       }
                       if (f2 % 4 == 2) {
                           a2[0]--;
                           c2[1]++;
                           d2[0]--; d2[1]--;


                       }
                       if (f2 % 4 == 3) {
                           a2[0]++;
                           d2[1]++;
                           c2[0]--;
                           c2[1]++;

                       }
                       if (f2 % 4 == 0) {
                           a2[0]--;
                           a2[1]++;
                           c2[0]++;
                           c2[1]--;
                           d2[0] += 2;


                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;
                   }
                   if (type2 == 4) {
                       if (f2 % 4 == 1) {
                           c2[1]--;
                           c2[0]--;
                           d2[1]++;
                           d2[0]--;
                       }
                       if (f2 % 4 == 2) {
                           c2[0]++;
                           b2[0]--;
                           b2[1]--;
                           d2[1]--;

                       }
                       if (f2 % 4 == 3) {
                           b2[1]--;
                           b2[0]++;
                           a2[0]++;
                           a2[1]++;

                       }
                       if (f2 % 4 == 0) {
                           a2[0]--;
                           a2[1]--;
                           b2[1] += 2;
                           c2[1]++;
                           d2[0]++;




                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;
                   }
                   if (type2 == 5) {
                       if (f2 % 2 == 1) {
                           d2[0] -= 2;
                           c2[1] += 2;

                       }
                       if (f2 % 2 == 0) {
                           d2[0] += 2;
                           c2[1] -= 2;

                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;

                   }
                   if (type2 == 6) {
                       if (f2 % 2 == 1) {
                           b2[0] += 2;
                           a2[1] += 2;

                       }
                       if (f2 % 2 == 0) {
                           b2[0] -= 2;
                           a2[1] -= 2;

                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;
                   }
                   if (type2 == 7) {
                       if (f2 % 2 == 1) {
                           a2[0]--;
                           a2[1] += 2;
                           b2[0]++;
                           b2[1]++;
                           d2[0] += 2;
                           d2[1]--;

                       }
                       if (f2 % 2 == 0) {
                           a2[0]++;
                           a2[1] -= 2;
                           b2[0]--;
                           b2[1]--;
                           d2[0] -= 2;
                           d2[1]++;

                       }
                       if (a2[0] <= 0 || b2[0] <= 0 || c2[0] <= 0 || d2[0] <= 0) {
                           var y2 = (1 - Math.min(a2[0], b2[0], c2[0], d2[0]));
                           a2[0] += y2;
                           b2[0] += y2;
                           c2[0] += y2;
                           d2[0] += y2;
                       }
                       if (a2[0] > 10 || b2[0] > 10 || c2[0] > 10 || d2[0] > 10) {
                           var y2 = (Math.max(a2[0], b2[0], c2[0], d2[0]) - 10);
                           a2[0] -= y2;
                           b2[0] -= y2;
                           c2[0] -= y2;
                           d2[0] -= y2;
                       }
                       f2++;
                   }


                   a2[1]--;
                   b2[1]--;
                   c2[1]--;
                   d2[1]--;
                   paint2();
               }


               if (keypress.key == 'ArrowUp') {
                   tf2 = 0;
                   ka2 = 0;
                   kd2 = 0;
                   keya2check = 0;
                   keyd2check = 0;
                   if (a2[1] != 21 && b2[1] != 21 && c2[1] != 21 && d2[1] != 21) {

                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';

                       if (a2[0] == b2[0] && a2[1] + 1 == b2[1] || a2[0] == c2[0] && a2[1] + 1 == c2[1] || a2[0] == d2[0] && a2[1] + 1 == d2[1]) e2[0] = 1;
                       else e2[0] = 0;
                       if (b2[0] == a2[0] && b2[1] + 1 == a2[1] || b2[0] == c2[0] && b2[1] + 1 == c2[1] || b2[0] == d2[0] && b2[1] + 1 == d2[1]) e2[1] = 1;
                       else e2[1] = 0;
                       if (c2[0] == a2[0] && c2[1] + 1 == a2[1] || c2[0] == b2[0] && c2[1] + 1 == b2[1] || c2[0] == d2[0] && c2[1] + 1 == d2[1]) e2[2] = 1;
                       else e2[2] = 0;
                       if (d2[0] == a2[0] && d2[1] + 1 == a2[1] || d2[0] == b2[0] && d2[1] + 1 == b2[1] || d2[0] == c2[0] && d2[1] + 1 == c2[1]) e2[3] = 1;
                       else e2[3] = 0;

                       while (tf2 == 0 && k != 21 && l != 21 && m != 21 && n != 21) {
                           var k = a2[1] + 1;
                           var l = b2[1] + 1;
                           var m = c2[1] + 1;
                           var n = d2[1] + 1;


                           for (var mn = 0; mn < 4; mn++) {
                               if (e2[mn] == 0) {

                                   if (mn == 0) { if (document.getElementById('n2' + a2[0] + '-' + k).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                                   if (mn == 1) { if (document.getElementById('n2' + b2[0] + '-' + l).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                                   if (mn == 2) { if (document.getElementById('n2' + c2[0] + '-' + m).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                                   if (mn == 3) { if (document.getElementById('n2' + d2[0] + '-' + n).style.backgroundColor != 'darkslategrey') tf2 = 1; }

                               }

                           }

                           a2[1]++;
                           b2[1]++;
                           c2[1]++;
                           d2[1]++;

                       }
                       if (a2[1] != 21 && b2[1] != 21 && c2[1] != 21 && d2[1] != 21) {

                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                       }

                       else if (document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor != 'darkslategrey' || document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor != 'darkslategrey') {
                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                       }
                       document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'lightskyblue';
                       document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'lightskyblue';

                       exchange2();



                   }
               }
               if (keypress.key == 'ArrowLeft') {
                   if (a2[0] > 0 && b2[0] > 0 && c2[0] > 0 && d2[0] > 0) {
                       kd2 = 0;
                       ka2 = 0;
                       keya2check = 0;
                       keyd2check = 0;
                       if (a2[0] - 1 == b2[0] && a2[1] == b2[1] || a2[0] - 1 == c2[0] && a2[1] == c2[1] || a2[0] - 1 == d2[0] && a2[1] == d2[1]) e2[0] = 1;
                       else e2[0] = 0;
                       if (b2[0] - 1 == a2[0] && b2[1] == a2[1] || b2[0] - 1 == c2[0] && b2[1] == c2[1] || b2[0] - 1 == d2[0] && b2[1] == d2[1]) e2[1] = 1;
                       else e2[1] = 0;
                       if (c2[0] - 1 == a2[0] && c2[1] == a2[1] || c2[0] - 1 == b2[0] && c2[1] == b2[1] || c2[0] - 1 == d2[0] && c2[1] == d2[1]) e2[2] = 1;
                       else e2[2] = 0;
                       if (d2[0] - 1 == a2[0] && d2[1] == a2[1] || d2[0] - 1 == b2[0] && d2[1] == b2[1] || d2[0] - 1 == c2[0] && d2[1] == c2[1]) e2[3] = 1;
                       else e2[3] = 0;
                       var k = a2[0] - 1;
                       var l = b2[0] - 1;
                       var m = c2[0] - 1;
                       var n = d2[0] - 1;

                       tf2 = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e2[mn] == 0) {
                               if (mn == 0) { if (k == 0 || document.getElementById('n2' + k + '-' + a2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 1) { if (l == 0 || document.getElementById('n2' + l + '-' + b2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 2) { if (m == 0 || document.getElementById('n2' + m + '-' + c2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }
                               if (mn == 3) { if (n == 0 || document.getElementById('n2' + n + '-' + d2[1]).style.backgroundColor != 'darkslategrey') tf2 = 1; }

                           }


                       }

                       if (tf2 == 0) {

                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';

                           a2[0] -= 1;
                           b2[0] -= 1;
                           c2[0] -= 1;
                           d2[0] -= 1;
                           if (a2[0] == 0 || b2[0] == 0 || c2[0] == 0 || d2[0] == 0) {
                               a2[0] += 1;
                               b2[0] += 1;
                               c2[0] += 1;
                               d2[0] += 1;
                           }
                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                           flag2 = 1;

                           paint2();
                       }
                   }
                   keya2check = 1;
                
                  
               }

               if (keypress.key == 'ArrowRight') {
                   if (a2[0] <= 10 && b2[0] <= 10 && c2[0] <= 10 && d2[0] <= 10) {
                       ka2 = 0;
                       kd2 = 0;
                       keya2check = 0;
                       keyd2check = 0;
                       if (a2[0] + 1 == b2[0] && a2[1] == b2[1] || a2[0] + 1 == c2[0] && a2[1] == c2[1] || a2[0] + 1 == d2[0] && a2[1] == d2[1]) e2[0] = 1;
                       else e2[0] = 0;
                       if (b2[0] + 1 == a2[0] && b2[1] == a2[1] || b2[0] + 1 == c2[0] && b2[1] == c2[1] || b2[0] + 1 == d2[0] && b2[1] == d2[1]) e2[1] = 1;
                       else e2[1] = 0;
                       if (c2[0] + 1 == a2[0] && c2[1] == a2[1] || c2[0] + 1 == b2[0] && c2[1] == b2[1] || c2[0] + 1 == d2[0] && c2[1] == d2[1]) e2[2] = 1;
                       else e2[2] = 0;

                       if (d2[0] + 1 == a2[0] && d2[1] == a2[1] || d2[0] + 1 == b2[0] && d2[1] == b2[1] || d2[0] + 1 == c2[0] && d2[1] == c2[1]) e2[3] = 1;
                       else e2[3] = 0;
                       var k = a2[0] + 1;
                       var l = b2[0] + 1;
                       var m = c2[0] + 1;
                       var n = d2[0] + 1;

                       tf2 = 0;

                       for (var mn = 0; mn < 4; mn++) {
                           if (e2[mn] == 0) {
                               if (mn == 0) { if (k == 11 || document.getElementById('n2' + k + '-' + a2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 1) { if (l == 11 || document.getElementById('n2' + l + '-' + b2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 2) { if (m == 11 || document.getElementById('n2' + m + '-' + c2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }
                               if (mn == 3) { if (n == 11 || document.getElementById('n2' + n + '-' + d2[1]).style.backgroundColor != 'darkslategrey') { tf2 = 1; } }


                           }


                       }



                       if (tf2 == 0) {

                           document.getElementById('n2' + a2[0] + "-" + a2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + b2[0] + "-" + b2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + c2[0] + "-" + c2[1]).style.backgroundColor = 'darkslategrey';
                           document.getElementById('n2' + d2[0] + "-" + d2[1]).style.backgroundColor = 'darkslategrey';
                           a2[0] += 1;
                           b2[0] += 1;
                           c2[0] += 1;
                           d2[0] += 1;
                           if (a2[0] == 11 || b2[0] == 11 || c2[0] == 11 || d2[0] == 11) {
                               a2[0] -= 1;
                               b2[0] -= 1;
                               c2[0] -= 1;
                               d2[0] -= 1;
                           }
                           a2[1]--;
                           b2[1]--;
                           c2[1]--;
                           d2[1]--;
                           flag2 = 1;
                           paint2();
                       }
                   }
                   keyd2check = 1;
                
               }
           }
