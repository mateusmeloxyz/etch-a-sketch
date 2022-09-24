let size = 28;

const board = document.getElementById("board");
board.style.textAlign = "center";

for( let i = 0 ; i < size ; i++ ){
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    for( let j = 0 ; j < size ; j++ ){
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        wrapper.appendChild(pixel);
        pixel.addEventListener("mouseover", (e) => {
            e.target.classList.add("colored");
        })
    }
    board.appendChild(wrapper);
}