const apiKey = "7da30a61fdb34ecaa7ab94ec8e182f15"; 
const lat = 46.8182;   // İsviçre enlem
const lon = 8.2275;    // İsviçre boylam
const radius = 10000;  // 10 km yarıçap
const category = "tourism.sights"; // Gezilecek popüler yerler kategorisi
const limit = 20;      // İlk 20 sonucu alacağız, içinden 5 rastgele göstereceğiz

// Geoapify API URL'si
const url='https://api.geoapify.com/v2/places?categories=tourism.attractions&filter=circle:8.2275,46.8182,10000&limit=5&apiKey=7da30a61fdb34ecaa7ab94ec8e182f15'


async function fetchPlaces() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("API isteği başarısız oldu.");
    const data = await response.json();

    
    console.log(data); 

    const places = data.features;
    if (!places || places.length === 0) {
      showError("Gezilecek yer bulunamadı.");
      return;
    }

    // 20 yer arasından rastgele 5 farklı yer seç
    const randomPlaces = getRandomItems(places, 5);
    displayPlaces(randomPlaces);
  } catch (error) {
    showError(error.message);
  }
}

// Rastgele eleman seçen fonksiyon
function getRandomItems(array, numberOfItems) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfItems);
}

// Gezilecek yerleri listele
function displayPlaces(places) {
  const list = document.getElementById("places-list");
  list.innerHTML = "";

  places.forEach((place) => {
    const name = place.properties.name || "İsimsiz Yer";
    const address = place.properties.address_line1 || "";
    const city = place.properties.city || "";
    const description = place.properties.wikipedia || place.properties.description || "";

    const li = document.createElement("li");
    li.classList.add("place-item");

    li.innerHTML = `
      <h3>${name}</h3>
      <p>${address} ${city}</p>
      <p>${description}</p>
    `;

    list.appendChild(li);
  });
}

// Hata mesajı göster
function showError(message) {
  const list = document.getElementById("places-list");
  list.innerHTML = `<li class="error-message">${message}</li>`;
}

// Sayfa yüklendiğinde API çağrısı yap
window.onload = fetchPlaces;
