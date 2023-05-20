class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }
    // выводит содержимое localStorage
    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName);
        if (productsLocalStorage !== null) {

            return JSON.parse(productsLocalStorage);
        }
        return [];
    }

    putProductsObj(id, idx) {
        let products = this.getProducts();/// [{id: el1, time: 1.1.1.1}]
        let obj = {};
        const productsIds = products.map((elem) => {
            return JSON.parse(elem).id;
        }).reduce((acc, item) => {
            if (acc.includes(item)) {
              return acc; // если значение уже есть, то просто возвращаем аккумулятор
            }
            return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
        }, []); ///['el1', 'el2']
        const index = productsIds.indexOf(id);// indexOf('el1') -- 0
        if(index === -1) {
            obj.id = id;
            obj.time = new Date();
            products.push(JSON.stringify(obj));
            CATALOG[idx].time = obj.time
            console.log( CATALOG[idx].time);
            localStorage.setItem(this.keyName, JSON.stringify(products))
    
        } 
        else {
            const catalogIds = CATALOG.map(elem => elem.id).reduce((acc, item) => {
                if (acc.includes(item)) {
                  return acc; // если значение уже есть, то просто возвращаем аккумулятор
                }
                return [...acc, item]; // добавляем к аккумулятору и возвращаем новый аккумулятор
              }, []);

           


            products.forEach((elem,index) => {
                let id = JSON.parse(elem).id;

                if(!catalogIds.includes(id)) {
                    products.splice(index, 1);
                    
                }
            })
            
            localStorage.setItem(this.keyName, JSON.stringify(products))
        }   
    }

    getTime(id) {
        let products = this.getProducts();
        console.log(products)
        let f = products.find(element => JSON.parse(element).id === id);
        let dateStr = JSON.parse(f).time;
        dateStr = dateStr.slice(3,6) +  dateStr.slice(0, 2) + dateStr.slice(5);
        dateStr.slice(0, 2)
        
        return dateStr; //new Date('20.05.23')
    }

    getDayInfo(date) {
        console.log()
        const dt = new Date(date);
        console.log(dt)
        let dayWeek = ['Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'][dt.getDay()];

        const getMonthName = (date) =>
        date.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
        }).split(' ')[1];

        let year = dt.getFullYear();
        let month = dt.getMonth();
        let today = new Date(year, month, 0).getTime();
        let now = dt.getTime();
        let week = Math.ceil((now - today) / (1000 * 60 * 60 * 24 * 7));
        console.log(week)
        console.log(today)
        return `${dayWeek}, ${week} неделя ${getMonthName(dt)} ${year} года`;
    }

    
}



const localStorageUtil = new LocalStorageUtil();



    CATALOG.forEach( (elem, idx) => {
        localStorageUtil.putProductsObj(elem.id, idx);
    })

    console.log(localStorageUtil.getDayInfo(localStorageUtil.getTime('el15')));


