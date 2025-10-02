
/**
 * Esta función determina el valor de lacarta de acuerdo a su tipo:
 * 
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 * 
 * @param { String } carta recibe la carta en formato String
 * @returns { Int } regresa un valor entero (INT)
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}