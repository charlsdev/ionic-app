export const calculateDigito = (ced: string) => {
   let total = 0; const arrayCed: Array<string> = ced.split('');

   for (let i = 0; i < arrayCed.length; i++) {
      if (i % 2 === 0) {
         let aux = parseInt(arrayCed[i], 10) * 2;

         if (aux > 9) {aux -= 9;}
         total += aux;
      } else {
         total += parseInt(arrayCed[i], 10);
      }
   }

   total = total % 10 ? 10 - total % 10 : 0;
   return total;
};
