
document.getElementById("readMoreLink").addEventListener("click", function() {
    var moreText = document.getElementById("moreText");
    if (moreText.style.display === "none") {
      moreText.style.display = "inline"; // Show the hidden text
      this.innerHTML = "Read less"; // Change the link text to "Read less"
    } else {
      moreText.style.display = "none"; // Hide the text
      this.innerHTML = "Read more..."; // Change the link text back to "Read more"
    }
  });
  