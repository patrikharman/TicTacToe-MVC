import Mezo  from "../view/Mezo.js";

export default class Palya{
    #lista = [];
    #szuloElem;
    constructor(lista,szuloElem){
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.#szuloElem.empty();
        this.kiir();
    }
    kiir(){
        this.#lista.forEach((elem,index) => {
            new Mezo(index,elem,this.#szuloElem);
        })
    }
    
}