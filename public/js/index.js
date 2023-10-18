
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
        form.reset()
    })

    btn.addEventListener('click', () => {
        if (array.length != 0) {
            socket.emit('products', 'array con productos')
            showProducts(array)
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
        arrayProducts.forEach((prod) => {
            products.innerHTML=''
            const div = document.createElement('div')
            div.innerHTML = `${prod.id}  ${prod.name}`
            products.appendChild(div)
        })
    }

})();