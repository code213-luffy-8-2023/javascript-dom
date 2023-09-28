const cityImage = document.getElementById("city-image");

const parisButton = document.getElementById("paris");
const londonButton = document.getElementById("london");
const sydneyButton = document.getElementById("sydney");

parisButton.onclick = () => {
  cityImage.src = "images/paris.jpg";
  cityImage.setAttribute("alt", "Paris");
};

londonButton.onclick = () => {
  cityImage.src = "images/london.jpg";
  cityImage.setAttribute("alt", "London");
};

sydneyButton.onclick = () => {
  cityImage.src = "images/sydney.jpg";
  cityImage.setAttribute("alt", "Sydney");
};
