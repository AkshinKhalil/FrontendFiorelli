let f_menus = document.querySelectorAll("#first_tabMenu .f_menus div");
let f_contents = document.querySelectorAll("#first_tabMenu .f_contents div");

for (let menu of f_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#first_tabMenu .f_menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of f_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

let s_menus = document.querySelectorAll("#first_tabMenu .s_menus div");
let s_contents = document.querySelectorAll("#first_tabMenu .s_contents div");

for (let menu of s_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#first_tabMenu .s_menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of s_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}

let ss_menus = document.querySelectorAll("#second_tabMenu .menus div");
let ss_contents = document.querySelectorAll("#second_tabMenu .contents div");

for (let menu of ss_menus) {
    menu.addEventListener("click", function () {
        document.querySelector("#second_tabMenu .menus .selected").classList.remove("selected");
        this.classList.add("selected");
        let data_id = this.getAttribute("data-id");
        for (let content of ss_contents) {
            if (data_id == content.getAttribute("data-id")) {
                content.classList.remove("d-none");
            }
            else {
                content.classList.add("d-none");
            }
        }
    })
}