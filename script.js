const newsData = [
  {
    title: "How design history shapes us today",
    desc: "Graphic design is a big part of our modern world...",
    image: "https://via.placeholder.com/400x200",
    time: "2 min",
    category: "New"
  },
  {
    title: "The simplicity is key in logo design",
    desc: "Simple logos are more powerful and memorable...",
    image: "https://via.placeholder.com/400x200",
    time: "5 min",
    category: "Major"
  }
];

const container = document.getElementById("newsList");

function renderNews(filter = "New") {
  container.innerHTML = "";

  newsData
    .filter(n => n.category === filter)
    .forEach(news => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="meta">
          <span>⏱ ${news.time}</span>
          <span>⋮</span>
        </div>
        <img src="${news.image}">
        <h3>${news.title}</h3>
        <p>${news.desc}</p>
      `;

      container.appendChild(card);
    });
}

renderNews();

// Tabs
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    tab.classList.add("active");

    renderNews(tab.textContent);
  });
});
