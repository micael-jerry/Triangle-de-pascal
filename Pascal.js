let prompt = require("prompt-sync")();
function TrianglePascal(taille){
  let T_Result = [];
  
    for( i=0; i< taille; i++){
        T_Result[i] = [];
        T_Result[i][0]= 1;
    }
        for( j=1; j< taille; j++){
            for( k =1; k < j; k++){
                T_Result[j][k] = T_Result[j-1][k-1] + T_Result[j-1][k];
            }
            T_Result[j][k] = 1;
        }
        return T_Result ;
}


function aff_tab_deux_dimensions(tab){
    for(i=0;i<tab.length;i++){
        console.log(tab[i].join(" "))
    }
}

let taille = prompt("Saisir: ") ;
let Pascal = TrianglePascal(taille) ;
aff_tab_deux_dimensions(Pascal) ;