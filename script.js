/* =====================================================
   ACTIVE MENU
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const currentPage =
            document.body.dataset.page;


        document
            .querySelectorAll(".menu a")
            .forEach(link => {

                if (
                    link.dataset.page ===
                    currentPage
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            });

    }
);


/* =====================================================
   MOUSE LIGHT
===================================================== */

const mouseLight =
    document.querySelector(
        ".mouse-light"
    );


if (mouseLight) {

    document.addEventListener(
        "mousemove",
        e => {

            mouseLight.style.left =
                e.clientX + "px";

            mouseLight.style.top =
                e.clientY + "px";

        }
    );

}


/* =====================================================
   LIGHTBOX
===================================================== */

function openLightbox(src) {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightboxImage"
        );


    if (
        !lightbox ||
        !image
    ) {

        return;

    }


    image.src = src;


    lightbox.classList.add(
        "show"
    );

}


function closeLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (lightbox) {

        lightbox.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   WORK POPUP DATA
===================================================== */

const workPopupData = {


    workA: {

        title:
            "การแข่งขันตอบปัญหาวิทยาศาสตร์",

        images: [

            {
                src:
                    "workA.png",

                label:
                    "ภาพกิจกรรม"
            }

        ]

    },


    workB: {

        title:
            "กิจกรรมทำบุญตักบาตร",

        images: [

            {
                src:
                    "Work.png",

                label:
                    "ภาพกิจกรรมหลัก"
            },

            {
                src:
                    "Bun.JPG",

                label:
                    "ภาพเพิ่มเติม"
            }

        ]

    },


    workC: {

        title:
            "ฝึกประสบการณ์ในกลุ่มงานพยาบาล",

        images: [

            {
                src:
                    "workC.png",

                label:
                    "ภาพกิจกรรมหลัก"
            },

            {
                src:
                    "Hos.JPG",

                label:
                    "ภาพเพิ่มเติม"
            }

        ]

    }

};


/* =====================================================
   OPEN WORK POPUP
===================================================== */

function openWorkPopup(workId) {

    const data =
        workPopupData[workId];


    if (!data) {

        return;

    }


    const popup =
        document.getElementById(
            "workPopup"
        );

    const title =
        document.getElementById(
            "workPopupTitle"
        );

    const container =
        document.getElementById(
            "workPopupImages"
        );


    if (
        !popup ||
        !title ||
        !container
    ) {

        return;

    }


    title.textContent =
        data.title;


    container.innerHTML = "";


    data.images.forEach(
        image => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "work-popup-item";


            item.innerHTML = `

                <img
                    src="${image.src}"
                    alt="${image.label}"
                    onclick="openLightbox('${image.src}')"
                >

                <p>
                    ${image.label}
                </p>

            `;


            container.appendChild(
                item
            );

        }
    );


    popup.classList.add(
        "show"
    );

}


/* =====================================================
   CLOSE WORK POPUP
===================================================== */

function closeWorkPopup() {

    const popup =
        document.getElementById(
            "workPopup"
        );


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   CERTIFICATE POPUP DATA
===================================================== */

const certificatePopupData = {


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


/* =====================================================
   OPEN CERTIFICATE POPUP
===================================================== */

function openCertificatePopup(
    certificateId
) {

    const data =
        certificatePopupData[
            certificateId
        ];


    if (!data) {

        return;

    }


    const popup =
        document.getElementById(
            "certificatePopup"
        );

    const title =
        document.getElementById(
            "certificatePopupTitle"
        );

    const container =
        document.getElementById(
            "certificatePopupImages"
        );


    if (
        !popup ||
        !title ||
        !container
    ) {

        return;

    }


    title.textContent =
        data.title;


    container.innerHTML = "";


    data.images.forEach(
        image => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "work-popup-item";


            item.innerHTML = `

                <img
                    src="${image.src}"
                    alt="${image.label}"
                    onclick="openLightbox('${image.src}')"
                >

                <p>
                    ${image.label}
                </p>

            `;


            container.appendChild(
                item
            );

        }
    );


    popup.classList.add(
        "show"
    );

}


/* =====================================================
   CLOSE CERTIFICATE POPUP
===================================================== */

function closeCertificatePopup() {

    const popup =
        document.getElementById(
            "certificatePopup"
        );


    if (popup) {

        popup.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   CLICK OUTSIDE POPUPS
===================================================== */

document.addEventListener(
    "click",
    e => {


        /* WORK POPUP */

        if (
            e.target.id ===
            "workPopup"
        ) {

            closeWorkPopup();

        }


        /* CERTIFICATE POPUP */

        if (
            e.target.id ===
            "certificatePopup"
        ) {

            closeCertificatePopup();

        }


        /* LIGHTBOX */

        if (
            e.target.id ===
            "lightbox"
        ) {

            closeLightbox();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    e => {

        if (
            e.key ===
            "Escape"
        ) {

            closeLightbox();

            closeWorkPopup();

            closeCertificatePopup();

        }

    }
);
        closeWorkPopup();
    }

});
