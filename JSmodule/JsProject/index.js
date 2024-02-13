
const ROOT_HEADER = document.getElementById('root-header');
const ROOT_PRODUCTS = document.getElementById('root-products');
const ROOT_STORE_CARD = document.getElementById('root-store-card')
const ROOT_LOADER = document.getElementById('root-loader')
const ROOT_ERROR = document.getElementById('root-error')


class LocalStorageUtil {
    keyName;

    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsJSON = localStorage.getItem(this.keyName);
        if (productsJSON) {
            return JSON.parse(productsJSON);
        } else {
            return [];
        }
    }

    putProducts(id) {
        const products = this.getProducts();
        let pushProduct = false;

        const index = products.findIndex(product => product.id === id);
        if (index === -1) {
            products.push({ id: id });
            pushProduct = true;
        } else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));
        return { pushProduct, products };
    }
}

const localStorageUtil = new LocalStorageUtil(); 

class StoreCard {
    constructor() {}

    handlerClear() {
        //const ROOT_STORE_CARD = document.getElementById('ROOT_STORE_CARD');
        if (ROOT_STORE_CARD) {
            ROOT_STORE_CARD.innerHTML = '';
        } else {
            console.error("ROOT_STORE_CARD element not found.");
        }
    }

    render() {
        
        const products = localStorageUtil.getProducts();

        let htmlCatalog = '';
        let sumCatalog = 0;

        for (const product of products) {
            htmlCatalog += `<div>${product.name} - ${product.price}</div>`;
            sumCatalog += product.price;
        }

        const html = `
            <table>
                ${htmlCatalog}
            </table>
            <div>Total: ${sumCatalog}</div>
        `;

        
        if (ROOT_STORE_CARD) {
            ROOT_STORE_CARD.innerHTML = html;
        } else {
            console.error("ROOT_STORE_CARD element not found.");
        }
    }
}






class Products {
    constructor() {
        this.classNameActive = 'active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocalStorage(element, id) {
        
        localStorageUtil.putProducts(id);

        const productsStore = localStorageUtil.getProducts();
        headerPage.render(productsStore.length);

        if (element.classList.contains(this.classNameActive)) {
            element.innerHTML = this.labelAdd;
            element.classList.remove(this.classNameActive);
        } else {
            element.innerHTML = this.labelRemove;
            element.classList.add(this.classNameActive);
        }
    }

    render() {
        
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        for (const product of CATALOG) {
            const isActive = productsStore.some(p => p.id === product.id);
            const buttonText = isActive ? this.labelRemove : this.labelAdd;
            const buttonClass = isActive ? this.classNameActive : '';

            htmlCatalog += `
                <div>
                    <span>${product.name} - ${product.price}</span>
                    <button class="${buttonClass}" onclick="productsPage.handlerSetLocalStorage(this, ${product.id})">${buttonText}</button>
                </div>
            `;
        }

        
        if (ROOT_PRODUCTS) {
            ROOT_PRODUCTS.innerHTML = htmlCatalog;
        } else {
            console.error("ROOT_PRODUCTS element not found.");
        }
    }
}

const productsPage = new Products();



class Header {
    constructor(storeCard) {
        this.storeCard = storeCard;
    }

    handlerOpenStoreCardPage() {
        this.storeCard.render();
    }

    render(count) {
        const html = `
            <div>Product Count: ${count}</div>
            <button onclick="header.handlerOpenStoreCardPage()">Open Store Card</button>
        `;

        
        if (ROOT_HEADER) {
            ROOT_HEADER.innerHTML = html;
        } else {
            console.error("ROOT_HEADER element not found.");
        }
    }
}

class LoaderPage {
    constructor() {}

    render() {
        ROOT_LOADER.innerHTML = 'Loading...';
    }

    handleClear() {
        ROOT_LOADER.innerHTML = '';
    }
}

const loaderPage = new LoaderPage();
const headerPage = new Header();



function render() {
    const localStorageUtil = new LocalStorageUtil();
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

function loadData() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            CATALOG = data.products;

            setTimeout(() => {
                loaderPage.handleClear();
                render();
            }, 1000);
        })
        .catch(() => {
            loaderPage.handleClear();
            errorPage.render();
        });
}

loaderPage.render();

let CATALOG = [];

loadData();
