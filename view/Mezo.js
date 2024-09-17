
export default class Mezo{

    #jel;
    #szuloElem;
    #index;
    #gombElem;
    constructor(jel,index,szuloElem){
        this.#jel=jel;
        this.#szuloElem=szuloElem;
        this.#index=index;
        this.#megjelenit()
        this.#gombElem = this.#szuloElem.children("div:last-child");
        
            if (this.#jel === " ") {
                this.#esemeny()
            }
           
        
    }
    #megjelenit(){
        let txt = `<div><p>${this.#jel}</p></div>`;
        this.#szuloElem.append(txt);
        
    }
    #esemeny(){
        this.#gombElem.on("click",()=>{
            const e = new CustomEvent("katt",{detail:this.#index})
            window.dispatchEvent(e)
        })
    }
}