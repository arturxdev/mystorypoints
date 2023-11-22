function myFunction() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get("userId");
  const url = `https://my-story-points.onrender.com/`;
  const finalUrl = url + `${userId ? "?userId=" + userId + "&months=3" : ""}`;
  navigator.clipboard.writeText(finalUrl);

  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiado";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
