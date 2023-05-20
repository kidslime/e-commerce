import { Modal } from "./Modal.js";
import { ProductModal } from "./ProductModal.js";
class Products {

    render() {
        let htmlCatalog = '';
        let products = localStorageUtil.getProducts();
        CATALOG.forEach( ({id, name, price, img, time}) => {
            htmlCatalog += `
                <li data-id="${id}" class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img class="products-element__img" src="${img}">
                    <span class="products-element__price" >${price}</span>
                    <button class="products-element__btn" >Купить</button>
                    <span class="products-element__date-info">${localStorageUtil.getDayInfo(localStorageUtil.getTime(id))}</span>
            
            `;
        })

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

}

const productPage = new Products();
productPage.render();
const getProductData = (id) => {
    return CATALOG.find(elem => elem.id === id)
}

const renderProductModalWindow = (content) => {
    let modal = new ProductModal('tools-modal', content);
    modal.renderModal()
}
const addBuyProductClickHandler = () => {
    document.querySelector('.products-container').addEventListener('click', (e) => {
        if(e.target.classList.contains('products-element__btn')) {
            let clickedProductId = e.target.closest('.products-element').getAttribute('data-id');
            let clickedProductData = getProductData(clickedProductId);
            renderProductModalWindow(clickedProductData);
        }
            
    })
}
addBuyProductClickHandler();


const renderModalWindow = (content) => {
    let modal = new Modal('tools-modal');
    modal.buildModal(content)
}
