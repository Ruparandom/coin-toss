document.getElementById('tossButton').addEventListener('click', function() {
    const resultElement = document.getElementById('result');
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    resultElement.textContent = result;
});
