const color = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#fdcb6e", "#fd79a8", "#2d3436", "#fff200"];

let curentColor = 0;

document.getElementById("change-bg-color").addEventListener("click", function () {
    for (let i = 0; i < color.length; i++) {
        if (i === curentColor) {
            document.body.style.backgroundColor = color[i];
            break;
        }
    }

    curentColor = (curentColor + 1) % color.length;
});
