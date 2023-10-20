
//FRONTEND 

(function () {
    const socket = io()   

    const productsId=document.getElementById('products')
    const products=JSON.parse(localStorage.getItem('productos'))
    
    socket.emit('realTime-connected', 'realTime')

    if(products){
        socket.emit('products','there are products in the array')
        function updateProducts(){
            productsId.innerHTML=''
            products.forEach((prod)=>{
                const li= document.createElement('li')
                li.innerHTML=`${prod.id}  ${prod.name}
                <button id="${prod.id}">Delete</button>`
                productsId.appendChild(li)
                const btn=document.getElementById(`${prod.id}`)
                btn.addEventListener('click',()=>{
                    console.log(btn.id)
                    const productArray=products.find(prod=>prod.id==btn.id)
                    const position=products.indexOf(productArray)
                    console.log(position)
                    products.splice(position,1)
                    console.log(products)
                    updateProducts()
                })
            })

        }
        updateProducts()
        return
    }
    else{
        socket.emit('products','there are no products in the array')
    }

})();