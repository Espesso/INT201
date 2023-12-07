//Node.js
// const { template } = require('@babel/core')
// const products = require('./data/products.js')

//Browser
import { products } from "./dataz/products";

function itemList(userItems) {
  const items=userItems

  const initialPage = () => {
    const input = document.querySelector('input')
    input.addEventListener('keydown',filterItemsHandler)
    showItems(items)
  }

  const filterItemsHandler = (e) => {
    const inputva = document.querySelector('input').value
    const ArrFil = items.filter( (word)=> word.keywords.toLowerCase.includes(inputva.toLowerCase()) )
    showItems(ArrFil)
  }

  const showItems = (items) => {
    const ul = document.getElementById('items')
    ul.textContent=''
    for (let index = 0; index < items.length; index++) {
      const newLi = document.createElement('li')
      newLi.textContent=(`ID:${items[index].id}, NAME:${items[index].name}, KEYWORDS:${items[index].keywords}`)
      ul.appendChild(newLi)
      
    }
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems
  }
}

// Node.js
// module.exports = itemList

Browser
export { itemList }

// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
