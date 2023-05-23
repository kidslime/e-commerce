const CATALOG = [
    {
        id: 'el1',
        name: 'FENDER SQUIER BULLET STRAT HT HSS BLK',
        img: 'https://i.ibb.co/QJfqs4K/1.jpg',
        price: 13600,
        type: 'clothes'
    },
    {
        id: 'el2',
        name: 'FENDER SQUIER AFFINITY',
        img: 'https://i.ibb.co/pKrG5ZJ/2.jpg',
        price: 23900,
        type: 'clothes'
    },
    {
        id: 'el3',
        name: 'IBANEZ GIO GRG121DX-BKF BLACK FLAT',
        img: 'https://i.ibb.co/NnvcYhR/3.jpg',
        price: 21600,
        type: 'clothes'
    },
    {
        id: 'el4',
        name: 'EPIPHONE LES PAUL STUDIO LT EBONY',
        img: 'https://i.ibb.co/4Tg91WL/4.jpg',
        price: 19900,
        type: 'shoes'
    },
    {
        id: 'el5',
        name: 'FENDER SQUIER BULLET TREM HSS AWT',
        img: 'https://i.ibb.co/MC7sy1F/5.jpg',
        price: 14500,
        type: 'shoes'
    },
    {
        id: 'el6',
        name: 'FENDER SQUIER BULLET MUSTANG HH BLK',
        img: 'https://i.ibb.co/qNBWPb0/6.jpg',
        price: 14600,
        type: 'clothes'
      
    },
    {
        id: 'el7',
        name: 'FENDER SQUIER BULLET STRAT HT AWT',
        img: 'https://i.ibb.co/WH1h2wV/7.jpg',
        price: 13600,
        type: 'clothes'
       
    },
    {
        id: 'el8',
        name: 'JACKSON JS22-7 DINKY SATIN BLACK',
        img: 'https://i.ibb.co/2cBg9g9/8.jpg',
        price: 28700,
        type: 'clothes'
        
    },
    {
        id: 'el9',
        name: 'JACKSON JS11 DINKY OLYMPIC WHITE',
        img: 'https://i.ibb.co/wKxFRM8/9.jpg',
        price: 18100,
        type: 'clothes'
    },
    {
        id: 'el10',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'sd'
        
    },
    {
        id: 'el11',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'clothes'
    },
    {
        id: 'el12',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'clothes'
    },
    {
        id: 'el13',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'clothes'
    },
    {
        id: 'el14',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'clothes'
    },
    {
        id: 'el15',
        name: 'YAMAHA PACIFICA 012 WH',
        img: 'https://i.ibb.co/30qJcZX/10.jpg',
        price: 15990,
        type: 'clothes'
    },
    
    
    
];


const categoryList = CATALOG.reduce((acc,elem) => {
    if(elem.type){
        return [...acc, elem.type] 
    }
    return [...acc]
},[]);
const category = [...new Set(categoryList)]

