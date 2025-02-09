document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup"); 
    const openButtons = document.querySelectorAll("[data-popup]"); 
    const closeButtons = document.querySelectorAll(".pp__close");

    if (!popup || openButtons.length === 0 || closeButtons.length === 0) {
        console.error("Pop-up или кнопки не найдены в DOM!");
        return;
    }

    function openPopup() {
        popup.style.display = "flex";
        document.body.style.overflow = "hidden";
    }

    function closePopup() {
        popup.style.display = "none";
        document.body.style.overflow = "";
    }

    openButtons.forEach((button) => {
        button.addEventListener("click", openPopup);
    });

    closeButtons.forEach((button) => {
        button.addEventListener("click", closePopup);
    });

    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });
});