var numero;
var soma;
var qtd;
var maior;
var pares;
var impares;

numero=1;
qtd=0;
soma=0;
maior=0;
menor=Infinity;
pares=0;
impares=0;

while(numero!=0) {
 console.log("Digite um número");
   numero = prompt();
   if (numero!=0) {
      qtd++ ;
   }
   soma = soma + numero;
   if (numero %2 == 0 && numero!=0)
   {
       pares++; 
   }
   else if (numero%2==1 && numero!=0) 
   {
       impares++
   }
   if (numero>maior && numero!=0)
   {
       maior=numero;
   }
   if (numero<menor && numero!=0)
   {
       menor=numero; 
   }
   }
   
   media= soma/qtd; 
   console.log("O maior número é:"+maior);
   console.log("O menor número é:"+menor);
   console.log("A média dos numeros é:"+media);
   console.log("O total de números pares é:"+pares);
   console.log("O total de números ímpares é:"+impares);