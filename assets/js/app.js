const imgEl = document.querySelector('.char-img');
const nameEl = document.querySelector('.name');

const pubK = 'c1dedefd4d84b0f6d13c9917c21e68a7';
const privK = '7dffdaeb4e97823cd9c365b74ced839f09816b2b';
const time = new Date().getTime();
// console.log('time: ' + time);
const md5hash = md5(time + privK + pubK);
// console.log('hash: ' + md5hash);

// fetching api for random characters name and image
function getRandomChar() {
  fetch(
    `https://gateway.marvel.com/v1/public/characters/${randomId}?&limit=100&ts=${time}&apikey=${pubK}&hash=${md5hash}`
  ).then(function (response) {
    return response.json().then(function (data) {
      const charImg =
        data.data.results[0].thumbnail.path + '/portrait_uncanny.jpg';
      // console.log(charImg);
      const charName = data.data.results[0].name;
      // console.log(charName);

      imgEl.src = charImg;
      nameEl.textContent = charName;
    });
  });
}
getRandomChar();
