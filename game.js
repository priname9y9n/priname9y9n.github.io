// 現在の点数を表示
function displayScore() {

    let score = Number(localStorage.getItem("score"));

    if (isNaN(score)) {
        score = 100000;
        localStorage.setItem("score", score);
    }

    const scoreElement = document.getElementById("score");

    if (scoreElement) {
        scoreElement.textContent =
            score.toLocaleString();
    }
}


// 点数を変更
function changeScore(amount) {

    let score = Number(localStorage.getItem("score"));

    if (isNaN(score)) {
        score = 100000;
    }

    score += amount;

    localStorage.setItem("score", score);

    displayScore();
}


// ページを開いたときに実行
window.addEventListener("DOMContentLoaded", function() {
    displayScore();
});