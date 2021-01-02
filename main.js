var images=["Dada copy.jpg",
"mumma copy.jpg",
"Jadon copy.jpg",
"Nathan copy.jpg",
"Patti copy.jpg",
"Thatha copy.jpg" ];

var reason=["Julian Thomas","Lita  Thomas","Jadon Paul Thomas","Nathan Deny thomas","Regina Victor","Vitor Jaypalraj"];

var i=0;
function imagechange (){
document.getElementById("image").src=images[i];
document.getElementById("reason").innerHTML=reason[i];
i++;
  if (i == 6)
    {
      i=0;
    }
}