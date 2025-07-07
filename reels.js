// 🎬 Play only hovered video — others pause
const videos = document.querySelectorAll(".reel-video");

videos.forEach((video) => {
  video.addEventListener("mouseenter", () => {
    videos.forEach((v) => {
      if (v !== video) {
        v.pause();
        v.currentTime = 0;
        v.closest(".reel-item")?.classList.remove("active");
      }
    });
    video.play().catch(() => {});
    video.closest(".reel-item")?.classList.add("active");
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
    video.closest(".reel-item")?.classList.remove("active");
  });
});
