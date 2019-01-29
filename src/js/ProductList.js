class ProductList {
    constructor(list, cart) {
        this.list = list.map(el => new ProductItem(el, cart));
        let tmpList = this.render();
        if (tmpList && Array.isArray(tmpList) && tmpList.length) {
            tmpList.forEach(e => document.querySelector('[data-product="list"]').appendChild(e));
        }
    }


    render() {
        return this.list.map(el => el.render());
    }

}
