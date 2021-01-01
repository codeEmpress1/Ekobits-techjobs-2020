function rot13(str) {

    return str.split('').map(function(val){
      var c = val.charCodeAt(0) - 65;
      if (c >= 0 && c <= 25)
        return String.fromCharCode( ((c + 13) % 26) + 65 );
      else
        return val;
    }).join('');}
  
  rot13("SERR PBQR PNZC");