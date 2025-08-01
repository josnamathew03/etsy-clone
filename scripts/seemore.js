import { products, loadProducts } from "./products.js";
import { renderProductsPersonalized } from "./render.js";
let fixedCount = 12
let stepCount = 6
// loadProducts().then(() => {
 async function seemore() {
    await loadProducts()
    const seemoreBtn = document.querySelector('.seemore-anchor')
    const seeLessBtn = document.querySelector('.seeless-anchor')

    const seemoreCon = document.querySelector('.seemore-container')
    const seelessCon = document.querySelector('.seeless-container')




    console.log(fixedCount, products.length)
    console.log(products.length >= fixedCount)



    seemoreBtn.addEventListener('click', () => {
        if (products.length >= fixedCount + 5) {

            console.log("tap")
            fixedCount += stepCount
            const slicedProducts = products.slice(0, fixedCount)
            renderProductsPersonalized(slicedProducts)
        }
        else {
            seemoreCon.style.display = "none"
        }

    })


}
seemore()

// })
