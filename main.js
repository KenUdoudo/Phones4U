const discount = document.getElementById('discount')
const news = document.getElementById('news')
const collection = document.getElementById('collection')

const mainDiscount = document.getElementById('one')
const mainNews = document.getElementById('two')
const mainCollection = document.getElementById('three')


function switchOne(){
  mainDiscount.style.display = "block"
  mainNews.style.display = "none"
  mainCollection.style.display = "none"
}
function switchTwo(){
 mainDiscount.style.display = "none"
 mainNews.style.display = "block"
 mainCollection.style.display = "none"
}
function switchThree(){
  mainDiscount.style.display = "none"
  mainNews.style.display = "none"
  mainCollection.style.display = "block"
 }

