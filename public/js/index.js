
//FRONTEND 

(function () {
    const socket = io()

    let array = []
    const inputId=document.getElementById('idProduct')
    const inputName=document.getElementById('nameProduct')
    const products = document.getElementById('products')
    const btn = document.getElementById('btn')
    const form=document.getElementById('formProducts')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const newProduct={
            id: inputId.value,
            name:inputName.value
        }
        array.push(newProduct)
        localStorage.setItem('productos', JSON.stringify(array))
        form.reset()
    })

    btn.addEventListener('click', () => {
        const productos=JSON.parse(localStorage.getItem('productos'))
        if (productos) {
            socket.emit('products', 'array con productos')
            showProducts(productos)
        }
        else {
            socket.emit('products', 'array vacío')
            setTimeout(() => {
                products.innerHTML = `<h1>Sin productos</h1>`
            })
            setTimeout(() => {
                products.innerHTML = ``

            }, 1500)
        }
    })

    function showProducts(arrayProducts) {
        products.innerHTML=''
        arrayProducts.forEach((prod) => {
            const li = document.createElement('li')
            li.innerHTML = `${prod.id}  ${prod.name}`
            products.appendChild(li)
        })
    }

})();