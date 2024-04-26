var typed = new Typed(".text",{
    strings: ["Coder", "Web Designer", "Editor", "Creator"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    loop: true
});



  // Function to toggle content
  function toggleContent(index) {
    var moreText = document.querySelectorAll(".moreContent")[index - 1];
    var btnText = document.querySelectorAll("button")[index - 1];

    if (moreText.style.display === "none" || moreText.style.display === "") {
      moreText.style.display = "inline";
      btnText.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read More";
    }
  }

  // Event listener to toggle content when anywhere on the screen is touched
  document.addEventListener("click", function(event) {
    var target = event.target;
    var buttons = document.querySelectorAll("button");

    // Check if the click is not on any button
    if (!Array.from(buttons).includes(target)) {
      var moreTexts = document.querySelectorAll(".moreContent");
      for (var i = 0; i < moreTexts.length; i++) {
        moreTexts[i].style.display = "none";
        buttons[i].textContent = "Read More";
      }
    }
  });
 