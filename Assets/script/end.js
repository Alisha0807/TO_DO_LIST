let progress = sessionStorage.getItem("progress-percentage");
progress = parseFloat(progress);
if (isNaN(progress))
{
    progress = "0";
}
else{
    progress = Math.round(progress);
}

progressStatement = "Your final progress is " + progress + "%";

let progressLine = document.querySelector("#final-progress > p");
progressLine.textContent = progressStatement;

if (progress <= 33)
{
    document.querySelector("#title > h1").textContent = "Don't give up!";
    document.querySelector("#main-image img").setAttribute("src", "../Assets/Images/incomplete.jpg");
}
else if (progress <=100)
{
    
    document.querySelector("#main-image img").setAttribute("src", "../Assets/Images/continue.webp");
}
else
{
    document.querySelector("#title > h1").textContent = "Well done!";
    document.querySelector("#main-image img").setAttribute("src", "../Assets/Images/done.jpg");
}