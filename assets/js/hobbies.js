// hobbies.js — hiking map + gallery, re-init on language change
(function () {
  const hikingPlaces = [
    {
      id: "olympus",
      name: { en: "Mt Olympus", el: "Ολυμπος" },
      lat: 40.089, lng: 22.358,
      photos: [
        "media/hobbies/hiking/olympus1.jpg",
        "media/hobbies/hiking/olympus2.jpg"
      ]
    },
    {
      id: "tzoumerka",
      name: { en: "Tzoumerka", el: "Τζουμερκα" },
      lat: 39.45, lng: 21.08,
      photos: [
        "media/hobbies/hiking/tzoumerka1.jpg",
        "media/hobbies/hiking/tzoumerka2.jpg"
      ]
    }
  ];

  const Hike = { map: null };

  function renderHikingGallery(place) {
    const gallery = document.getElementById("hikingGallery");
    if (!gallery) return;
    const imgs = place ? place.photos : hikingPlaces.flatMap(p => p.photos);
    gallery.innerHTML = imgs.map(src => `<img src="${src}" alt="Hiking photo">`).join("");
  }

  function initHiking() {
    const mapEl = document.getElementById("hikeMap");
    if (!mapEl || typeof L === 'undefined') return;

    if (Hike.map) { Hike.map.remove(); Hike.map = null; }

    Hike.map = L.map(mapEl, { scrollWheelZoom: false }).setView([39.67, 21.7], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap"
    }).addTo(Hike.map);

    renderHikingGallery(null);

    const lang = (window.__i18n?.currentLang && window.__i18n.currentLang()) || 'en';
    hikingPlaces.forEach(p => {
      const title = lang === "el" ? p.name.el : p.name.en;
      const m = L.marker([p.lat, p.lng]).addTo(Hike.map).bindPopup(title);
      m.on("click", () => renderHikingGallery(p));
    });
  }

  document.addEventListener("DOMContentLoaded", initHiking);
  document.addEventListener("lang:changed", initHiking);
})();
