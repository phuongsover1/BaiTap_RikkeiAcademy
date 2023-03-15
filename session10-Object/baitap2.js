class Temperature {
  #doC;
  constructor(doC) {
    if (doC > -273) this.#doC = doC;
    else this.#doC = 0;
  }

  chuyenDoiDoKenvin() {
    return 273 + this.#doC;
  }

  chuyenDoiDoF() {
    return (this.#doC * 9) / 5 + 32;
  }
}

const nhietDo = new Temperature(25);
console.log(nhietDo.chuyenDoiDoF());
console.log(nhietDo.chuyenDoiDoKenvin());
