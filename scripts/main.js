const serverUrl = 'https://desolate-inlet-36152.herokuapp.com/';
const itemsPath = 'items/';
const imagesPath = 'img/';

window.onload = getData();

const items = document.querySelector('.items');

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
       .then((res) => res.json())
       .then((data) => printData(data));
}

function printData(data) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'row'

    data.forEach( item => {
        itemContainer.innerHTML += createDOMelement(item)
        items.append(itemContainer)
        
    });
}

function createDOMelement(item) {
    const itemHtml = `
    <div class="col-12 col-md-6">
        <div class="item shadow mb-4" data-id=${item._id}>
            <h3 class="item-title">${item.title}</h3>
            <img class="item-image" src=${serverUrl}${imagesPath}${item.image}>

            <div class="item-details">
                <h4 class="item-price">${item.price}</h4>
                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
            </div>
        </div>
    </div>`

    return itemHtml;
}