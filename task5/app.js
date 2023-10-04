'use strict'

class Vyraz {
    constructor(str) {
        this.str = str;
    }

    summ() {
        return eval(this.str)
    }
}

let c = prompt('Введіть рівняння')

const s = new Vyraz(c);

console.log(s.summ());