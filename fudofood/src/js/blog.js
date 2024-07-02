// blog

const ListBlog = [{
        id: 1,
        title: 'Big and Juicy Wagyu Beef Cheeseburger',
        image: './src/img/blog/blog1.png',
        content: 'Perfectly springy baked coconut shrimp piled high on a mountain of steamy pea-speckled and lemony rice and drizzles upon drizzles of a beautiful honey butter sauce. This is exactly the spring vacay you need!',
        blogCateId: 6
    },
    {
        id: 2,
        title: 'Fresh Lime Roasted Salmon',
        image: './src/img/blog/blog2.png',
        content: 'We are bringing you a plate of sunshine for dinner! Perfectly golden-crisp salmon partnered next to oven-roasted asparagus and a buttery, rich, creamy leek sauce piled on crispy potatoes.',
        blogCateId: 2
    },
    {
        id: 3,
        title: 'The Best Easy One Pot Chicken and Rice',
        image: './src/img/blog/blog3.png',
        content: 'Saucy, sticky, crispy, sweet and savory Cashew Chicken! Just like your favorite takeout, but made easy at home.',
        blogCateId: 4
    },
    {
        id: 4,
        title: 'Fresh and Healthy Mixed Mayonnaise',
        image: './src/img/blog/blog4.png',
        content: 'Elote Quinoa Salad made with velvety peppers confit, juicy sweet corn, homemade dressing, cotija cheese, lime, and spices. Perfect for summer and so, so good!',
        blogCateId: 5
    },
    {
        id: 5,
        title: 'The Creamiest Creamy Chicken',
        image: './src/img/blog/blog5.png',
        content: 'A spicy, peanutty, noodley bit of super easy comfort food! These gochujang noodles require just a handful of ingredients – like ramen noodles, peanut butter, sesame oil, and soy sauce – and come together in just 30 minutes.',
        blogCateId: 3
    },
    {
        id: 6,
        title: 'Fruity Pancake with Orange & Blueberry',
        image: './src/img/blog/blog6.png',
        content: 'Tender, juicy, garlic-marinated shrimp brushed with a bright pesto sauce and piled high on creamy Parmesan risotto with fresh tomatoes and herbs sprinkled on it all. Wow wow wow! Diving in now!',
        blogCateId: 1
    }
]

const BlogCategory = [{
        id: 1,
        name: 'Experience and check in',
    },
    {
        id: 2,
        name: 'The best Hamburger',
    },
    {
        id: 3,
        name: 'The best Noodle',
    },
    {
        id: 4,
        name: 'The best easy Salad',
    },
    {
        id: 5,
        name: 'Fresh and heathy',
    },
    {
        id: 6,
        name: 'Latest on Instagram',
    }
]

// Show blog

function showBlog(data) {
    const blogList = document.querySelector(".blog__content");
    if (blogList) {
        blogList.innerHTML = '';
        for (let item of data) {
            // console.log(blogList);
            blogList.innerHTML += `
                <div class="blog__content-item">
                    <div class="blog__link-img">
                        <a href=""><img src="${item.image}" alt=""></a>
                    </div>
                    <div class="blog__link-text">
                        <p class="text-heading"><a href="">${item.title}</a></p>
                        <br>
                        <p class="text-content"><a href="">${item.content}</a></p>
                    </div>
                </div>
            `
        }
    }
}

// List blog category
function ListBlogCategory() {
    const blogCateList = document.querySelector("#blog__list");
    // console.log(blogCateList);
    if (blogCateList) {
        for (let item of BlogCategory) {
            blogCateList.innerHTML += `
                <li><a href="./blog.html?blogId=${item.id}">${item.name}</a></li>
            `
        }
    }
}
ListBlogCategory();

// List blog

function reRenderList() {
    const blogId = new URLSearchParams(window.location.search).get('blogId');
    const blogByCategory = ListBlog.filter(function(item) {
        return item.blogCateId == blogId;
    })
    if (blogId) {
        showBlog(blogByCategory);
    } else {
        showBlog(ListBlog);
    }
}
reRenderList();