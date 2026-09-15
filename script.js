/* =====================================================
   PORTFOLIO SCRIPT.JS
   รวมระบบทั้งหมดไว้ในไฟล์เดียว
===================================================== */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ACTIVE MENU
    ===================================================== */

    const currentPage =
        document.body.dataset.page;

    document
        .querySelectorAll(".menu a")
        .forEach(function (link) {

            if (
                link.dataset.page ===
                currentPage
            ) {

                link.classList.add("active");

            }

        });


    /* =====================================================
       MOUSE LIGHT
    ===================================================== */

    const mouseLight =
        document.querySelector(".mouse-light");

    if (mouseLight) {

        document.addEventListener(
            "mousemove",
            function (e) {

                mouseLight.style.left =
                    e.clientX + "px";

                mouseLight.style.top =
                    e.clientY + "px";

            }
        );

    }


    /* =====================================================
       LIGHTBOX ELEMENTS
    ===================================================== */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");


    /* =====================================================
       OPEN LIGHTBOX
    ===================================================== */

    function openLightbox(src) {

        if (
            !lightbox ||
            !lightboxImage
        ) {

            console.error(
                "ไม่พบ Lightbox"
            );

            return;

        }

        lightboxImage.src = src;

        lightbox.classList.add("show");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE LIGHTBOX
    ===================================================== */

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

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       LIGHTBOX CLOSE BUTTON
    ===================================================== */

    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            function () {

                closeLightbox();

            }
        );

    }


    /* =====================================================
       LIGHTBOX CLICK OUTSIDE
    ===================================================== */

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


    /* =====================================================
       WORK POPUP DATA
    ===================================================== */

    const workPopupData = {

        workA: {

            title:
                "🚀 การแข่งขันตอบปัญหาวิทยาศาสตร์",

            images: [

                {
                    src: "workA.png",

                    label:
                        "การแข่งขันตอบปัญหาวิทยาศาสตร์ ณ โรงเรียนสวนกุหลาบวิทยาลัย ปีการศึกษา 2568"
                }

            ]

        },


        workB: {

            title:
                "🙏 กิจกรรมทำบุญตักบาตร",

            images: [

                {
                    src: "Work.png",

                    label:
                        "กิจกรรมทำบุญตักบาตร วันครบรอบก่อตั้งโรงเรียน วันที่ 1 กันยายน 2569 พร้อมผู้ปกครอง"
                },

                {
                    src: "Bun.JPG",

                    label:
                        "ภาพกิจกรรมเพิ่มเติม"
                }

            ]

        },


        workC: {

            title:
                "🏥 ฝึกประสบการณ์ในกลุ่มงานพยาบาล",

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


    /* =====================================================
       WORK POPUP ELEMENTS
    ===================================================== */

    const workPopup =
        document.getElementById("workPopup");

    const workPopupTitle =
        document.getElementById("workPopupTitle");

    const workPopupImages =
        document.getElementById("workPopupImages");


    /* =====================================================
       OPEN WORK POPUP
    ===================================================== */

    function openWorkPopup(workId) {

        const data =
            workPopupData[workId];

        if (!data) {

            console.error(
                "ไม่พบข้อมูลผลงาน:",
                workId
            );

            return;

        }

        if (
            !workPopup ||
            !workPopupTitle ||
            !workPopupImages
        ) {

            console.error(
                "ไม่พบ Work Popup ในหน้านี้"
            );

            return;

        }


        workPopupTitle.textContent =
            data.title;


        workPopupImages.innerHTML =
            "";


        data.images.forEach(
            function (image) {

                const item =
                    document.createElement("div");

                item.className =
                    "work-popup-item";


                const img =
                    document.createElement("img");

                img.src =
                    image.src;

                img.alt =
                    image.label;

                img.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        openLightbox(
                            image.src
                        );

                    }
                );


                const text =
                    document.createElement("p");

                text.textContent =
                    image.label;


                item.appendChild(img);

                item.appendChild(text);

                workPopupImages.appendChild(
                    item
                );

            }
        );


        workPopup.classList.add(
            "show"
        );

        workPopup.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE WORK POPUP
    ===================================================== */

    function closeWorkPopup() {

        if (!workPopup) {
            return;
        }

        workPopup.classList.remove(
            "show"
        );

        workPopup.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";

    }


    /* =====================================================
       WORK CARDS
    ===================================================== */

    const workCards =
        document.querySelectorAll(
            ".work-card"
        );


    workCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const workId =
                        card.dataset.work;

                    if (workId) {

                        openWorkPopup(
                            workId
                        );

                    }

                }
            );

        }
    );


    /* =====================================================
       WORK POPUP CLOSE BUTTON
    ===================================================== */

    const workPopupClose =
        document.getElementById(
            "workPopupClose"
        );


    if (workPopupClose) {

        workPopupClose.addEventListener(
            "click",
            function () {

                closeWorkPopup();

            }
        );

    }


    /* =====================================================
       WORK POPUP CLICK OUTSIDE
    ===================================================== */

    if (workPopup) {

        workPopup.addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    workPopup
                ) {

                    closeWorkPopup();

                }

            }
        );

    }


    /* =====================================================
       CERTIFICATE POPUP DATA
    ===================================================== */

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


    /* =====================================================
       CERTIFICATE POPUP ELEMENTS
    ===================================================== */

    const certificatePopup =
        document.getElementById(
            "certificatePopup"
        );

    const certificatePopupTitle =
        document.getElementById(
            "certificatePopupTitle"
        );

    const certificatePopupImages =
        document.getElementById(
            "certificatePopupImages"
        );


    /* =====================================================
       OPEN CERTIFICATE POPUP
    ===================================================== */

    function openCertificatePopup(
        certificateId
    ) {

        const data =
            certificateData[
                certificateId
            ];


        if (!data) {

            console.error(
                "ไม่พบข้อมูลเกียรติบัตร:",
                certificateId
            );

            return;

        }


        if (
            !certificatePopup ||
            !certificatePopupTitle ||
            !certificatePopupImages
        ) {

            console.error(
                "ไม่พบ Certificate Popup ในหน้านี้"
            );

            return;

        }


        certificatePopupTitle.textContent =
            data.title;


        certificatePopupImages.innerHTML =
            "";


        data.images.forEach(
            function (image) {

                const item =
                    document.createElement("div");

                item.className =
                    "work-popup-item";


                const img =
                    document.createElement("img");

                img.src =
                    image.src;

                img.alt =
                    image.label;


                img.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        openLightbox(
                            image.src
                        );

                    }
                );


                const text =
                    document.createElement("p");

                text.textContent =
                    image.label;


                item.appendChild(img);

                item.appendChild(text);

                certificatePopupImages.appendChild(
                    item
                );

            }
        );


        certificatePopup.classList.add(
            "show"
        );

        certificatePopup.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    }


    /* =====================================================
       CLOSE CERTIFICATE POPUP
    ===================================================== */

    function closeCertificatePopup() {

        if (!certificatePopup) {
            return;
        }


        certificatePopup.classList.remove(
            "show"
        );


        certificatePopup.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.style.overflow =
            "";

    }


    /* =====================================================
       CERTIFICATE CARDS
    ===================================================== */

    const certificateCards =
        document.querySelectorAll(
            ".certificate-card"
        );


    certificateCards.forEach(
        function (card) {

            card.addEventListener(
                "click",
                function () {

                    const certificateId =
                        card.dataset.certificate;

                    if (certificateId) {

                        openCertificatePopup(
                            certificateId
                        );

                    }

                }
            );


            /* ---------------------------------------------
               ENTER / SPACE
            --------------------------------------------- */

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

                        if (certificateId) {

                            openCertificatePopup(
                                certificateId
                            );

                        }

                    }

                }
            );

        }
    );


    /* =====================================================
       CERTIFICATE POPUP CLOSE BUTTON
    ===================================================== */

    const certificatePopupClose =
        document.getElementById(
            "certificatePopupClose"
        );


    if (certificatePopupClose) {

        certificatePopupClose.addEventListener(
            "click",
            function () {

                closeCertificatePopup();

            }
        );

    }


    /* =====================================================
       CERTIFICATE POPUP CLICK OUTSIDE
    ===================================================== */

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


    /* =====================================================
       ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            /* ---------------------------------------------
               ปิด Lightbox ก่อน
            --------------------------------------------- */

            if (
                lightbox &&
                lightbox.classList.contains(
                    "show"
                )
            ) {

                closeLightbox();

                return;

            }


            /* ---------------------------------------------
               ปิด Work Popup
            --------------------------------------------- */

            if (
                workPopup &&
                workPopup.classList.contains(
                    "show"
                )
            ) {

                closeWorkPopup();

                return;

            }


            /* ---------------------------------------------
               ปิด Certificate Popup
            --------------------------------------------- */

            if (
                certificatePopup &&
                certificatePopup.classList.contains(
                    "show"
                )
            ) {

                closeCertificatePopup();

                return;

            }

        }
    );


});
