document.addEventListener("DOMContentLoaded", function () {
  const bottomBlock = document.querySelector(
    ".new-black-section-top .black-section-top-container .bottom-block"
  );

  if (bottomBlock) {
    const imageData = [
      {
        imageSrc: "assets/images/hotjar_icon-academy-darkbg.png",
        title: "The Academy",
        text: "Become a certified Hotjar expert and walk away with some extra-firepower under your belt. Sign up for an exclusive and tailored deep dive into our product to learn how to use Hotjar to suit your needs.",
      },
      {
        imageSrc: "assets/images/hotjar_icon-labs-darkbg.png",
        title: "The Lab",
        text: "Meet the minds behind Hotjar and chat with our team as they work on new feature updates and releases. This is your opportunity to demo the product through the eyes of the people who built it.",
      },
      {
        imageSrc: "assets/images/hotjar_icon-experience-darkbg.png",
        title: "The connections",
        text: "Meet headline speakers and professionals in similar roles facing similar challenges. Discover new ways of thinking that will have an immediate impact on your work and the way you approach digital experiences.",
      },
    ];

    imageData.forEach((data) => {
      const item = document.createElement("div");
      item.classList.add("bottom-block-item");
      item.style.width = "450.67px";
      item.style.height = "424.33px";
      item.style.display = "flex";
      item.style.flexDirection = "column";
      item.style.alignItems = "center"; /* Центрування по горизонталі */
      item.style.justifyContent = "center"; /* Центрування по вертикалі */

      const img = document.createElement("img");
      img.src = data.imageSrc;
      img.alt = data.title;
      img.style.marginBottom = "24px";
      item.appendChild(img);

      const h5 = document.createElement("h5");
      h5.textContent = data.title;
      h5.style.fontFamily = "Inter, sans-serif";
      h5.style.fontWeight = "700";
      h5.style.fontSize = "25.42px";
      h5.style.lineHeight = "27px";
      h5.style.color = "#ffffff";
      h5.style.textTransform = "uppercase";
      h5.style.marginTop = "0";
      h5.style.marginBottom = "13px";
      item.appendChild(h5);

      const p = document.createElement("p");
      p.textContent = data.text;
      p.style.fontFamily = "Inter, sans-serif";
      p.style.fontWeight = "400";
      p.style.fontSize = "17.97px";
      p.style.lineHeight = "30px";
      p.style.color = "#ffffff";
      p.style.marginTop = "0";
      p.style.marginBottom = "0";
      p.style.height = "170px";
      p.style.overflow = "hidden";
      p.style.width = "365.5px";
      p.style.textAlign = "center";
      item.appendChild(p);

      bottomBlock.appendChild(item);
    });
  }
});
