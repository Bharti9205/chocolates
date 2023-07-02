


var flexBoxes = document.getElementsByClassName("card");

var cartIncreament = document.getElementById("finalNumber");
var priceIncreament = document.getElementById("netPrice");
var showPrice = document.getElementById("showPrice");
var finalCount = parseInt(cartIncreament.textContent);
var totalPrice = 0;


Array.from(flexBoxes).forEach(function (box) {
    var minusBtn = box.querySelector(".minus-btn");
    var plusBtn = box.querySelector(".plus-btn");
    var itemCount = box.querySelector(".item-count");
    var price = box.querySelector(".price");



    plusBtn.addEventListener("click", function () {
        if (finalCount < 8) {
            var count = parseInt(itemCount.textContent);
            var currentPrice = parseInt(price.textContent);
            totalPrice = totalPrice + currentPrice;
            itemCount.textContent = count + 1;
            finalCount++;

            updateItemCount();
            updateFinalCount();

        } else {
            alert("You can not add more than 8 items in total.")
        }

    });


    minusBtn.addEventListener("click", function () {
        var count = parseInt(itemCount.textContent);
        if (count > 0) {
            var currentPrice = parseInt(price.textContent);
            totalPrice = totalPrice - currentPrice;
            itemCount.textContent = count - 1;
            finalCount--;
            updateItemCount();
            updateFinalCount();
        }
    });

    function updateItemCount() {
        var count = parseInt(itemCount.textContent);
        if (count > 0) {
            minusBtn.style.display = "inline-block";
            itemCount.style.display = "inline-block";
        } else {
            minusBtn.style.display = "none";
            itemCount.style.display = "none";
        }
    }

    function updateFinalCount() {
        cartIncreament.textContent = finalCount;
        priceIncreament.textContent = totalPrice;
        if (totalPrice > 0) {
            showPrice.style.display = "inline-block"
        } else {
            showPrice.style.display = "none"
        }

    }
});
