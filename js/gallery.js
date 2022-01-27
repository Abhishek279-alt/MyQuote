window.onload = function () {
  var myQuote = localStorage.getItem("myQuote");
  var myAuthor = localStorage.getItem("myAuthor");
  document.getElementById("quoteText").innerHTML = myQuote;
  document.getElementById("authorText").innerHTML = myAuthor;
};

// Image Sizing

// Image Normal

document.getElementById("imgNormal").onclick = function () {
  if (document.getElementById("imgNormal").checked == true) {
    document.querySelector(".myDisplay").style.width = "42vw";
    document.querySelector(".myDisplay").style.height = "66vh"; // 640 x 480 pixels
    document.querySelector("#quoteText").style.margin = "16vh 2vw 10vh 2vw";
  }
};

// Image Large

document.getElementById("imgLarg").onclick = function () {
  if (document.getElementById("imgLarg").checked == true) {
    document.querySelector(".myDisplay").style.width = "63vw";
    document.querySelector(".myDisplay").style.height = "75vh"; // 960 X 544 pixels
    document.querySelector("#quoteText").style.margin = "20vh 7vw 10vh 7vw";
  }
};

// Edit Options

// Bold Property
document.getElementById("chkBold").onclick = function () {
  if (document.getElementById("chkBold").checked == true) {
    document.querySelector("#quoteText").style.fontWeight = "bold";
    document.querySelector("#authorText").style.fontWeight = "bold";
  } else {
    document.querySelector("#quoteText").style.fontWeight = "normal";
    document.querySelector("#authorText").style.fontWeight = "normal";
  }
};

// Italic Property
document.getElementById("chkItalic").onclick = function () {
  if (document.getElementById("chkItalic").checked == true) {
    document.querySelector("#quoteText").style.fontStyle = "italic";
    document.querySelector("#authorText").style.fontStyle = "italic";
  } else {
    document.querySelector("#quoteText").style.fontStyle = "normal";
    document.querySelector("#authorText").style.fontStyle = "normal";
  }
};

// Underline Property
document.getElementById("chkUnderline").onclick = function () {
  if (document.getElementById("chkUnderline").checked == true) {
    document.querySelector("#quoteText").style.textDecoration = "underline";
    document.querySelector("#authorText").style.textDecoration = "underline";
  } else {
    document.querySelector("#quoteText").style.textDecoration = "none";
    document.querySelector("#authorText").style.textDecoration = "none";
  }
};

// Shadow Property
document.getElementById("chkShadow").onclick = function () {
  if (document.getElementById("chkShadow").checked == true) {
    document.querySelector("#quoteText").style.textShadow = "2px 2px 5px";
    document.querySelector("#authorText").style.textShadow = "2px 2px 5px";
  } else {
    document.querySelector("#quoteText").style.textShadow = "none";
    document.querySelector("#authorText").style.textShadow = "none";
  }
};

// Image click functions

document.getElementById("img-1").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.background =
    "url('../images/img-1.jpg')";
  document.querySelector(".myDisplay").style.color = "#CFF311";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #A4A4A4";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #A4A4A4";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-2").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-2.jpg')";
  document.querySelector(".myDisplay").style.color = "#FFFFFF";
  document.querySelector(".myDisplay").style.fontFamily = "Gotu";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F6D8CE";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F6D8CE";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-3").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-3.jpg')";
  document.querySelector(".myDisplay").style.color = "#3B170B";
  document.querySelector(".myDisplay").style.fontFamily = "amita";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow = "2px 2px 5px";
      document.querySelector("#authorText").style.textShadow = "2px 2px 5px";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-4").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-4.jpg')";
  document.querySelector(".myDisplay").style.color = "#FAFAFA";
  document.querySelector(".myDisplay").style.fontFamily = "Courier Std";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #0B3861";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #0B3861";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-5").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-5.jpg')";
  document.querySelector(".myDisplay").style.color = "#FAFAFA";
  document.querySelector(".myDisplay").style.fontFamily = "Adobe Hebrew";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #D0A9F5";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #D0A9F5";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-6").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-6.jpg')";
  document.querySelector(".myDisplay").style.color = "#3B240B";
  document.querySelector(".myDisplay").style.fontFamily =
    "'Special Elite', cursive";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F5D0A9";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F5D0A9";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-7").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-7.jpg')";
  document.querySelector(".myDisplay").style.color = "#3A2F0B";
  document.querySelector(".myDisplay").style.fontFamily = "'Aladin', cursive";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F3E2A9";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F3E2A9";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-8").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-8.jpg')";
  document.querySelector(".myDisplay").style.color = "#FAFAFA"; //  #F7FE2E
  document.querySelector(".myDisplay").style.fontFamily = "Cicle Semi";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F2F2F2";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F2F2F2";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-9").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-9.jpg')";
  document.querySelector(".myDisplay").style.color = "black";
  document.querySelector(".myDisplay").style.fontFamily = "CityBlueprint";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #E2A9F3";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #E2A9F3";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-10").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-10.jpg')";
  document.querySelector(".myDisplay").style.color = "#F2F5A9";
  document.querySelector(".myDisplay").style.fontFamily = "Bauhaus";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #D8D8D8";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #D8D8D8";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-11").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-11.jpg')";
  document.querySelector(".myDisplay").style.color = "#212523";
  document.querySelector(".myDisplay").style.fontFamily = "Adobe Devanagari";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector(".myDisplay").style.color = "#EBF8F2";
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #212523";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #212523";
    } else {
      document.querySelector(".myDisplay").style.color = "#212523";
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-13").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-13.jpg')";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily = "Adobe Devanagari";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F3E2A9";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F3E2A9";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-14").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-14.jpg')";
  document.querySelector(".myDisplay").style.color = "#D0FA58";
  document.querySelector(".myDisplay").style.fontFamily = "Comic Sans MS";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #01DF74";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #01DF74";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-15").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundImage =
    "url('../images/img-15.jpg')";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily = "Elsie Swash Caps";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #3A2F0B";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #3A2F0B";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

//--// Solid Colors
document.getElementById("img-16").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#6c757d";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow = "2px 2px 5px";
      document.querySelector("#authorText").style.textShadow = "2px 2px 5px";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-17").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#198754";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #CEF6EC";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #CEF6EC";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-18").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#dc3545";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #F5A9A9";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #F5A9A9";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-19").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#ffc107";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #6E6E6E";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #6E6E6E";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-20").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#0dcaf0";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #6E6E6E";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #6E6E6E";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-21").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#f8f9fa";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "#212529";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow =
        "2px 2px 5px #848484";
      document.querySelector("#authorText").style.textShadow =
        "2px 2px 5px #848484";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

document.getElementById("img-22").onclick = function () {
  document.querySelector(".myDisplay").style.borderColor = "transparent";
  document.querySelector(".myDisplay").style.backgroundColor = "#212529";
  document.querySelector(".myDisplay").style.backgroundImage = "none";
  document.querySelector(".myDisplay").style.color = "white";
  document.querySelector(".myDisplay").style.fontFamily =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  document.getElementById("chkShadow").onclick = function () {
    if (document.getElementById("chkShadow").checked == true) {
      document.querySelector("#quoteText").style.textShadow = "2px 2px 5px";
      document.querySelector("#authorText").style.textShadow = "2px 2px 5px";
    } else {
      document.querySelector("#quoteText").style.textShadow = "none";
      document.querySelector("#authorText").style.textShadow = "none";
    }
  };
};

// Div To Image-- Save Quote

function saveQuote() {
  html2canvas(document.getElementById("myDisplay")).then(function (canvas) {
    let imgDownload = document.querySelector(".download");
    imgDownload.href = canvas.toDataURL("image/png");
    imgDownload.download = "img-file.png";
  });
}
