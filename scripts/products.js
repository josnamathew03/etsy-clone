 export let products = []
 export async function loadProducts() {
    const response = await fetch('./data/products.json')
    const data = await response.json()
    products = data
    // console.log(products)
}