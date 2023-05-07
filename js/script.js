const list = document.querySelector('#list')
const filter = document.querySelector('.filter')
const count = document.querySelector('#count')
const items = document.querySelectorAll('.item')

fetch('http://localhost:3000/shop')
  .then(data => data.json())
  .then(listProducts => {
    let productFilter = listProducts
    showProduct(productFilter)
    function showProduct(productFilter) {
      count.innerHTML = productFilter.length
      list.innerHTML = ''
      productFilter.forEach(item => {
        const newItem = document.createElement('div')
        newItem.classList.add('item')

        // create image
        const newImage = document.createElement('img')
        newImage.src = item.image
        newItem.appendChild(newImage)

        // create name product
        const newTitle = document.createElement('div')
        newTitle.classList.add('title')
        newTitle.innerText = item.name
        newItem.appendChild(newTitle)

        // create price
        const newPrice = document.createElement('div')
        newPrice.classList.add('price')
        newPrice.innerText = `${item.price} $`
        newItem.appendChild(newPrice)

        list.appendChild(newItem)

        // modal

        newItem.addEventListener('click', () => {
          document.body.classList.add('scroll-hidden')
          const modal = document.querySelector('#modal')
          modal.classList.add('modal-inner')

          modal.parentElement.classList.add('prewies')
          const modalParent = document.querySelector('.prewies')

          modal.innerHTML = ''

          // create modal-content
          const modalContent = document.createElement('div')
          modalContent.classList.add('modal-content')
          modal.appendChild(modalContent)

          // create product img
          const productImage = document.createElement('img')
          productImage.src = item.image
          modal.appendChild(productImage)
          
          // create product name
          const productName = document.createElement('h1')
          productName.innerText = item.name
          modalContent.appendChild(productName)
          
          // create product price
          const productPrice = document.createElement('p')
          productPrice.innerText = `Price: ${item.price} $`
          modalContent.appendChild(productPrice)

          // create product color
          const productColor = document.createElement('p')
          productColor.innerText = `Color: ${item.nature.color}`
          modalContent.appendChild(productColor)

          // create product size
          const productSize = document.createElement('p')
          productSize.innerText = `Size: ${item.nature.size}`
          modalContent.appendChild(productSize)

          // create product quantity
          const productQuantity = document.createElement('p')
          productQuantity.innerText = `Quantity: ${item.quantity}`
          modalContent.appendChild(productQuantity)

          // create product brand
          const productBrand = document.createElement('p')
          productBrand.innerText = `Brand: ${item.brand}`
          modalContent.appendChild(productBrand)

          // create product type
          const productType = document.createElement('p')
          productType.innerText = `Type: ${item.nature.type}`
          modalContent.appendChild(productType)

          const closeIcon = document.createElement('span')
          closeIcon.classList.add('close')
          closeIcon.innerHTML = '&#10006;'
          modal.appendChild(closeIcon)
          const closeButton = document.querySelector('.close')
          
          // show the modal
          modal.style.display = 'flex'

          // close the modal
          closeButton.addEventListener('click', () => {
            modal.style.display = 'none'
            modalParent.classList.remove('prewies')
            document.body.classList.remove('scroll-hidden')
          })

          modalParent.addEventListener('click', event => {
            if (event.target === modalParent) {
              modal.style.display = 'none'
              modalParent.classList.remove('prewies')
              document.body.classList.remove('scroll-hidden')
            }
          })
        })
        
      })
    }

    filter.addEventListener('submit', event => {
      event.preventDefault()
      const valueFilter = event.target.elements
      productFilter = listProducts.filter(item => {
        // check caterogy
        if (valueFilter.category.value != '') {
          if (item.nature.type != valueFilter.category.value) {
            return false
          }
        }
        // check color
        if (valueFilter.color.value != '') {
          if (!item.nature.color.includes(valueFilter.color.value)) {
            return false
          }
        }
        // check brand
        if (valueFilter.brand.value != '') {
          if (!item.brand.includes(valueFilter.brand.value)) {
            return false
          }
        }
        // check size
        if (valueFilter.size.value != '') {
          if (
            !item.nature.size.includes(valueFilter.size.value.toUpperCase())
          ) {
            return false
          }
        }
        // check name
        if (valueFilter.name.value != '') {
          if (
            !item.name
              .toLocaleLowerCase()
              .includes(valueFilter.name.value.toLocaleLowerCase())
          ) {
            return false
          }
        }
        //check min price
        if (valueFilter.minPrice.value != '') {
          if (item.price < valueFilter.minPrice.value) {
            return false
          }
        }
        //check max price
        if (valueFilter.maxPrice.value != '') {
          if (item.price > valueFilter.maxPrice.value) {
            return false
          }
        }

        return true
      })
      showProduct(productFilter)
    })
  })
  .catch(error => console.log(error))