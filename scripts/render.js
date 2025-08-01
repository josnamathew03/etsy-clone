import { loadProducts, products } from "./products.js";
import { filter } from "./filter.js";

let visibleNum = 12
export function renderProductsPersonalized(products) {
    let productshtml = ''
    products.forEach((product) => {
        let discount = Math.round((product.original - product.price) / product.original * 100)

        productshtml += `  <li>
                                    <a href="" class="products-anchor">
                                        <div class="product-image-con">
                                            <div class="product-image-wrap">
                                                <div class="product-image">
                                                    <img src=${product.image} alt="">
                                                </div>
                                                <span class="pick-con">
                                                    <span class="pick">
                                                        Etsy’s Pick
                                                    </span>

                                                </span>

                                            </div>

                                        </div>

                                        <div class="product-info-con">
                                            <h3>
                                               ${product.name}
                                            </h3>
                                            <div class="pro-rating-con">
                                                <div class="pro-rating">
                                                    <div class="pro-rating-star-con">
                                                        <span class="pro-rating-text">${(product.stars.star).toFixed(1)}</span>
                                                        <div class="pro-rating-star">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <p class="pro-rating-p">(${product.stars.count})</p>
                                                    </div>
                                                    <span class="pro-rating-text pro-rating-dot">.</span>
                                                    <div class="brand-con">
                                                    ${product.showBrandIcon
                ?
                `<span class="brand-span">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span class="brand-text">
                                                            ${product.brand}
                                                        </span>`
                :
                `<span class="brand-text">
                                                            ${product.brand}
                                                        </span>`
            }
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="pro-price-con price-text">
                                                                             ${product.original
                ?
                `
                                                <p class="price-p">
                                                    <span class="price-span">
                                                        <span>₹</span>
                                                        <span>${product.price.toLocaleString('en-IN')}</span>
                                                    </span>
                                                </p>
                                                <p class="ori-price-p">
                                                        <span class="ori-price-span">
                                                            <span>₹</span>
                                                            <span>${product.original.toLocaleString('en-IN')}</span>
                                                        </span>
                                                        <span class="off-span">
                                                            <span>
                                                            (${discount}% off)
                                                            </span>
                                                        </span>
                                                    </p>`
                :
                `
                                                    <p class="price-p">
                                                        <span class="">
                                                            <span>₹</span>
                                                            <span>${product.price.toLocaleString('en-IN')}</span>
                                                        </span>
                                                    </p>
                                                    <span class=" eligible-span">
                                                        <button class="eligible-btn">
                                                            Eligible orders get 20% off
                                                         </button>
                                                    </span>`
            }

                                            </div>

                                            <div class="spacer">
                                            </div>
                                        </div>
                                    </a>
                                     <a href="" class="pro-more-con pro-rating-text">
                                        More like this
                                    </a>
                                </li>`

        // ---------------------------------------------------------
        const filterBtn = document.querySelector(".filter-btn")
        const overlayContainer = document.querySelector(".overlay-container")

        filterBtn.addEventListener('click', () => {
            overlayContainer.style.display = "block"
            filter()
        })


        



    })


    const productContainer = document.querySelector(".products-flex")
    productContainer.innerHTML = productshtml



}

function renderOther() {
    let productshtml1 = ''
    const sliced = products.slice(12, 24)

    sliced.forEach((product) => {
        let discount = Math.round((product.original - product.price) / product.original * 100)
        console.log(product)
        productshtml1 += `  <li>
                                    <a href="" class="products-anchor">
                                        <div class="product-image-con">
                                            <div class="product-image-wrap">
                                                <div class="product-image">
                                                    <img src=${product.image} alt="">
                                                </div>
                                                <span class="pick-con">
                                                    <span class="pick">
                                                        Etsy’s Pick
                                                    </span>

                                                </span>

                                            </div>

                                        </div>

                                        <div class="product-info-con">
                                            <h3>
                                               ${product.name}
                                            </h3>
                                            <div class="pro-rating-con">
                                                <div class="pro-rating">
                                                    <div class="pro-rating-star-con">
                                                        <span class="pro-rating-text">${(product.stars.star).toFixed(1)}</span>
                                                        <div class="pro-rating-star">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <p class="pro-rating-p">(${product.stars.count})</p>
                                                    </div>
                                                    <span class="pro-rating-text pro-rating-dot">.</span>
                                                    <div class="brand-con">
                                                    ${product.showBrandIcon
                ?
                `<span class="brand-span">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span class="brand-text">
                                                            ${product.brand}
                                                        </span>`
                                                        :
                                                        `<span class="brand-text">
                                                         ${product.brand}
                                                           </span>`
                                                    }
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="pro-price-con price-text">
                                                                   
                                                <p class="price-p">
                                                    <span class="price-span">
                                                        <span>₹</span>
                                                        <span>${product.price.toLocaleString('en-IN')}</span>
                                                    </span>
                                                </p>
                                                <p class="ori-price-p">
                                                        <span class="ori-price-span">
                                                            <span>₹</span>
                                                            <span>${product.original.toLocaleString('en-IN')}</span>
                                                        </span>
                                                        <span class="off-span">
                                                            <span>
                                                            (${discount}% off)
                                                            </span>
                                                        </span>
                                                    </p>
                               

                                            </div>

                                            <div class="spacer">
                                            </div>
                                        </div>
                                    </a>
                                     <a href="" class="pro-more-con pro-rating-text">
                                        More like this
                                    </a>
                                </li>`
    })
    const productBackContainer = document.querySelector(".products-back-flex")
    productBackContainer.innerHTML = productshtml1


    let productshtml2 = ''
    const sliced2 = products.slice(24, 36)

    sliced2.forEach((product) => {
        let discount = Math.round((product.original - product.price) / product.original * 100)
        console.log(product)
        productshtml2 += `  <li>
                                    <a href="" class="products-anchor">
                                        <div class="product-image-con">
                                            <div class="product-image-wrap">
                                                <div class="product-image">
                                                    <img src=${product.image} alt="">
                                                </div>
                                                <span class="pick-con">
                                                    <span class="pick">
                                                        Etsy’s Pick
                                                    </span>

                                                </span>

                                            </div>

                                        </div>

                                        <div class="product-info-con">
                                            <h3>
                                               ${product.name}
                                            </h3>
                                            <div class="pro-rating-con">
                                                <div class="pro-rating">
                                                    <div class="pro-rating-star-con">
                                                        <span class="pro-rating-text">${(product.stars.star).toFixed(1)}</span>
                                                        <div class="pro-rating-star">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 1 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="M20.828 9.154l-6.008-.528-2.36-5.545h-.92L9.18 8.626l-6.007.528-.284.876 4.548 3.954-1.353 5.871.744.541 5.172-3.1 5.172 3.1.744-.54-1.352-5.871 4.548-3.955-.284-.876z">
                                                                </path>
                                                            </svg>
                                                        </div>
                                                        <p class="pro-rating-p">(${product.stars.count})</p>
                                                    </div>
                                                    <span class="pro-rating-text pro-rating-dot">.</span>
                                                    <div class="brand-con">
                                                    ${product.showBrandIcon
                ?
                `<span class="brand-span">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                                aria-hidden="true" focusable="false">
                                                                <path
                                                                    d="m20.902 7.09-2.317-1.332-1.341-2.303H14.56L12.122 2 9.805 3.333H7.122L5.78 5.758 3.341 7.09v2.667L2 12.06l1.341 2.303v2.666l2.318 1.334L7 20.667h2.683L12 22l2.317-1.333H17l1.342-2.303 2.317-1.334v-2.666L22 12.06l-1.341-2.303V7.09zm-6.097 6.062.732 3.515-.488.363-2.927-1.818-3.049 1.697-.488-.363.732-3.516-2.56-2.181.121-.485 3.537-.243 1.341-3.273h.488l1.341 3.273 3.537.243.122.484z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                        <span class="brand-text">
                                                            ${product.brand}
                                                        </span>`
                                                        :
                                                        `<span class="brand-text">
                                                         ${product.brand}
                                                           </span>`
                                                    }
                                                    </div>

                                                </div>

                                            </div>
                                            <div class="pro-price-con price-text">
                                                                   
                                                <p class="price-p">
                                                    <span class="price-span">
                                                        <span>₹</span>
                                                        <span>${product.price.toLocaleString('en-IN')}</span>
                                                    </span>
                                                </p>
                                                <p class="ori-price-p">
                                                        <span class="ori-price-span">
                                                            <span>₹</span>
                                                            <span>${product.original.toLocaleString('en-IN')}</span>
                                                        </span>
                                                        <span class="off-span">
                                                            <span>
                                                            (${discount}% off)
                                                            </span>
                                                        </span>
                                                    </p>
                               

                                            </div>

                                            <div class="spacer">
                                            </div>
                                        </div>
                                    </a>
                                     <a href="" class="pro-more-con pro-rating-text">
                                        More like this
                                    </a>
                                </li>`
    })
    const productClassContainer = document.querySelector(".products-class-flex")
    productClassContainer.innerHTML = productshtml2
}

loadProducts().then(() => {
    
    renderProductsPersonalized(products.slice(0,12))
    renderOther()
})
