
 const apiKey = '7da30a61fdb34ecaa7ab94ec8e182f15'; 
const url = `https://api.geoapify.com/v2/places?categories=tourism.sights&filter=circle:8.2275,46.8182,20000&limit=35&apiKey=${apiKey}`;

fetch(url)
  .then(response => {
    if (!response.ok) throw new Error('API isteği başarısız oldu: ' + response.status);
    return response.json();
  })
  .then(data => {
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = '';

    const allPlaces = data.features;

    // Rastgele 5 tane seç
    const shuffled = allPlaces.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);

    selected.forEach(place => {
      const li = document.createElement('li');
      li.textContent = place.properties.name || 'İsimsiz Yer';
      placesList.appendChild(li);
    });

    if (selected.length === 0) {
      placesList.innerHTML = 'Gezilecek yer bulunamadı.';
    }
  })
  .catch(error => {
    document.getElementById('places-list').textContent = error.message;
    console.error(error);
  });

