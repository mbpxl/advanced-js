document.getElementById('addReviewButton').addEventListener('click', function () {
    const productName = document.getElementById('productName').value.trim();
    const reviewText = document.getElementById('reviewText').value.trim();
    const messageElement = document.getElementById('message');

    if (productName === "" || reviewText === "") {
        messageElement.textContent = "Пожалуйста, заполните все поля.";
        return;
    }

    let reviews = JSON.parse(localStorage.getItem('reviews')) || {};

    if (!reviews[productName]) {
        reviews[productName] = [];
    }

    reviews[productName].push(reviewText);

    localStorage.setItem('reviews', JSON.stringify(reviews));

    document.getElementById('productName').value = "";
    document.getElementById('reviewText').value = "";
    messageElement.textContent = "Отзыв успешно добавлен!";
});
