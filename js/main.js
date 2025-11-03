// 슬라이드쇼별 인덱스
let slideIndex = [1, 1, 1, 1];

// 슬라이드 컨테이너 선택자
let slideSelector = [
  ".container[data-slideshow='1']",
  ".container[data-slideshow='2']",
  ".container[data-slideshow='3']",
  ".container[data-slideshow='4']"
];

// 페이지 로드시 초기화
window.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < slideSelector.length; i++) {
    showSlides(1, i);
  }
});

// 썸네일 클릭
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

// 메인 함수
function showSlides(n, no) {
  const container = document.querySelector(slideSelector[no]);
  if (!container) return;

  const slides = container.querySelectorAll(".mySlides");
  const dots = container.querySelectorAll(".demo");

  if (slides.length === 0) return;

  if (n > slides.length) slideIndex[no] = 1;
  if (n < 1) slideIndex[no] = slides.length;

  slides.forEach(slide => slide.style.display = "none");
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex[no] - 1].style.display = "block";
  if (dots[slideIndex[no] - 1]) dots[slideIndex[no] - 1].classList.add("active");
}
