import { products } from "./products.js"
import { renderProductsPersonalized } from "./render.js"


export function filter() {

    const overlayContainer = document.querySelector(".overlay-container")
    const crossBtn = document.querySelector(".cross-con")
    function closeOverlay() {
        overlayContainer.style.display = "none"
    }

    crossBtn.addEventListener('click', () => {
        closeOverlay()
    })

    const sliced = products.slice(0, 12)
    // console.log(sliced)
    const priceRadios = document.querySelectorAll('input[name="price"]')
    const lowInput = document.querySelector('.low-value')
    const highInput = document.querySelector('.high-value')
    const tickBtn = document.querySelector('.tick-btn')
    let filteredProducts



    priceRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            let min = 0, max = 9999
            const value = radio.value
            if (value === 'any') {
                filteredProducts = products.slice(0,12)
            }
            else if (value === 'custom') {
                customRange()

            }
            else {
                [min, max] = value.split('-').map(Number)
                // console.log(value)
                // console.log(min, max)
                // if(min===1000 && max===2000){
                //     console.log()
                // }
                // else if(min===2000 && max===3000){

                // }
                // else{
                // }
                filteredProducts = sliced.filter((product) => {
                    return product.price >= min && product.price <= max
                })
                // console.log(filteredProducts)

            }
            closeOverlay()
            renderProductsPersonalized(filteredProducts)

        })
    })

    function customRange() {
        tickBtn.addEventListener('click', () => {
            const lowValue = lowInput.value
            const highvalue = highInput.value
            // console.log(lowValue, highvalue)
            const filteredProducts = sliced.filter((product) => {
                return product.price >= lowValue && product.price <= highvalue
            })
            // console.log(filteredProducts)
            closeOverlay()
            renderProductsPersonalized(filteredProducts)
        })
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////

    const typeRadios = document.querySelectorAll('input[name="type"]')

    typeRadios.forEach((radio) => {
        radio.addEventListener('change', () => {
            const value = radio.value
            // console.log(value)
            if (value === 'all') {
                filteredProducts = products.slice(0,12)
            }
            else {
                filteredProducts = sliced.filter((product) => {
                    return product.type === "vintage"
                })
            }
            closeOverlay()
            renderProductsPersonalized(filteredProducts)
        })
    })
}