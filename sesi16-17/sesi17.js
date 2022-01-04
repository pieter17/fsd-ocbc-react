// function display(value) {
//   console.log(value);
// }

// function calculator(number1, number2, callback) {
//   const result = number1 + number2;
//   callback(result);
// }

// calculator(10, 15, display);

const axios = require('axios');

function buatJanji(message) {
  return new Promise((resolve, reject) => {
    if (message === '') return reject('Pesan harus di isi');

    return resolve('berhasil ditepati');
  });
}

// function ambilData() {
//   return new Promise((resolve, reject) => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/todos')
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   });
// }

// ambilData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

buatJanji('')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
