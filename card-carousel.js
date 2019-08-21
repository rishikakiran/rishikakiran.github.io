window.onload = function () {
                const leftButton = document.querySelector("[data-action='slideLeft']");
                const rightButton = document.querySelector("[data-action='slideRight']");
                var carousel = document.getElementById("carousel");
                const card = carousel.querySelector("[data-target='card']");

                
                const carouselWidth=carousel.clientWidth;
                const maxxWidth=-carousel.scrollWidth;
                const scrollableWidth=carouselWidth+maxxWidth;
                
                const cardCount = carousel.querySelectorAll("[data-target='card']").length;

                let offset = 0;
                
                leftButton.addEventListener("click", function () {
                    if (offset !== 0) {
                        offset += card.clientWidth;
                        carousel.style.transform = `translateX(${offset}px)`;
                    }
                })

                rightButton.addEventListener("click", function () {
                    if (offset >= scrollableWidth) {
                        offset -= card.clientWidth;
                        carousel.style.transform = `translateX(${offset}px)`;
                        // alert(scrollableWidth+" offset "+offset);
                    }
                })
            };