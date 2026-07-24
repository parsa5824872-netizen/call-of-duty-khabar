const btn = document.getElementById("themeBtn");

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
});const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const articles = document.querySelectorAll("article");

    articles.forEach(function(article){

        const title = article.querySelector("h2").innerText.toLowerCase();

        if(title.includes(value)){
            article.style.display = "block";
        }else{
            article.style.display = "none";
        }

    });

});
const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", function(){

        let count = this.nextElementSibling;

        if(this.textContent === "🤍"){

            this.textContent = "❤️";

            count.textContent = Number(count.textContent) + 1;

        }else{

            this.textContent = "🤍";

            count.textContent = Number(count.textContent) - 1;

        }

    });

});
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = function(){

    if(music.paused){

        music.play();
        btn.innerHTML="⏸ توقف موسیقی";

    }else{

        music.pause();
        btn.innerHTML="🎵 پخش موسیقی";

    }

}
const btn = document.getElementById("fullscreenBtn");

btn.addEventListener("click", () => {

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }

});