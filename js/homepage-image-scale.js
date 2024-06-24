document.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".portfolio-image");
  const viewportHeight = window.innerHeight;

  images.forEach((img) => {
    const imgRect = img.getBoundingClientRect();
    const imgTop = imgRect.top;

    let scaleFactor = 1 + ((viewportHeight - imgTop) / viewportHeight) * 0.05;
    if (scaleFactor > 1.5) scaleFactor = 1.5;
    if (scaleFactor < 1) scaleFactor = 1;

    img.style.setProperty("--scale-factor", scaleFactor);
  });
});
