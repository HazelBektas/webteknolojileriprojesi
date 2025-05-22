const apiKey = "7da30a61fdb34ecaa7ab94ec8e182f15";
const endpoint = `https://api.geoapify.com/v2/places?categories=national_park,natural.protected_area,natural.forest,natural.water,natural.mountain,leisure.park,leisure.picnic
&filter=circle:8.2275,46.8182,20000&limit=12&apiKey=7da30a61fdb34ecaa7ab94ec8e182f15`;

const cardsContainer = document.getElementById("cards-container");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log("API yanıtı:", data);

    if (!data.features) {
      console.error("features özelliği eksik veya geçersiz:", data);
      cardsContainer.innerHTML = `<p>API hatası: ${data.message || "Bilinmeyen hata"}</p>`;
      return;
    }

    const places = data.features;

    places.forEach((place) => {
      const props = place.properties;

      const imageUrl = props.image || "https://cdn-icons-png.flaticon.com/512/427/427735.png";
      const description = props.wikipedia_description || props.name || "Doğal güzellik";
      const location = props.city || props.county || props.state || "Bilinmeyen yer";

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${imageUrl}" alt="${props.name}" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">${props.name}</h3>
          <p class="card-description">${description}</p>
          <p class="card-location">${location}</p>
        </div>
      `;

      cardsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("API'den veri çekme hatası:", error);
    cardsContainer.innerHTML = "<p>Veri yüklenirken hata oluştu.</p>";
  });


