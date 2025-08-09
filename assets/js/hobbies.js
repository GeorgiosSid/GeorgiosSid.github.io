// ---- Hiking places (paths must match your folders) ----
const hikingPlaces = [
  {
    id: "verliga",
    name: { en: "Verliga Alpine Lake", el: "Βερλίγκα" },
    lat: 39.526, lng: 21.095,
    photos: [
      "media/hobbies/hiking/verliga/1.jpg",
      "media/hobbies/hiking/verliga/2.jpg",
      "media/hobbies/hiking/verliga/3.jpg"
    ]
  },
  {
    id: "timfi",
    name: { en: "Mt Timfi", el: "Τύμφη" },
    lat: 39.97, lng: 20.78,
    photos: [
      "media/hobbies/hiking/timphi/1.jpg",
      "media/hobbies/hiking/timphi/2.jpg",
      "media/hobbies/hiking/timphi/3.jpg",
      "media/hobbies/hiking/timphi/4.jpg",
      "media/hobbies/hiking/timphi/5.jpg",
      "media/hobbies/hiking/timphi/6.jpg",
      "media/hobbies/hiking/timphi/7.MOV"
    ]
  },
  {
    id: "vikos",
    name: { en: "Vikos Gorge", el: "Φαράγγι Βίκου" },
    lat: 39.92, lng: 20.75,
    photos: [
      "media/hobbies/hiking/faragki_vikou/1.jpg",
      "media/hobbies/hiking/faragki_vikou/2.jpg",
      "media/hobbies/hiking/faragki_vikou/3.jpg",
      "media/hobbies/hiking/faragki_vikou/4.jpg",
      "media/hobbies/hiking/faragki_vikou/5.jpg",
      "media/hobbies/hiking/faragki_vikou/6.jpg"
    ]
  }
];

// State
const Hike = {
  map: null, base: null, labels: null, markers: [],
  currentPlace: null, currentMedia: [],
  tabsEl: null
};

// ---------- helpers ----------
const isVideo = src => /\.(mp4|mov|webm)$/i.test(src);
const firstImageOrNull = place => place.photos.find(p => !isVideo(p)) || null;
const lang = () => (window.currentLang || "en");
const placeTitle = p => p ? (lang() === "el" ? p.name.el : p.name.en) : "";

// small media HTML
function galleryItemHTML(src, title, idx, small = false) {
  if (isVideo(src)) {
    return small
      ? `<video class="thumb" muted playsinline loop preload="metadata" aria-label="${title} video ${idx + 1}">
           <source src="${src}" type="video/mp4">
           <source src="${src}" type="video/quicktime">
         </video>`
      : `<video controls playsinline preload="metadata" aria-label="${title} video ${idx + 1}">
           <source src="${src}" type="video/mp4">
           <source src="${src}" type="video/quicktime">
         </video>`;
  }
  return `<img src="${src}" alt="${title} photo ${idx + 1}">`;
}

// carousel scaffold
function buildCarouselHTML(itemsHTML, headerText) {
  const header = `
    <div class="gal-header">
      <span class="gal-dot"></span><span class="gal-title">${headerText}</span>
    </div>`;
  return header + `
    <div class="carousel">
      <button class="car-prev" aria-label="Previous">‹</button>
      <div class="car-viewport">
        <div class="car-track">${itemsHTML}</div>
      </div>
      <button class="car-next" aria-label="Next">›</button>
    </div>`;
}

function getSlidesPerView(root){
  const v = parseInt(getComputedStyle(root).getPropertyValue('--spv'), 10);
  return Number.isFinite(v) && v > 0 ? v : 3;
}

/* ---- Looping carousel with BOTH arrows ---- */
function initCarousel(root) {
  const vp    = root.querySelector('.car-viewport');
  const track = root.querySelector('.car-track');
  const prev  = root.querySelector('.car-prev');
  const next  = root.querySelector('.car-next');

  let items = Array.from(track.children);
  const totalCount = items.length;
  if (totalCount === 0) return;

  prev.style.display = totalCount > 1 ? 'flex' : 'none';
  next.style.display = totalCount > 1 ? 'flex' : 'none';

  let spv = Math.min(getSlidesPerView(root), Math.max(1, totalCount));

  const headClones = items.slice(0, spv).map(n => n.cloneNode(true));
  const tailClones = items.slice(-spv).map(n => n.cloneNode(true));
  tailClones.forEach(n => track.insertBefore(n, track.firstChild));
  headClones.forEach(n => track.appendChild(n));

  items = Array.from(track.children);
  const logicalCount = totalCount;
  let index = spv;
  let transitioning = false;

  function stepWidth(){ spv = Math.min(getSlidesPerView(root), Math.max(1, logicalCount)); return vp.clientWidth / spv; }
  function setTransform(i, animate = true){
    if (!animate) {
      const old = track.style.transition;
      track.style.transition = 'none';
      track.style.transform = `translateX(${-i * stepWidth()}px)`;
      void track.offsetWidth;
      track.style.transition = old || '';
    } else {
      track.style.transform = `translateX(${-i * stepWidth()}px)`;
    }
  }
  function goTo(i){
    if (transitioning) return;
    transitioning = true;
    index = i;
    setTransform(index, true);
  }
  function normalizeAfterTransition(){
    const realStart = spv;
    const realEnd   = spv + logicalCount - 1;
    if (index > realEnd) { index = index - logicalCount; setTransform(index, false); }
    else if (index < realStart) { index = index + logicalCount; setTransform(index, false); }
  }

  prev.addEventListener('click', () => goTo(index - 1));
  next.addEventListener('click', () => goTo(index + 1));

  // swipe
  let startX = null;
  vp.addEventListener('pointerdown', e => (startX = e.clientX));
  vp.addEventListener('pointerup', e => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    if (dx > 30) goTo(index - 1);
    if (dx < -30) goTo(index + 1);
    startX = null;
  });

  track.addEventListener('transitionend', () => { normalizeAfterTransition(); transitioning = false; });
  window.addEventListener('resize', () => setTransform(index, false));

  // Click to open lightbox at logical index
  vp.addEventListener('click', (e) => {
    const item = e.target.closest('.car-item');
    if (!item) return;
    const all = Array.from(track.querySelectorAll('.car-item'));
    const clickedIndexInTrack = all.indexOf(item);
    const logicalIndex = (clickedIndexInTrack - spv) % logicalCount;
    const startIdx = (logicalIndex + logicalCount) % logicalCount;
    openLightbox(Hike.currentMedia, startIdx);
  });

  setTransform(index, false);
}

/* ---------- Lightbox ---------- */
const Lightbox = { el: null, frame: null, closeBtn: null, prevBtn: null, nextBtn: null, media: [], index: 0 };

function ensureLightbox(){
  if (Lightbox.el) return;
  const el = document.createElement('div');
  el.id = 'lightbox';
  el.innerHTML = `
    <div class="lb-frame">
      <button class="lb-close" aria-label="Close">×</button>
      <button class="lb-prev" aria-label="Previous">‹</button>
      <div class="lb-stage"><div class="lb-inner"></div></div>
      <button class="lb-next" aria-label="Next">›</button>
    </div>
  `;
  document.body.appendChild(el);
  Lightbox.el = el;
  Lightbox.frame = el.querySelector('.lb-inner');
  Lightbox.closeBtn = el.querySelector('.lb-close');
  Lightbox.prevBtn  = el.querySelector('.lb-prev');
  Lightbox.nextBtn  = el.querySelector('.lb-next');

  Lightbox.closeBtn.addEventListener('click', closeLightbox);
  Lightbox.prevBtn.addEventListener('click', () => lbGo(-1));
  Lightbox.nextBtn.addEventListener('click', () => lbGo(+1));
  el.addEventListener('click', (e) => { if (e.target.id === 'lightbox') closeLightbox(); });

  el.querySelector('.lb-frame').addEventListener('animationend', () => {
    if (Lightbox.el.classList.contains('closing')) {
      Lightbox.el.classList.remove('active', 'closing');
    }
  });
}
function openLightbox(media, startIndex){
  ensureLightbox();
  Lightbox.media = media || [];
  Lightbox.index = Math.max(0, Math.min(startIndex || 0, Lightbox.media.length - 1));
  updateLightbox();
  document.body.classList.add('lb-open');
  Lightbox.el.classList.remove('closing');
  Lightbox.el.classList.add('active');
  window.addEventListener('keydown', lbKeyHandler);
}
function closeLightbox(){
  Lightbox.el.classList.add('closing');
  document.body.classList.remove('lb-open');
  window.removeEventListener('keydown', lbKeyHandler);
}
function lbKeyHandler(e){
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') lbGo(-1);
  if (e.key === 'ArrowRight') lbGo(+1);
}
function lbGo(delta){
  if (!Lightbox.media.length) return;
  Lightbox.index = (Lightbox.index + delta + Lightbox.media.length) % Lightbox.media.length;
  updateLightbox();
}
function updateLightbox(){
  const src = Lightbox.media[Lightbox.index];
  if (!src) return;
  const isV = isVideo(src);
  Lightbox.frame.innerHTML = isV
    ? `<video controls playsinline preload="metadata"><source src="${src}" type="video/mp4"><source src="${src}" type="video/quicktime"></video>`
    : `<img src="${src}" alt="Hiking media">`;
}

/* ---------- Map tiles & popups ---------- */
function addTiles(map, isDark) {
  const imageryUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}";
  const attribution =
    'Imagery © <a href="https://www.esri.com/">Esri</a> | Data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="https://carto.com/attributions">CARTO</a>';

  if (Hike.base) map.removeLayer(Hike.base);
  if (Hike.labels) map.removeLayer(Hike.labels);

  Hike.base = L.tileLayer(imageryUrl, { attribution, maxZoom: 19 }).addTo(map);

  const labelsUrl = isDark
    ? "https://{s}.basemaps.cartocdn.com/dark_only_labels/{z}/{x}/{y}{r}.png"
    : "https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png";

  if (!map.getPane("labels")) {
    map.createPane("labels");
    map.getPane("labels").style.zIndex = 650;
    map.getPane("labels").style.pointerEvents = "none";
  }
  Hike.labels = L.tileLayer(labelsUrl, { maxZoom: 20, pane: "labels" }).addTo(map);
}

function thumbIconForPlace(place) {
  const img = firstImageOrNull(place);
  return L.divIcon({
    className: "photo-marker",
    html: `<span class="marker-inner"${img ? ` style="background-image:url('${img}')"` : ""}></span>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21],
    popupAnchor: [0, -18]
  });
}

function popupHTML(place, lng) {
  const title = (lng === "el" ? place.name.el : place.name.en) || "";
  const thumbs = place.photos.slice(0, 3).map((src, i) => galleryItemHTML(src, title, i, true)).join("");
  const viewLabel = (lng === "el" ? "Δες το άλμπουμ" : "View gallery");
  return `
    <div class="popup-wrap">
      <div class="popup-title">${title}</div>
      <div class="popup-gallery">${thumbs}</div>
      <button class="popup-view" type="button" data-place="${place.id}">${viewLabel}</button>
    </div>
  `;
}

/* ---------- Places tabs ---------- */
function renderPlaceTabs(activeId){
  const wrap = document.getElementById('hikePlaces');
  if (!wrap) return;
  Hike.tabsEl = wrap;

  wrap.innerHTML = hikingPlaces.map(p =>
    `<button class="tab" role="tab" data-id="${p.id}" aria-selected="${p.id === activeId ? 'true' : 'false'}">${placeTitle(p)}</button>`
  ).join('');

  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab');
    if (!btn) return;
    const id = btn.dataset.id;
    const p = hikingPlaces.find(x => x.id === id);
    if (p) renderHikingGallery(p);
  });
}

function setActiveTab(id){
  if (!Hike.tabsEl) return;
  [...Hike.tabsEl.querySelectorAll('.tab')].forEach(b => {
    const on = b.dataset.id === id;
    b.setAttribute('aria-selected', on ? 'true' : 'false');
    if (on) b.scrollIntoView({ inline: 'center', behavior: 'smooth', block: 'nearest' });
  });
}

/* ---------- Gallery ---------- */
function renderHikingGallery(place) {
  const gallery = document.getElementById("hikingGallery");
  if (!gallery) return;

  const p = place || Hike.currentPlace || hikingPlaces.find(x => x.id === "timfi") || hikingPlaces[0];
  Hike.currentPlace = p;
  Hike.currentMedia = p.photos.slice();

  const title = placeTitle(p);
  const itemsHTML = p.photos.map((src, i) =>
    `<div class="car-item">${galleryItemHTML(src, title, i, false)}</div>`
  ).join("");

  gallery.innerHTML = buildCarouselHTML(itemsHTML, title);
  initCarousel(gallery.querySelector('.carousel'));

  // update tabs
  renderPlaceTabs(p.id);      // ensure tabs exist (also rebuilds names after language change)
  setActiveTab(p.id);
}

/* ---------- Init ---------- */
function initHiking() {
  const mapEl = document.getElementById("hikeMap");
  if (!mapEl) return;

  if (Hike.map) { Hike.map.remove(); Hike.map = null; Hike.base = null; Hike.labels = null; Hike.markers = []; }

  const isDark = document.documentElement.classList.contains("dark-theme");

  Hike.map = L.map(mapEl, { scrollWheelZoom: false }).setView([39.67, 21.7], 7);
  addTiles(Hike.map, isDark);

  // default selection
  renderHikingGallery(hikingPlaces.find(x => x.id === "timfi") || hikingPlaces[0]);

  hikingPlaces.forEach(p => {
    const m = L.marker([p.lat, p.lng], { icon: thumbIconForPlace(p) })
      .addTo(Hike.map)
      .bindPopup(popupHTML(p, lang()));

    m.on("click", () => renderHikingGallery(p));
    Hike.markers.push(m);
  });

  Hike.map.on("popupopen", (e) => {
    const btn = e.popup._contentNode.querySelector(".popup-view");
    if (btn) {
      const pid = btn.getAttribute("data-place");
      const place = hikingPlaces.find(x => x.id === pid);
      btn.addEventListener("click", () => {
        if (place) renderHikingGallery(place);
        Hike.map.closePopup();
      });
    }
  });
}

/* ---------- Reactions ---------- */
function updateHikePopupLanguage() {
  if (!Hike.map) return;
  const lng = lang();
  Hike.markers.forEach((m, idx) => {
    m.setPopupContent(popupHTML(hikingPlaces[idx], lng));
  });
  // refresh carousel + tabs titles in the new language
  renderHikingGallery(Hike.currentPlace);
}
function updateHikeTileForTheme() {
  if (!Hike.map) return;
  addTiles(Hike.map, document.documentElement.classList.contains("dark-theme"));
}

document.addEventListener("DOMContentLoaded", initHiking);
window.addEventListener("i18n:changed", updateHikePopupLanguage);
window.addEventListener("theme:changed", updateHikeTileForTheme);
