const container = document.getElementById("news-container");

// Example news (you can replace with API later)
const news = [
  {
    title: "Breaking News 🚨",
    description: "Something important happened today.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Tech Update 💻",
    description: "New tech is changing the world.",
    image: "https://via.placeholder.com/400x200"
  }
];

function displayNews() {
  news.forEach(article => {
    const div = document.createElement("div");
    div.classList.add("article");

    div.innerHTML = `
      <img src="${article.image}" />
      <h2>${article.title}</h2>
      <p>${article.description}</p>
    `;

    container.appendChild(div);
  });
}

displayNews();
