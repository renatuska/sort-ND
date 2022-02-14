document.getElementById("click").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".new").classList.add("active");
    document.getElementById("click").classList.remove("active");
  });
  document.getElementById("close").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".new").classList.remove("active");
    document.getElementById("click").classList.add("active");
  });