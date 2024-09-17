import TTTModell from "../modell/TTTModel.js";
import  Palya  from "../view/Palya.js";

export default class TTTController{
    constructor(){
    this.taroloElem= $(".jatekter");
    this.tttModell = new TTTModell()
    new Palya(this.tttModell.getList(),this.taroloElem)
    this.#esemenykezelo
    }

#esemenykezelo(){
$(window).on("katt",(event)=>{
   this.tttModell.lepteto(event.detail);
   new Palya(tttModell.getList(),this.taroloElem);
})
}
}