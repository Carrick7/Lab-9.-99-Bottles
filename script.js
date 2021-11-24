function lyrics(){
  for(i=100;i>=3;i=i-1){
    var left=i-1;
    document.getElementById("song").innerHTML+="<br />" +i+ " bottles of beer on the wall, "+i+" bottles of beer, Take one down and pass it around, "+left+" bottles of beer on the wall ";
  }
  for(i=2;i>=2;i=i-1){
    var left=i-1;
    document.getElementById("song").innerHTML+="<br />" +i+ " bottles of beer on the wall, "+i+" bottles of beer, Take one down and pass it around, "+left+" bottle of beer on the wall ";
  }
  for(i=1;i>=1;i=i-1){
    var left=i-1;
    document.getElementById("song").innerHTML+="<br />" +i+ " bottle of beer on the wall, "+i+" bottle of beer, Take one down and pass it around, no more bottles of beer on the wall ";
    document.getElementById("song").innerHTML+="<br /> No more bottles of beer on the wall, no more bottles of beer, Go to the store and buy some more, 99 bottles of beer on the wall.";
  }
    document.getElementById("button").style.visibility = 'hidden';
}