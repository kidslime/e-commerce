import { Modal } from "./Modal.js";
export class ProductModal extends Modal {
    constructor(classes, {id, name, img, price, time}) {
        super(classes);
        this.id = id;
        this.name = name;
        this.img = img;
        this.price = price;
        this.time = time;
        
    }
  
    generateContent() {
        let template = '';
        let product = document.createElement('div');
        product.setAttribute('id', this.id);
        product.classList.add('modal__inner')
  
        this.img &&
        (template += `<img class="modal__content-img" src="${this.img}" alt="">`)
  
        template += `<div class="modal__content-text">`
        template += `<h2 class="modal__title">${this.name}</h2>`
        template += `<div>`
        template += `<h3 class="modal__subtitle">${this.price}-${this.time}</h3>`
        template +=`<h4 class="modal-color modal__descr">${this.price}</h4>`
        template +=`<button class="modal__btn" >Купить</button>`
                 
                  
        product.innerHTML = template;
        return product;
    }
  
    renderModal() {
        let content = this.generateContent();

        super.buildModal(content);
        document.querySelector('.modal__btn').addEventListener('click', () => {
            alert('Товар куплен!')
        })
    }
  }