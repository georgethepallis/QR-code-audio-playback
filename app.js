document.addEventListener("DOMContentLoaded", (event) => {
  var audio = document.getElementById("myAudio");
  audio.play().catch(function (error) {
    console.log("Autoplay was prevented. Reason: ", error.message);
  });
});

document.addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  audio.muted = false;
  audio.play();
});
