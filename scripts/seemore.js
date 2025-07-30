import { products } from "./products.js";
import { renderProductsPersonalized } from "./render.js";

const seemoreBtn  = document.querySelector('.seemore-anchor')

seemoreBtn.addEventListener('click',()=>{
    renderProductsPersonalized(products,18)
})
