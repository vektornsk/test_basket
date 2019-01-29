class Basket {
    constructor(list) {
        this.list = list || JSON.parse(localStorage.getItem("list")) || [];
        this.render();
        this.bindEvent();
    }

    bindEvent() {
        document.addEventListener('click', event => {
            let target = event.target;

            if (target.classList.contains("btn-order")) {
                alert(`
                    "Вы добавили в корзину [${this.list.map(e => e.name)}] на сумму [${this.list.reduce(((sum, e) => sum + e.price), 0)}]"
                `);
            }
        });
    }

    add(product) {
        if (!this.list.find((el) => el.id === product.id)) {
            this.list.push(product);
            localStorage.setItem("list", JSON.stringify(this.list));
            this.render();
        }

    }

    remove(id) {
        this.list = this.list.filter((el) => {
            if (el.id !== id) {
                return el;
            }
        });
        localStorage.setItem("list", JSON.stringify(this.list));
        this.render();
    }

    onClick(id) {
        this.remove(id);
    }


    renderProduct(product) {
        let fragment = document.createDocumentFragment();
        let basket_aside__list_item = document.createElement("DIV");
        basket_aside__list_item.classList.add('basket-aside__list-item');

        let product_flat = document.createElement("DIV");
        product_flat.classList.add('product-flat');

        let product_flat__del = document.createElement("DIV");
        product_flat__del.classList.add('product-flat__del');

        let btn_del = document.createElement("BUTTON");
        btn_del.classList.add('btn-del');
        btn_del.addEventListener("click", this.onClick.bind(this, product.id));

        let product_flat__title = document.createElement("DIV");
        product_flat__title.classList.add('product-flat__title');
        product_flat__title.textContent = product.name;

        let product_flat__price = document.createElement("DIV");
        product_flat__price.classList.add('product-flat__price');
        product_flat__price.textContent = `${product.price} руб`;

        fragment.appendChild(basket_aside__list_item);
        basket_aside__list_item.appendChild(product_flat);

        product_flat.appendChild(product_flat__del);
        product_flat__del.appendChild(btn_del);

        product_flat.appendChild(product_flat__title);
        product_flat.appendChild(product_flat__price);

        return fragment;
    }

    render() {
        let container = document.querySelector('[data-basket="list"]');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        if (this.list.length) {
            let tmpList = this.list.map(el => this.renderProduct(el));
            tmpList.forEach((e) => container.appendChild(e));

        }

        let basketSum = document.querySelector('[data-basket="sum"]');
        let result = 0;
        if (this.list.length > 0) {
            result = this.list.reduce(((sum, e) => sum + e.price), 0)
        }
        basketSum.innerHTML = `Всего: <span>${result} руб.</span>`;

    }
}
