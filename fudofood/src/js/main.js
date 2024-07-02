// index

const ListProduct = [{
        id: 1,
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        price: 30,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Hamburger.png",
        time: "30 Minutes",
        type: "Snack",
        category: 1
    },
    {
        id: 2,
        name: "Fresh Lime Roasted Salmon",
        price: 10,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Fish.png",
        time: "30 Minutes",
        type: "Fish",
        category: 1
    },
    {
        id: 3,
        name: "The Best Easy One Pot Chicken and Rice",
        price: 20,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Potchicken.png",
        time: "30 Minutes",
        type: "Snack",
        category: 3
    },
    {
        id: 4,
        name: "Fresh and Healthy Mixed Mayonnaise",
        price: 50,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Healthy.png",
        time: "30 Minutes",
        type: "Healthy",
        category: 4
    },
    {
        id: 5,
        name: "The Creamiest Creamy Chicken",
        price: 60,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Noodles.png",
        time: "30 Minutes",
        type: "Noodles",
        category: 3
    },
    {
        id: 6,
        name: "Fruity Pancake with Orange & Blueberry",
        price: 15,
        desc: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "./src/img/index/Sweet.png",
        time: "30 Minutes",
        type: "Sweet",
        category: 3
    }
]
const ListCategory = [{
        id: 1,
        name: "Breakfast",
        image: "./src/img/index/breakfast.png",
    },
    {
        id: 2,
        name: "Vegan",
        image: "./src/img/index/vegan.png",
    },
    {
        id: 3,
        name: "Meat",
        image: "./src/img/index/meat.png",
    },
    {
        id: 4,
        name: "Dessert",
        image: "./src/img/index/dessert.png",
    },
    {
        id: 5,
        name: "Lunch",
        image: "./src/img/index/lunch.png",
    },
    {
        id: 6,
        name: "Chocolate",
        image: "./src/img/index/chocolate.png",
    }
]

// Show product

function showProduct(data) {
    const popularList = document.querySelector(".popular__product-infor");
    if (popularList) {
        popularList.innerHTML = '';
        for (let item of data) {
            // console.log(item);
            popularList.innerHTML += `
                <div class="popular__product-grid">
                    <a href="./detail.html?id=${item.id}"><img class="popular__product-img" src="${item.image}" alt=""></a>
                    <p class="popular__product-p"><a href="./detail.html?id=${item.id}">${item.name}</a></p>
                    <div class="popular__product-text">
                        <div class="timecook">
                            <img src="src/img/index/Clock.png" alt="">
                            <p>${item.time}</p>
                        </div>
                        <div class="typefood">
                            <img src="src/img/index/ForkKnife.png" alt="">
                            <p>${item.type}</p>
                        </div>
                    </div>
                </div>
            `
        }
    }
}
showProduct(ListProduct);

// Filter product

const filterSelect = document.querySelector("#filter-select");

function filterProduct() {
    const under30 = ListProduct.filter(function(product) {
        return product.price < 30;
    });
    const over30 = ListProduct.filter(function(product) {
        return product.price >= 30;
    });
    if (filterSelect.value == "under30") {
        showProduct(under30);
    } else if (filterSelect.value == "over30") {
        showProduct(over30);
    } else {
        showProduct(ListProduct);
    }
}
if (filterSelect) {
    filterSelect.addEventListener("change", filterProduct);
}

// Detail product

function detailProduct() {
    const prdId = new URLSearchParams(window.location.search).get('id');
    // console.log(prdId);
    if (prdId) {
        const product = ListProduct.find(function(item) {
            return item.id == prdId;
        });
        const detailProductDiv = document.querySelector(".food");
        detailProductDiv.innerHTML = `
            <div class="food__infor">
                <div class="food__content">
                    <h1>${product.name}</h1>
                    <span>$${product.price}</span>
                    <p>${product.desc}</p>
                </div>
                <div class="addtocart">
                    <input type="text" placeholder="Quantity">
                    <button onclick="addCartItem(${product.id})" class="btnAddToCart">Add To Cart</button>
                </div>
            </div>
            <div class="food__img">
                <img src="${product.image}" alt="">
            </div>
        `
    }
}
detailProduct();

// Show category

function showCategory(data) {
    const categoryList = document.querySelector(".category__grid");
    if (categoryList) {
        categoryList.innerHTML = '';
        for (let item of data) {
            // console.log(categoryList);
            categoryList.innerHTML += `
                <div class="category__grid-infor">
                    <img src="${item.image}" alt="">
                    <p >${item.name}</p>
                </div>
            `
        }
    }
}
showCategory(ListCategory);

// List category

function listCategory() {
    const cateList = document.querySelector('#cate-list');
    // console.log(cateList);
    if (cateList) {
        for (let item of ListCategory) {
            cateList.innerHTML += `
                <li><a href="./product.html?cateId=${item.id}">${item.name}</a></li>
            `
        }
    }
}
listCategory();

// List product page

function listProductPage(data) {
    const liPrdPage = document.querySelector(".product__product-infor");
    if (liPrdPage) {
        liPrdPage.innerHTML = '';
        for (let item of data) {
            // console.log(liPrdPage);
            liPrdPage.innerHTML += `
                <div class="product__product-infor-grid">
                    <a href="./detail.html?id=${item.id}"><img src="${item.image}" alt=""></a>
                    <p><a href="./detail.html?id=${item.id}">${item.name}</a></p>
                    <span>$${item.price}</span>
                    <br>
                    <button onclick="addCartItem(${item.id});" class="addcart" type="">Add To Cart</button>
                </div>
            `
        }
    }
}

// List product

function reRender() {
    const cateId = new URLSearchParams(window.location.search).get('cateId');
    const productByCategory = ListProduct.filter(function(item) {
        return item.category == cateId;
    })
    if (cateId) {
        listProductPage(productByCategory);
    } else {
        listProductPage(ListProduct);
    }

}
reRender();

// Add to cart

const ListCart = [];
const cartBlock = document.querySelector('.cart__block'); // cart item
function addCartItem(check) {
    const cart_product = ListProduct.find(function(item) {
        return item.id == check
    })
    ListCart.push(cart_product);
    console.log(ListCart);
    showCart();
}

// Show cart

function showCart() {
    if (cartBlock) {
        cartBlock.innerHTML = ""
        for (let item of ListCart) {
            cartBlock.innerHTML += `
                <div class="cart__list">
                    <div class="cart__list-item">
                        <div class="cart__list-item-img">
                            <img src="${item.image}" alt="" class="cart__list-item-img--img">
                        </div>
                        <div class="cart__list-item-info">
                            <div class="cart__list-item-info-name">
                                <h5 class="cart__list-item-info-name--name">${item.name}</h5>
                            </div>
                            <div class="cart__list-item-info-price">
                                <p class="cart__list-item-info-price">$${item.price}</p>
                            </div>
                            <div class="cart__list-item-info-amount">
                                <button onclick="decrement()">-</button>
                                <input class="crement" type="number" min="1" value="1">
                                <button onclick="increment()">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}

function increment() {
    document.querySelector('.crement').stepUp();
}

function decrement() {
    document.querySelector('.crement').stepDown();
}