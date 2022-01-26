function getQuote() {
  var myQuote = document.getElementById("myQuote").value;
  var myAuthor = document.getElementById("myAuthor").value;

  localStorage.setItem("myQuote", myQuote);

  localStorage.setItem("myAuthor", myAuthor);
}
