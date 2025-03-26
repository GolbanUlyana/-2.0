document.addEventListener("DOMContentLoaded", function () {
    const ratings = document.querySelectorAll(".product-rating");

    ratings.forEach(rating => {
        const productName = rating.getAttribute("data-product");
        const savedRating = localStorage.getItem(productName) || 0;
        createStars(rating, productName, savedRating);
    });

    function createStars(ratingElement, productName, savedRating) {
        for (let i = 1; i <= 5; i++) {
            const star = document.createElement("span");
            star.classList.add("star");
            star.innerHTML = "★";
            if (i <= savedRating) star.classList.add("active");

            star.addEventListener("mouseover", function () {
                highlightStars(ratingElement, i);
            });

            star.addEventListener("mouseleave", function () {
                resetStars(ratingElement, savedRating);
            });

            star.addEventListener("click", function () {
                localStorage.setItem(productName, i);
                resetStars(ratingElement, i);
            });

            ratingElement.appendChild(star);
        }
    }

    function highlightStars(ratingElement, count) {
        const stars = ratingElement.querySelectorAll(".star");
        stars.forEach((star, index) => {
            star.classList.toggle("active", index < count);
        });
    }

    function resetStars(ratingElement, count) {
        const stars = ratingElement.querySelectorAll(".star");
        stars.forEach((star, index) => {
            star.classList.toggle("active", index < count);
        });
    }
});
