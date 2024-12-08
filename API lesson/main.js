

let data = {
    category: "men's clothing",
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 22.6
}


const postApi = () => {
    try {
        axios.post("https://655f2b37879575426b44b8f7.mockapi.io/products", data)
    } catch (error) {
        console.log(error);
    }
}
postApi()