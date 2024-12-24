/* fungsi logika if jika gambar dklik equal maka berubah jadi gambar kedua, jika tidak maka kembali lagi 
ke gambar 1 */
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "image/ying.jpeg") {
    myImage.setAttribute("src", "image/claude.webp");
  } else {
    myImage.setAttribute("src", "image/ying.jpeg");
  }
});

/* define button sm h1 jadi variabel */
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

/* prompt (hampir sama kayak alert tapi bisa store value) nama habis tu ganti heading serta 
munculkan value myname yg udah disimpan tadi pakai localstorage.setItem (string wajib pake lambang `)*/
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName()
  }
  else 
  {localStorage.setItem("name", myName);
  myHeading.textContent = `Selamat Datang, ${myName}`;
}
}

/* fungsi if pakai logika not yaitu ! jika nama tidak tersimpan maka run setusername function, 
else maka munculkan nama yg udah disimpan pakai localstorage.getItem*/
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Selamat Datang Kembali, ${storedName}`;
}

/* fungsi klik terhadap button setusername */
myButton.addEventListener("click", () => {
  setUserName();
});



  