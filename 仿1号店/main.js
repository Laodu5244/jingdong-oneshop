// 二维码显示隐藏
let download = document.querySelector('.download');
let download_img = document.querySelector('.download-img');
download.onmouseenter = function () {
  download_img.style.display = "block"
}
download.onmouseleave = function () {
  download_img.style.display = "none"
}

// head横栏弹出框
let head_foot = document.querySelector(".head-foot");
let blink = document.querySelector(".blink");
let t4 = document.querySelector(".t4")
head_foot.addEventListener("click", function () {
  blink.style.display = "block";
})
t4.addEventListener("click", function () {
  blink.style.display = "none";
})

// 返回顶部弹出框 
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let gotop1 = document.querySelector(".gotop1");
let download_img2 = document.querySelector("#download-img2");

// 弹出客服
gotop1.onmouseenter = function () {
  box1.style.display = "block";
}
gotop1.onmouseleave = function () {
  box1.style.display = "none";
}
// 弹出二维码
download_img2.onmouseenter = function () {
  box2.style.display = "block";
}
download_img2.onmouseleave = function () {
  box2.style.display = "none";
}

// 鼠标经过商品动画
let scale_imgs = document.querySelectorAll(".list img");
let shop_jpg = document.querySelectorAll(".shop-jpg");
let up_jpg = document.querySelectorAll(".up-jpg");
let icon_text = document.querySelectorAll(".list p")

// 切换商品图标函数
scale_imgs.forEach((i, index) => {
  i.addEventListener("mouseenter", function () {
    // 切换商品图标
    scale_imgs.forEach((item) => {
      item.classList.remove("active");
    })
    this.classList.add("active");

    // 切换商品图标隐藏文字
    icon_text.forEach((item2) => {
      icon_text.forEach(item3 => {
        item3.classList.remove("active4");
      })
      item2 = index;
      icon_text[item2].classList.add("active4");
    })

    // 切换商品图标改变背景图
    shop_jpg.forEach((item2) => {
      shop_jpg.forEach(item3 => {
        item3.classList.remove("active2");
      })
      item2 = index;
      shop_jpg[item2].classList.add("active2");
    })
    // 切换商品图标改变动图
    up_jpg.forEach((item2) => {
      up_jpg.forEach(item3 => {
        item3.classList.remove("active3");
      })
      item2 = index;
      up_jpg[item2].classList.add("active3");
    })
  });
});

// 获取左右箭头
let leftIcon = document.querySelector(".lefticon img");
let rightIcon = document.querySelector(".righticon img");
let maxIndex = 6, minIndex = 1, currentIndex = minIndex;

// 更换左右箭头颜色
leftIcon.onmouseenter = function () {
  leftIcon.src = "./image/lefticon.red.png";
}
leftIcon.onmouseleave = function () {
  leftIcon.src = "./image/lefticon.png";
}
rightIcon.onmouseenter = function () {
  rightIcon.src = "./image/righticon.red.png";
}
rightIcon.onmouseleave = function () {
  rightIcon.src = "./image/righticon.png";
}

// 箭头切换商品
leftIcon.onclick = function () {
  if (currentIndex === minIndex) {
    currentIndex = maxIndex;
  } else {
    currentIndex--;
  }
  arrowChangeIcon();
  arrowChangeShop();
  arrowChangeUp();
  showText();
}

rightIcon.onclick = function () {
  if (currentIndex === maxIndex) {
    currentIndex = minIndex;
  } else {
    currentIndex++;
  }
  arrowChangeIcon();
  arrowChangeShop();
  arrowChangeUp();
  showText();
}

// 箭头改变图标
function arrowChangeIcon() {
  scale_imgs.forEach(i => {
    scale_imgs.forEach(item => {
      item.classList.remove("active")
    })
    i = currentIndex - 1;
    scale_imgs[i].classList.add("active")
  });
}
// 箭头改变背景
function arrowChangeShop() {
  shop_jpg.forEach((item2) => {
    shop_jpg.forEach(item3 => {
      item3.classList.remove("active2");
    })
    item2 = currentIndex - 1;
    shop_jpg[item2].classList.add("active2");
  })
}
// 箭头改变动图
function arrowChangeUp() {
  up_jpg.forEach((item2) => {
    up_jpg.forEach(item3 => {
      item3.classList.remove("active3");
    })
    item2 = currentIndex - 1;
    up_jpg[item2].classList.add("active3");
  })
}

// 箭头隐藏文字
function showText() {
  icon_text.forEach((item2) => {
    icon_text.forEach(item3 => {
      item3.classList.remove("active4");
    })
    item2 = currentIndex - 1;
    icon_text[item2].classList.add("active4");
  })
}



