class Navigation {
    
    render() {
        let navigation = '';
        category.forEach(elem => {
            navigation += `
            <li class="menu__item">
                <a href="#${elem}" class="menu__link">${elem}</a>
            </li>

            `;
        })
        const html = `
        <nav class="header__menu">
            <ul class="menu">
                ${navigation}
            </ul>
        </nav>
        `
        document.querySelector('#header').firstElementChild.firstElementChild.innerHTML+=html;
        
    }


}

const navigation = new Navigation();
navigation.render();

