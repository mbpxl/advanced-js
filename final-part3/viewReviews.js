document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('productList');
    const reviewsContainer = document.getElementById('reviewsContainer');

    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    function displayProductList() {
        productList.innerHTML = '';
        for (const product in reviews) {
            const productItem = document.createElement('div');
            productItem.textContent = product;
            productItem.style.cursor = 'pointer';
            productItem.addEventListener('click', function () {
                displayReviewsForProduct(product);
            });
            productList.appendChild(productItem);
        }
    }

    function displayReviewsForProduct(product) {
        reviewsContainer.innerHTML = '';
        if (reviews[product].length === 0) {
            reviewsContainer.textContent = 'Нет отзывов для этого продукта.';
            return;
        }

        reviews[product].forEach((review, index) => {
            const reviewItem = document.createElement('div');
            reviewItem.textContent = review;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Удалить';
            deleteButton.style.marginLeft = '10px';
            deleteButton.addEventListener('click', function () {
                deleteReview(product, index);
            });

            reviewItem.appendChild(deleteButton);
            reviewsContainer.appendChild(reviewItem);
        });
    }

    function deleteReview(product, index) {
        reviews[product].splice(index, 1);
        if (reviews[product].length === 0) {
            delete reviews[product];
        }
        localStorage.setItem('reviews', JSON.stringify(reviews));
        displayReviewsForProduct(product);
        displayProductList();
    }

    displayProductList();
});
