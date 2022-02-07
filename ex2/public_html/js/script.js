 let d=0;
 let n5to4 = 0;
 let n4to3 = 0;
 let n3to2 = 0;
 let n2to1 = 0;
  document.getElementById("text-button4").onclick = function() {
    if(d%2==0) {
            document.getElementById("text4").innerHTML = "1";
    } else {
        document.getElementById("text4").innerHTML = "0";
    }
    d++;

    if(d%2==0 && h%2==0) {
        document.getElementById("text13").innerHTML = "0";
      }else if(d%2==1 && h%2==1) {
        n5to4 = 1;
        document.getElementById("text13").innerHTML = "0";
      } else {
        n5to4 = 0;
        document.getElementById("text13").innerHTML = "1";
    }


        if(c%2==0 && g%2==0 && n5to4==0) {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "0";
      }else if(c%2==0 && g%2==1 && n5to4==1 || c%2==1 && g%2==1 && n5to4==0 || c%2==1 && g%2==0 && n5to4==1) {
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "0";
      } else if(c%2==1 && g%2==1 && n5to4==1){
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "1";
    }else {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "1";
    }


    if(b%2==0 && f%2==0 && n4to3==0) {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }


    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }
  }

  let c=0;
  document.getElementById("text-button3").onclick = function() {
    if(c%2==0) {
            document.getElementById("text3").innerHTML = "1";
    } else {
        document.getElementById("text3").innerHTML = "0";
    }
    c++;

    if(c%2==0 && g%2==0 && n5to4==0) {
        let n4to3 = 0;
        document.getElementById("text12").innerHTML = "0";
      }else if(c%2==0 && g%2==1 && n5to4==1 || c%2==1 && g%2==1 && n5to4==0 || c%2==1 && g%2==0 && n5to4==1) {
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "0";
      } else if(c%2==1 && g%2==1 && n5to4==1){
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "1";
    }else {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "1";
    }



    if(b%2==0 && f%2==0 && n4to3==0) {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }



    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }

  }
  

  
  let b=0;
  document.getElementById("text-button2").onclick = function() {
    if(b%2==0) {
            document.getElementById("text2").innerHTML = "1";
    } else {
        document.getElementById("text2").innerHTML = "0";
    }
    b++;

    if(b%2==0 && f%2==0 && n4to3==0) {
        let n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }



    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }

  }

  let a=0;
document.getElementById("text-button1").onclick = function() {
    if(a%2==0) {
            document.getElementById("text1").innerHTML = "1";
    } else {
        document.getElementById("text1").innerHTML = "0";
    }
    a++;

    if(a%2==0 && e%2==0 && n3to2==0) {
        let n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }
  }
 

  let e=0;
  document.getElementById("text-button5").onclick = function() {
    if(e%2==0) {
            document.getElementById("text5").innerHTML = "1";
    } else {
        document.getElementById("text5").innerHTML = "0";
    }
    e++;

    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }
  }

  let f=0;
  document.getElementById("text-button6").onclick = function() {
    if(f%2==0) {
            document.getElementById("text6").innerHTML = "1";
    } else {
        document.getElementById("text6").innerHTML = "0";
    }
    f++;

    if(b%2==0 && f%2==0 && n4to3==0) {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }



    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }
  }

  let g=0;
  document.getElementById("text-button7").onclick = function() {
    if(g%2==0) {
            document.getElementById("text7").innerHTML = "1";
    } else {
        document.getElementById("text7").innerHTML = "0";
    }
    g++

    if(c%2==0 && g%2==0 && n5to4==0) {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "0";
      }else if(c%2==0 && g%2==1 && n5to4==1 || c%2==1 && g%2==1 && n5to4==0 || c%2==1 && g%2==0 && n5to4==1) {
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "0";
      } else if(c%2==1 && g%2==1 && n5to4==1){
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "1";
    }else {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "1";
    }



    if(b%2==0 && f%2==0 && n4to3==0) {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }




    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }

  }

  let h=0;
  document.getElementById("text-button8").onclick = function() {
    if(h%2==0) {
            document.getElementById("text8").innerHTML = "1";
    } else {
        document.getElementById("text8").innerHTML = "0";
    }
    h++;

    if(d%2==0 && h%2==0) {
        n5to4 = 0;
        document.getElementById("text13").innerHTML = "0";
      }else if(d%2==1 && h%2==1) {
        n5to4 = 1;
        document.getElementById("text13").innerHTML = "0";
      } else {
        n5to4 = 0;
        document.getElementById("text13").innerHTML = "1";
    }



    if(c%2==0 && g%2==0 && n5to4==0) {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "0";
      }else if(c%2==0 && g%2==1 && n5to4==1 || c%2==1 && g%2==1 && n5to4==0 || c%2==1 && g%2==0 && n5to4==1) {
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "0";
      } else if(c%2==1 && g%2==1 && n5to4==1){
        n4to3 = 1;
        document.getElementById("text12").innerHTML = "1";
    }else {
        n4to3 = 0;
        document.getElementById("text12").innerHTML = "1";
    }



    if(b%2==0 && f%2==0 && n4to3==0) {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "0";
      }else if(b%2==0 && f%2==1 && n4to3==1 || b%2==1 && f%2==1 && n4to3==0 || b%2==1 && f%2==0 && n4to3==1) {
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "0";
      } else if(b%2==1 && f%2==1 && n4to3==1){
        n3to2 = 1;
        document.getElementById("text11").innerHTML = "1";
    }else {
        n3to2 = 0;
        document.getElementById("text11").innerHTML = "1";
    }



    if(a%2==0 && e%2==0 && n3to2==0) {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "0";
      }else if(a%2==0 && e%2==1 && n3to2==1 || a%2==1 && e%2==1 && n3to2==0 || a%2==1 && e%2==0 && n3to2==1) {
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "0";
      } else if(a%2==1 && e%2==1 && n3to2==1){
        n2to1 = 1;
        document.getElementById("text10").innerHTML = "1";
    }else {
        n2to1 = 0;
        document.getElementById("text10").innerHTML = "1";
    }

    if(n2to1==1) {
        document.getElementById("text9").innerHTML = "1";
    } else {
        document.getElementById("text9").innerHTML = "0";
    }
  }

