class Header {

    render() {
        const html =`
    
       


        
        <div class="container">
            <div class="header__inner">

                <span class="hamburger header__hamburger">
                    <span class="hamburger__line"></span>
                </span>
                <a href="#" class="logo">
                    <span class="logo__title">Clothes</span>
                    <span class="logo__subtitle">shop</span>
                </a>
               

            </div>
        </div>
   



        `;
        ROOT_HEADER.innerHTML = html;
    }

}

const header = new Header();
header.render();
console.log(ROOT_HEADER);


{/* <div class="container header__content">
<a href="index.html" class="logo">
    <span class="title">
        Fashion
    </span>
    <span class="subtitle">
        Clothes for men
    </span>
</a>  
</div>

<div class="header">
        <div class="container">
            <div class="header__inner">

                <span class="hamburger header__hamburger">
                    <span class="hamburger__line"></span>
                </span>
                <a href="#" class="logo">
                    <span class="logo__title">Cozy House</span>
                    <span class="logo__subtitle">Shelter for pets in Boston</span>
                </a>
                <nav class="header__menu">

                    <ul class="menu">
                        <li class="menu__item">
                            <a href="" class="menu__link menu__link_active">About the shelter</a>
                        </li>
                        <li class="menu__item">
                            <a href="pets.html" class="menu__link">Our pets</a>
                        </li>
                        <li class="menu__item">
                            <a href="#help" class="menu__link">Help the shelter</a>
                        </li>
                        <li class="menu__item">
                            <a href="#footer" class="menu__link">Contacts</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    </div> */}



{/* <nav class="">
<ul class="navigation">
    <li class="navigation__element"><a class="navigation__link" href="#">Clothes</a></li>
    <li class="navigation__element"><a class="navigation__link" href="#">Shoes</a></li>
    <li class="navigation__element"><a class="navigation__link" href="">Accessories</a></li>
    <!-- <li class="navigation__element"><a class="navigation__link" href="">Contacts</a></li> -->
</ul>
</nav>
<!-- <button id="switchMode">Switch</button>  --> */}