var density;

function createBoard(size) {
    const board = document.getElementById("board");
    board.style.textAlign = "center";

    for (let i = 0; i < size; i++) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        for (let j = 0; j < size; j++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            wrapper.appendChild(pixel);
            pixel.addEventListener("mouseover", (e) => {
                e.target.classList.add("colored");
            })
        }
        board.appendChild(wrapper);
    }

    return size;
}

function validateDensity(input){
    input = Math.min(input,128);
    input = Math.max(input,1);
    return input;
}

function clearBoard() {
    board.replaceChildren();
}

function resetBoard() {
    clearBoard();
    density = createBoard(validateDensity(density));
}

function changeDensity() {
    clearBoard();
    density = createBoard(validateDensity(prompt("Enter new pixel density (between 1 and 128")));
}

density = createBoard(16);