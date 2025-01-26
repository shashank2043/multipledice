function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceNumber");
    const diceImages = document.getElementById("diceFaces");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="images/${value}.png" alt="Dice ${value}" class="rolling">`);
    }

    diceResult.textContent = `Rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}
