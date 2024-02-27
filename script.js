window.onload = () => {
    const body = document.querySelector("body");
    const btnList = document.getElementsByClassName("cool-btn");

    for (let element of btnList) {
        element.addEventListener("click", (ev) => {
            ev.stopPropagation();
        });
    }

    function getRandomColor(start = 0, end = 255) {
        const aux = end - start;
        return Math.ceil(Math.random() * aux) + start;
    }

    body.addEventListener("click", (e) => {
        const color0 = getRandomColor(200, 255);
        const color1 = getRandomColor(150, 255);
        const color2 = getRandomColor(150, 255);

        const rgb = `rgb(${color0}, ${color1}, ${color2})`;
        body.style.backgroundColor = rgb;
    });
};
