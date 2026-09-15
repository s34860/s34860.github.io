/* =====================================================
   PREMMATAD PORTFOLIO
   COMPLETE SCRIPT.JS
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
            function (event) {

                mouseLight.style.left =
                    event.clientX + "px";

                mouseLight.style.top =
                    event.clientY + "px";

            }
        );

    }


    /* =====================================================
       LIGHTBOX
    ===================================================== */

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


    function closeLightbox() {

        if (!lightbox) {
            return;
        }

        lightbox.classList.remove(
            "show"
        );

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


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            function () {

                closeLightbox();

            }
        );

    }


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
       WORK POPUP
    ===================================================== */

    const workPopup =
        document.getElementById(
            "workPopup"
        );

    const workPopupTitle =
        document.getElementById(
            "workPopupTitle"
        );

    const workPopupImages =
        document.getElementById(
            "workPopupImages"
        );

    const workPopupClose =
        document.getElementById(
            "workPopupClose"
        );


    const workData = {

        workA: {

            title:
                "🚀 การแข่งขันตอบปัญหาวิทยาศาสตร์",

            images: [

                {
                    src:
                        "workA.png",

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
                    src:
                        "Work.png",

                    label:
                        "กิจกรรมทำบุญตักบาตร วันครบรอบก่อตั้งโรงเรียน วันที่ 1 กันยายน 2569 พร้อมผู้ปกครอง"
                },

                {
                    src:
                        "Bun.JPG",

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
                    src:
                        "workC.png",

                    label:
                        "ฝึกประสบการณ์ในกลุ่มงานพยาบาล ณ โรงพยาบาลบ้านบึง วันที่ 9–13 มีนาคม 2569"
                },

                {
                    src:
                        "Hos.JPG",

                    label:
                        "ภาพกิจกรรมเพิ่มเติม"
                }

            ]

        }

    };


    function openWorkPopup(workId) {

        const data =
            workData[workId];


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
                    document.createElement(
                        "div"
                    );

                item.className =
                    "work-popup-item";


                const img =
                    document.createElement(
                        "img"
                    );

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
                    document.createElement(
                        "p"
                    );

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


    document
        .querySelectorAll(".work-card")
        .forEach(
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


    if (workPopupClose) {

        workPopupClose.addEventListener(
            "click",
            function () {

                closeWorkPopup();

            }
        );

    }


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
       CERTIFICATE POPUP
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

    const certificatePopupClose =
        document.getElementById(
            "certificatePopupClose"
        );


    const certificateData = {

        certA: {

            title:
                "🏆 เกียรติบัตรการแข่งขันตอบปัญหาวิทยาศาสตร์",

            images: [

                {
                    src:
                        "workA.png",

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
                    src:
                        "Work.png",

                    label:
                        "กิจกรรมทำบุญตักบาตร วันครบรอบก่อตั้งโรงเรียน วันที่ 1 กันยายน 2569"
                },

                {
                    src:
                        "Bun.JPG",

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
                    src:
                        "workC.png",

                    label:
                        "ฝึกประสบการณ์ในกลุ่มงานพยาบาล ณ โรงพยาบาลบ้านบึง วันที่ 9–13 มีนาคม 2569"
                },

                {
                    src:
                        "Hos.JPG",

                    label:
                        "ภาพกิจกรรมเพิ่มเติม"
                }

            ]

        }

    };


    function openCertificatePopup(
        certificateId
    ) {

        console.log(
            "Certificate clicked:",
            certificateId
        );


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
                "ไม่พบ Certificate Popup ใน HTML"
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
                    document.createElement(
                        "div"
                    );

                item.className =
                    "work-popup-item";


                const img =
                    document.createElement(
                        "img"
                    );

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
                    document.createElement(
                        "p"
                    );

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
       CERTIFICATE CARD CLICK
    ===================================================== */

    const certificateCards =
        document.querySelectorAll(
            ".certificate-card"
        );


    console.log(
        "จำนวนการ์ดเกียรติบัตร:",
        certificateCards.length
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
       CERTIFICATE CLOSE BUTTON
    ===================================================== */

    if (certificatePopupClose) {

        certificatePopupClose.addEventListener(
            "click",
            function () {

                closeCertificatePopup();

            }
        );

    }


    /* =====================================================
       CERTIFICATE POPUP OUTSIDE CLICK
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


            /* -----------------------------
               LIGHTBOX
            ----------------------------- */

            if (
                lightbox &&
                lightbox.classList.contains(
                    "show"
                )
            ) {

                closeLightbox();

                return;

            }


            /* -----------------------------
               WORK POPUP
            ----------------------------- */

            if (
                workPopup &&
                workPopup.classList.contains(
                    "show"
                )
            ) {

                closeWorkPopup();

                return;

            }


            /* -----------------------------
               CERTIFICATE POPUP
            ----------------------------- */

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


    /* =====================================================
       GENERAL IMAGE LIGHTBOX
       สำหรับ Gallery / University / Image Card
    ===================================================== */

    document
        .querySelectorAll(
            ".gallery-grid img, .university img"
        )
        .forEach(
            function (img) {

                img.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        if (img.src) {

                            openLightbox(
                                img.src
                            );

                        }

                    }
                );

            }
        );


    /* =====================================================
       READY
    ===================================================== */

    console.log(
        "✅ Premmatad Portfolio พร้อมใช้งาน"
    );

});
