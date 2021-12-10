//slicky section7
$('.slickslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    loop: true,
    draggable: true,
    infinite: true,
    cssEase: "linear",
    nextArrow: `<i class="fal fa-arrow-right iconright"></i>`,
    prevArrow: `<i class="fal fa-arrow-left iconleft"></i>`,
});




//parallax
$('.parallax-window').parallax({
    imageSrc: 'https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/h3-background-img.jpg'});


// //Add to basket
let addToCart = document.querySelectorAll(".btnadd");

addToCart.forEach(btn => {
    btn.onclick = function(e) {
        e.preventDefault()
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]))
        }
        let basket = JSON.parse(localStorage.getItem("basket"))
        let name = this.parentElement.children[0].innerHTML;
        let data_id = this.getAttribute("data-id");
        let price = this.parentElement.children[2].innerHTML

        let img = this.parentElement.previousElementSibling.src

        let product = { Id: data_id, name, price, img, count: 1 }
        let existProduct = basket.find(p => p.Id == data_id)
        if (existProduct == undefined) {
            basket.push(product)
        } else {
            existProduct.count++
        }
        console.log(basket);
        localStorage.setItem("basket", JSON.stringify(basket))
        calcCount()
        totalPrice()

    }
})

calcCount()

function calcCount() {
    let countEle = document.querySelector(".count")
    let basket = JSON.parse(localStorage.getItem("basket"))

    countEle.innerHTML = basket.length
}
totalPrice()

function totalPrice() {
    let price = document.querySelector(".price")
    if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", JSON.stringify([]))
    }
    let basket = JSON.parse(localStorage.getItem("basket"))
        // let total = 0;
        // basket.forEach(p => {
        //     total += +p.price * p.count
        // })
        // console.log(total);
    let total = basket.reduce((total, p) => {
        return total += +p.price * p.count
    }, 0)
    price.innerHTML = total;
}