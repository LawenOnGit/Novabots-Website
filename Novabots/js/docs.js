const links = document.querySelectorAll(".sidebar-link");
const articles = document.querySelectorAll(".docs-article");

links.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;

    links.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    articles.forEach((article) => {
      article.classList.toggle("active", article.id === targetId);
    });

    document.querySelector(".docs-content").scrollTo({ top: 0, behavior: "smooth" });
  });
});
