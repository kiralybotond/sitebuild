var modalPrivacy = document.querySelector('#modalPrivacy');
var modalTerms = document.querySelector('#modalTerms');
var modalFaq = document.querySelector('#modalFaq');
var linkPrivacy = document.querySelector('#footerPrivacy');
var linkTerms = document.querySelector('#footerTerms');
var linkFaq = document.querySelector('#footerFaq');
var modalClosePrivacy = document.querySelector('#modalClosePrivacy');
var modalCloseTerms = document.querySelector('#modalCloseTerms');
var modalCloseFaq = document.querySelector('#modalCloseFaq');

linkPrivacy.addEventListener('click', function () {
    modalPrivacy.style.display = "block";
});

modalClosePrivacy.addEventListener("click", function () {
    modalPrivacy.style.display = "none";
});

window.addEventListener('click', function (event) {
    if (event.target == modalPrivacy) {
        modalPrivacy.style.display = "none";
    }
})

linkTerms.addEventListener('click', function () {
    modalTerms.style.display = "block";
});

modalCloseTerms.addEventListener("click", function () {
    modalTerms.style.display = "none";
});

window.addEventListener('click', function (event) {
    if (event.target == modalTerms) {
        modalTerms.style.display = "none";
    }
})

linkFaq.addEventListener('click', function () {
    modalFaq.style.display = "block";
});

modalCloseFaq.addEventListener("click", function () {
    modalFaq.style.display = "none";
});

window.addEventListener('click', function (event) {
    if (event.target == modalFaq) {
        modalFaq.style.display = "none";
    }
})