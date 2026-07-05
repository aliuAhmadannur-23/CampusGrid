console.log("JavaScript Connected!");
document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        counter.innerText = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;

            const increment = target / 100;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });

});
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
        console.log("FAQ clicked", item);

        // Close every other FAQ
        faqItems.forEach((faq) => {
            if (faq !== item) {
                faq.classList.remove("active");
            }
        });

        // Open or close the clicked FAQ
        item.classList.toggle("active");
        console.log("FAQ active:", item.classList.contains("active"));

    });

});