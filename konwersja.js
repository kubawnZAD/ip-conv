var input = document.getElementById("in");
var output = document.getElementById("out");
var msgs = document.getElementById("msgs");
var bin = [];

input.addEventListener("focusout", () =>{

    var digit = input.value;
    
    var fields = digit.split('.');
    
    
    for(let i =0;i<fields.length;i++){
    if (fields[i].search(/^[10]+$/) != -1){
        if(bin2dec(fields[i])>255){
            out.value = "error";
            break;
        }
        else{
        out.value += bin2dec(fields[i])+".";
        }
      } else {
        out.value += dec2bin(fields[i])+".";
      }
    }
});

function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  function bin2dec(bin){
  var digit = parseInt(bin, 2);
  return digit;
  }