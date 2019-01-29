class ProductItem {
    constructor(product) {
        Object
            .keys(product)
            .map(field => this[field] = product[field]);
    }

    onClick() {
        basket.add(this);

    }

    render() {

        let fragment = document.createDocumentFragment();
        let product_item = document.createElement("DIV");
        product_item.classList.add("product-item");
        product_item.dataset.product_id = this.id;

        let product__list_item = document.createElement("DIV");
        product__list_item.classList.add("product__list-item");

        let product_item__preview = document.createElement("DIV");
        product_item__preview.classList.add("product-item__preview");

        let product_item__img = document.createElement("IMG");
        product_item__img.classList.add("product-item__img");
        product_item__img.src = this.preview;

        let product_item__content = document.createElement("DIV");
        product_item__content.classList.add("product-item__content");

        let product_item__content_desc = document.createElement("DIV");
        product_item__content_desc.classList.add("product-item__content-desc");

        let product_item__title = document.createElement("DIV");
        product_item__title.classList.add("product-item__title");
        product_item__title.textContent = this.name;

        let product_item__desc = document.createElement("DIV");
        product_item__desc.classList.add("product-item__desc");
        product_item__desc.textContent = this.desc;

        let product_item__content_price = document.createElement("DIV");
        product_item__content_price.classList.add("product-item__content-price");

        let product_item__price = document.createElement("DIV");
        product_item__price.classList.add("product-item__price");
        product_item__price.textContent = `${this.price} руб.`;

        let product_item__add_cart = document.createElement("DIV");
        product_item__add_cart.classList.add("product-item__add-cart");

        let btn_cart = document.createElement("BUTTON");
        btn_cart.classList.add("btn-cart");
        btn_cart.textContent = "В корзину!";
        btn_cart.addEventListener("click", this.onClick.bind(this));

        fragment.appendChild(product__list_item);

        product__list_item.appendChild(product_item);

        product_item.appendChild(product_item__preview);
        product_item.appendChild(product_item__content);

        product_item__content.appendChild(product_item__content_desc);
        product_item__content.appendChild(product_item__content_price);

        product_item__content_desc.appendChild(product_item__title);
        product_item__content_desc.appendChild(product_item__desc);
        product_item__content_price.appendChild(product_item__price);
        product_item__content_price.appendChild(product_item__add_cart);

        product_item__add_cart.appendChild(btn_cart);
        product_item__preview.appendChild(product_item__img);

        return fragment;
    }

}
