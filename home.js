function slideShow() {
  const arr = [
    "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638808781/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2021/HP_WinterStore_BOB_SC_25Nov_nulsoj.jpg/mxw_2048,f_auto",
    "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638807717/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2021/HP_rotating_3dec_bob_sc_jpcxss.jpg/mxw_2048,f_auto",
    "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638965101/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2021/HP_iPhone13Series_8Dec_rapza1.jpg/mxw_2048,f_auto",
    "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639631540/Croma%20Assets/CMS/LP%20Page%20Banners/2021/Parties%20Begin%20at%20Croma/HP_NewBeginnings_Croma-Wed_Thu_13Dec_trrumh.jpg/mxw_2048,f_auto",
  ];

  let header = document.querySelector(".img-wrapper");
  let img = document.createElement("img");

  img.src = arr[0];

  let i = 0;

  header.append(img);

  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }

    img.src = arr[i];
    i++;
  }, 3000);
}
slideShow();

// using spread operator
const productContainers = [...document.querySelectorAll(".product-container")];

const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();

  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
