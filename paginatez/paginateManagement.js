
// npm test CommonJS
// const { template } = require('@babel/core')
// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

// browser ES module

import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

function paginateManagement(items, rows) {
  const products = items
  const rowsPerPage = rows

  const showPageNumbers = () => {
    const totalPage= getTotalPages(products , rowsPerPage)

    const pageDiv = document.querySelector('.pagination') //เข้าถึง .pagination
    for (let  page= 1; page<=totalPage; page++) { //ลูปโดย ตัวแปร page =1 และ เลข page <= row เลขpageจะเพิ่มขึ้น
      const buttonPage = document.createElement('button') //ให้สร้างปุ่ม
      buttonPage.textContent = page //ด้านในปุ่มจะมีเลขตาม เลข page
      buttonPage.setAttribute('id',page) //id ของ page จะเป็นตามเลข page
      pageDiv.appendChild(buttonPage) // นำปุ่มไปแปะที่ page div และเอาไปต่ท้ายโดย appendChild
      buttonPage.addEventListener('click', pageHandler) //เมื่อกดที่ปุ่มเรียกใข้ pageHandler
    }
  }
  const showItemsOfCurrentPage = (currentPageNumber) => {
    const ItemsOfCurrent = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)
    const productsUl = document.getElementById('products')
    ItemsOfCurrent.forEach((item)=> {
        const liElement = document.createElement('li')
        liElement.textContent= `ID${item.id} Name${item.name}`
        productsUl.appendChild(liElement)
    })
    
  }

  const pageHandler = (event) => {
    const productsUl = document.getElementById('products')
    productsUl.textContent=''

    const pageStyle = document.querySelectorAll('button')
    pageStyle.forEach((page)=>(page.style = 'border: 1px solid #999'))

    const currentPage = event?.target.id ?? 1
    console.log(currentPage)
    showItemsOfCurrentPage(currentPage)

    const targetPageButton = document.getElementById(currentPage)
    targetPageButton.style = 'background-color: LightSteelBlue'

  }



return {
  showPageNumbers,
  pageHandler
}
}
// npm test CommonJS
// module.exports = paginateManagement

// browser ES module
export { paginateManagement }
const { showPageNumbers,  pageHandler } =
    paginateManagement(products, 10)
showPageNumbers()
pageHandler()
