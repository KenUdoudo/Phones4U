const discount = document.getElementById('discount')
const featured = document.getElementById('featured')
const collection = document.getElementById('collection')

const mainFeatured = document.getElementById('one')
const mainDiscount = document.getElementById('two')
const mainCollection = document.getElementById('three')


function switchOne(){
  mainFeatured.style.display = "block"
  mainDiscount.style.display = "none"
  mainCollection.style.display = "none"
}
function switchTwo(){
 mainFeatured.style.display = "none"
 mainDiscount.style.display = "block"
 mainCollection.style.display = "none"
}
function switchThree(){
  mainFeatured.style.display = "none"
  mainDiscount.style.display = "none"
  mainCollection.style.display = "block"
 }

