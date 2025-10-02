
/** Esta función me permite tomar una carta del deck
 * @param {Array<String>} deck - recibe el deck como arreglo de String
 * 
 * @returns {String} carta - retorna la ultima carta del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}