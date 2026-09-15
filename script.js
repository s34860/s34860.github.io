/* =====================================================
   WAIT FOR PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =================================================
       ACTIVE MENU
    ================================================= */

    const currentPage = document.body.dataset.page;

    document.querySelectorAll(".menu a").forEach(function (link) {

        if (link.dataset.page === currentPage) {
            link.classList.add("active");
        }

    });


    /* =================================================
       MOUSE LIGHT
    ================================================= */

    const mouseLight = document.querySelector(".mouse-light");

    if (mouseLight) {

        document.addEventListener("mousemove", function (e) {

            mouseLight.style.left = e.clientX + "px";
            mouseLight.style.top = e.clientY + "px";

        });

    }


    /* =================================================
       CERTIFICATE POPUP
    ================================================= */

    const certificateCards =
        document.querySelectorAll(".certificate-card");

    const certificatePopup =
        document.getElementById("certificatePopup");

    const certificatePopupTitle =
        document.getElementById("certificatePopupTitle");

    const certificatePopupImages =
        document.getElementById("certificatePopupImages");

    const certificatePopupClose =
        document.getElementById("certificatePopupClose");


    /* -----------------------------------------------
       DATA
    ------------------------------------------------ */

    const certificateData = {

        certA: {

            title:
                "🏆 เกียรติบัตรการแข่งขันตอบปัญหาวิทยาศาสตร์",

            images: [

                {
                    src: "workA.png",

                    label:
                        "การแข่งขันตอบปัญหาวิทยาศาสตร์ ณ โรงเรียนสวนกุหลาบวิทยาลัย ปีการศึกษา 2568"
                }

            ]

        },


        certB: {

            title:
                "🙏 เกียรติบัตรกิจกรรมทำบุญตักบาตร",

            images: [

                {
                    src: "Work.png",

                    label:
                        "กิจกรรมทำบุญตักบาตร วันครบรอบก่อตั้งโรงเรียน วันที่ 1 กันยายน 2569"
                },

                {
                    src: "Bun.JPG",

                    label:
                        "ภาพกิจกรรมเพิ่มเติม"
                }

            ]

        },


        certC: {

            title:
                "🏥 เกียรติบัตรฝึกประสบการณ์ในกลุ่มงานพยาบาล",

            images: [

                {
                    src: "workC.png",

                    label:
                        "ฝึกประสบการณ์ในกลุ่มงานพยาบาล ณ โรงพยาบาลบ้านบึง วันที่ 9–13 มีนาคม 2569"
                },

                {
                    src: "Hos.JPG",

                    label:
                        "ภาพกิจกรรมเพิ่มเติม"
                }

            ]

        }

    };


    /* -----------------------------------------------
       OPEN CERTIFICATE POPUP
    ------------------------------------------------ */

    function openCertificatePopup(certificateId) {

        const data = certificateData[certificateId];

        if (!data) {
            console.error(
                "ไม่พบข้อมูล certificate:",
                certificateId
            );

            return;
        }

        if (!certificatePopup) {
            console.error(
                "ไม่พบ #certificatePopup"
            );

            return;
        }

        certificatePopupTitle.textContent =
            data.title;

        certificatePopupImages.innerHTML = "";


        data.images.forEach(function (image) {

            const item =
                document.createElement("div");

            item.className =
                "work-popup-item";


            const img =
                document.createElement("img");

            img.src = image.src;

            img.alt = image.label;

            img.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    openLightbox(image.src);

                }
            );


            const text =
                document.createElement("p");

            text.textContent =
                image.label;


            item.appendChild(img);

            item.appendChild(text);

            certificatePopupImages.appendChild(item);

        });


        certificatePopup.classList.add("show");

        certificatePopup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    /* -----------------------------------------------
       CLOSE CERTIFICATE POPUP
    ------------------------------------------------ */

    function closeCertificatePopup() {

        if (!certificatePopup) {
            return;
        }

        certificatePopup.classList.remove("show");

        certificatePopup.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    /* -----------------------------------------------
       CLICK CERTIFICATE CARDS
    ------------------------------------------------ */

    certificateCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const certificateId =
                    card.dataset.certificate;

                openCertificatePopup(
                    certificateId
                );

            }
        );


        /* รองรับการกด Enter */
        card.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    const certificateId =
                        card.dataset.certificate;

                    openCertificatePopup(
                        certificateId
                    );

                }

            }
        );

    });


    /* -----------------------------------------------
       CLOSE BUTTON
    ------------------------------------------------ */

    if (certificatePopupClose) {

        certificatePopupClose.addEventListener(
            "click",
            function () {

                closeCertificatePopup();

            }
        );

    }


    /* -----------------------------------------------
       CLICK OUTSIDE CERTIFICATE POPUP
    ------------------------------------------------ */

    if (certificatePopup) {

        certificatePopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    certificatePopup
                ) {

                    closeCertificatePopup();

                }

            }
        );

    }


    /* =================================================
       LIGHTBOX
    ================================================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");


    function openLightbox(src) {

        if (
            !lightbox ||
            !lightboxImage
        ) {

            return;

        }

        lightboxImage.src = src;

        lightbox.classList.add("show");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove("show");

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        if (lightboxImage) {
            lightboxImage.src = "";
        }

    }


    /* -----------------------------------------------
       LIGHTBOX CLOSE BUTTON
    ------------------------------------------------ */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            function () {

                closeLightbox();

            }
        );

    }


    /* -----------------------------------------------
       CLICK OUTSIDE LIGHTBOX
    ------------------------------------------------ */

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* =================================================
       ESC KEY
    ================================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }


            /* ปิด Lightbox ก่อน */

            if (
                lightbox &&
                lightbox.classList.contains("show")
            ) {

                closeLightbox();

                return;

            }


            /* แล้วค่อยปิด Certificate Popup */

            if (
                certificatePopup &&
                certificatePopup.classList.contains("show")
            ) {

                closeCertificatePopup();

            }

        }
    );


});
    }

});
