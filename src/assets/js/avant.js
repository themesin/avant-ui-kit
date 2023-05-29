var Themesin = {
    initTooltips: function () {
        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    },

    initPopovers: function () {
        var popoverTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="popover"]')
        );

        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
            return new bootstrap.Popover(popoverTriggerEl);
        });

    },

    initToasts: function () {
        var toastElList = [].slice.call(document.querySelectorAll(".toast"));
        var toastList = toastElList.map(function (toastEl) {
            var t = new bootstrap.Toast(toastEl, {
                autohide: false
            });
            t.show();
            return t;
        });
    },

    initForms: function () {
        [].forEach.call(
            document.getElementsByClassName("form-control"),
            function (element) {

                element.addEventListener("focus", function () {
                    this.classList.add("form-control-focus");
                    this.parentNode.classList.add("input-group-focus");
                });

                element.addEventListener("blur", function () {
                    this.classList.remove("form-control-focus");
                    this.parentNode.classList.remove("input-group-focus");
                });
            }
        );
    },

    initLoader: function () {

        var loader = document.querySelector(".loader");

        if (loader) {
            setTimeout(function () {
                loader.classList.add("done");
            }, 700);

            setTimeout(function () {
                loader.style.display = "none";
            }, 700);
        }
    },

    initNavbarToggler: function () {

        [].forEach.call(document.getElementsByClassName("js-navbar-toggler"), function (element) {
            element.addEventListener("click", function () {
                element.classList.toggle("open-nav");
            });
        });

    },

    registerEvents: function () {

        var ddlLinks = document.querySelectorAll('.dropdown-item');

        [].forEach.call(document.querySelectorAll(".dropdown-item"), function (element) {
            element.addEventListener("click", function () {
                Themesin.collapseNavbar();
            });
        });

    

    },

    collapseNavbar: function () {

        [].forEach.call(document.getElementsByClassName("navbar-collapse"), function (element) {
            element.classList.remove("show");
        });

        [].forEach.call(document.getElementsByClassName("js-navbar-toggler"), function (element) {
            element.classList.remove("open-nav");
        });

    },

    init: function () {
        this.initForms();
        this.initLoader();
        this.initTooltips();
        this.initPopovers();
        this.initToasts();
        this.initNavbarToggler();
        this.registerEvents();

    },
};

var _document = document;
_document.addEventListener("DOMContentLoaded", function (event) {
    Themesin.init();
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();