document.addEventListener("DOMContentLoaded", () => {
    const binaryCodeContainer = document.getElementById('binary-code');

    const numColumns = Math.floor(binaryCodeContainer.clientWidth / 22);

    const createBinaryColumn = () => {
        const column = document.createElement('div');
        column.classList.add('column');
        for (let i = 0; i < Math.floor(binaryCodeContainer.clientHeight / 20); i++) {
            const bit = document.createElement('div');
            bit.textContent = Math.round(Math.random());
            column.appendChild(bit);
        }
        binaryCodeContainer.appendChild(column);
    };

    for (let i = 0; i < numColumns; i++) {
        createBinaryColumn();
    }

    const updateBits = () => {
        const columns = document.querySelectorAll('.column');
        columns.forEach(column => {
            column.removeChild(column.firstChild);
            const bit = document.createElement('div');
            bit.textContent = Math.round(Math.random());
            column.appendChild(bit);
        });
    };

    setInterval(updateBits, 100);
});
