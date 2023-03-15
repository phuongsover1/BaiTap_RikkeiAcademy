class Rectangle {
  #width;
  #height;
  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  tinhChuVi() {
    return (this.#width + this.#height) * 2;
  }

  tinhDienTich() {
    return this.#width * this.#height;
  }
}
