console.log("bai 1");
const person = {};

person.firstName = "Nguyen Van";
person.lastName = "Hoa";
delete person.lastName;

console.log("bai 2");
const checkEmpty = (obj, key) => {
  return obj[key] === undefined ? false : true;
};

console.log("bai 3");
const office = {
  em1: 123,
  em2: 345,
  em3: 456,
};

const tinhTongLuong = (offjceObj) => {
  let sum = 0;
  for (const em in offjceObj) {
    if (offjceObj.hasOwnProperty(em)) {
      const salary = offjceObj[em];
      sum += salary;
    }
  }
  return sum;
};

console.log("bai 5");
class Calculator {
  #num1;
  #num2;
  Read() {
    const value1 = parseFloat(prompt("nhập vào giá trị thứ nhất"));
    if (!isNaN(value1)) {
      alert("Giá trị vừa mới nhập không hợp lệ ");
      return;
    }
    this.#num1 = value1;
    const value2 = parseFloat(prompt("nhập vào giá trị thứ hai"));
    if (!isNaN(value2)) {
      alert("Giá trị vừa mới nhập không hợp lệ ");
      return;
    }
    this.#num2 = value2;
  }

  Sum() {
    if (this.#num1 === undefined && this.#num2 === undefined) {
      alert("Chưa khởi tạo 2 giá trị. Vui lòng gọi hàm Read() trước ");
      return;
    }

    return this.#num1 + this.#num2;
  }

  Mul() {
    if (this.#num1 === undefined && this.#num2 === undefined) {
      alert("Chưa khởi tạo 2 giá trị. Vui lòng gọi hàm Read() trước ");
      return;
    }

    return this.#num1 * this.#num2;
  }
}

console.log("Bai 6");
class Book {
  #bookId;
  #bookName;
  #price;
  #author;
  #bookStatus;
  inputData() {
    this.#bookId = prompt("Mời nhập bookID:");
    this.#bookName = prompt("Mời nhập bookName:");
    this.#price = prompt("Mời nhập giá sách:");
    this.#author = prompt("Mời nhập tác giả của sách:");
    this.#bookStatus = prompt("Mời nhập trạng thái của sách");
  }
  displayData() {
    console.log(
      `bookID: ${this.#bookId}, bookName: ${this.#bookName}, price: ${
        this.#price
      }, author: ${this.#author}, bookStatus: ${this.#bookStatus}`
    );
  }

  get bookId() {
    return this.#bookId;
  }
  set bookId(value) {
    this.bookId = value;
  }

  get bookName() {
    return this.#bookName;
  }

  set bookName(value) {
    this.bookName = value;
  }

  get price() {
    return this.#price;
  }

  set price(value) {
    this.price = value;
  }
  get author() {
    return this.#author;
  }
  set author(value) {
    this.author = value;
  }

  get bookStatus() {
    return this.#bookStatus;
  }
  set bookStatus(value) {
    this.bookStatus = value;
  }
}

const booksArr = [];

const menu = () => {
  let exit = false;
  let choice;
  while (!exit) {
    choice = parseInt(
      prompt(`
      Nhập lựa chọn: 
      1) Thêm sách 
      2) Hiển thị thông tin các sách 
      3) Sửa thông tin sách
      4) Thoát 
      `)
    );
    if (isNaN(choice) || choice === null || choice < 1 || choice > 4) {
      alert("Lựa chọn bạn vừa nhập không hợp lệ");
      continue;
    }
    switch (choice) {
      case 1:
        const newBook = new Book();
        newBook.inputData();
        booksArr.push(newBook);
        break;
      case 2:
        if (booksArr.length === 0) {
          alert("Kho sách đang trống. Hãy thêm sách");
          break;
        }
        booksArr.forEach((book) => book.displayData());
        break;

      case 3:
        const bookId = prompt("Mời bạn nhập bookID của sách muốn cập nhật:");
        if (bookId === null) {
          alert("bookId không hợp lệ");
          break;
        }
        const existingBook = booksArr.find((book) => book.bookId === bookId);
        if (!existingBook) {
          alert("IdBook không tồn tại trong giá sách");
          break;
        }
        const luaChonThayDoi = parseInt(
          prompt(` 
          Mời bạn chọn thuộc tính muốn thay đổi : 
          1)bookID, 
          2)bookName,
          3)price,
          4)author,
          5)bookStatus
          `)
        );
        if (
          isNaN(luaChonThayDoi) ||
          luaChonThayDoi === null ||
          luaChonThayDoi == null ||
          luaChonThayDoi < 1 ||
          luaChonThayDoi > 5
        ) {
          alert("Lựa chọn bạn vừa nhập không hợp lệ");
          break;
        }
        const giaTriMuonThayDoi = prompt("Mời nhập giá trị muốn thay đổi");
        if (giaTriMuonThayDoi === null) {
          alert("Giá trị muốn thay đổi không hợp lệ");
          break;
        }
        switch (luaChonThayDoi) {
          case 1:
            const temp = booksArr.find(
              (book) =>
                book.bookId.toLowerCase().trim() ===
                giaTriMuonThayDoi.toLowerCase().trim()
            );
            if (temp) {
              alert(
                "Giá trị bookId đã tồn tại trong giá sách. Không thể cập nhật"
              );
              break;
            }
            existingBook.bookId = giaTriMuonThayDoi;
            break;
          case 2:
            existingBook.bookName = giaTriMuonThayDoi;
            break;
          case 3:
            existingBook.price = giaTriMuonThayDoi;
            break;
          case 4:
            existingBook.author = giaTriMuonThayDoi;
            break;
          case 5:
            existingBook.bookStatus = giaTriMuonThayDoi;
            break;
          default:
            break;
        }
        break;

      default:
        exit = true;
        break;
    }
  }
};
