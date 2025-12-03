const btnTopo = document.getElementById("btn-topo");

if (btnTopo) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 280) {
      btnTopo.style.display = "flex";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
