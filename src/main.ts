import './style.css';
import { wallpapersData } from './data/wallpapers';
import type { Wallpaper } from './data/wallpapers';

// Spiritual quotes mapping based on category
const quotesMap: Record<string, string> = {
  'Shiva': '“Om Namah Shivaya. The universe is inside you. Discover the stillness and source of all creation.”',
  'Krishna': '“Whenever you feel overwhelmed, remember my flute, my love, and my guidance. Surrender to the flow of love.”',
  'Ganesha': '“Vakratunda Mahakaya. May the divine wisdom of Lord Ganesha clear all obstacles from your journey.”',
  'Durga': '“Ya Devi Sarvabhuteshu. Awakening the divine power, courage, and protective strength within your soul.”',
  'Hanuman': '“Sankat Mochan. With pure devotion and humility, even the most majestic mountains of difficulty can be lifted.”',
  'Ram': '“Ramo Vigrahavan Dharmah. Walk the path of righteousness, truth, and inner peace in every action.”',
  'Saraswati': '“May the flow of wisdom, knowledge, music, and creative art illuminate your mind and intellect.”',
  'Temple': '“Sacred energy resides in places of deep devotion, prayer, and silence. Connect with the source.”',
  'Cosmic': '“You are not a drop in the ocean. You are the entire cosmic ocean flowing in a single drop.”'
};

// Application State
interface AppState {
  searchQuery: string;
  selectedAspectRatio: string;
  selectedCategory: string;
  favorites: Set<string>;
  showFavoritesOnly: boolean;
  activeWallpaperId: string | null;
  isSimUiVisible: boolean;
}

const state: AppState = {
  searchQuery: '',
  selectedAspectRatio: 'All',
  selectedCategory: 'All',
  favorites: new Set<string>(JSON.parse(localStorage.getItem('bhakti_favorites') || '[]')),
  showFavoritesOnly: false,
  activeWallpaperId: null,
  isSimUiVisible: true
};

// SVG Icon Helpers to avoid heavy runtime packages and load instantly
const ICONS = {
  logo: `<svg class="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3c-1.2 0-2.4.6-3 1.7A5 5 0 0 0 3 10c0 3.2 2.5 5.8 5.7 6.3a5 5 0 0 0 6.6 0c3.2-.5 5.7-3.1 5.7-6.3a5 5 0 0 0-6-5.3c-.6-1.1-1.8-1.7-3-1.7Z"/>
    <path d="M12 10V3"/>
    <path d="M12 10c-2 0-4 1.5-4 4.5s2 4.5 4 4.5 4-1.5 4-4.5-2-4.5-4-4.5Z"/>
    <path d="M12 21v-2"/>
  </svg>`,
  search: `<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>`,
  heart: (filled: boolean) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${filled ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>`
};

// Initial HTML Shell setup
const rootElement = document.querySelector<HTMLDivElement>('#app');
if (rootElement) {
  rootElement.innerHTML = `
    <div class="app-container">
      <header>
        <div class="logo-container">
          ${ICONS.logo}
          <h1>Bhakti Wallpapers</h1>
        </div>
        <p>Premium 4K Devotional Backgrounds for Mobile & Desktop</p>
      </header>

      <div class="toolbar">
        <div class="search-row">
          <div class="search-wrapper">
            <input type="text" id="search-input" placeholder="Search by deity or theme (e.g. Shiva, Krishna, Ganesha...)" />
            ${ICONS.search}
          </div>
          <button id="fav-toggle" class="fav-toggle-btn">
            ${ICONS.heart(false)}
            Show Favorites
          </button>
        </div>

        <div class="filter-row">
          <div class="aspect-tabs">
            <button class="aspect-tab active" data-aspect="All">All Sizes</button>
            <button class="aspect-tab" data-aspect="9:16">Mobile (9:16)</button>
            <button class="aspect-tab" data-aspect="16:9">Desktop (16:9)</button>
          </div>
          
          <div id="category-pills" class="category-list">
            <!-- Categories injected dynamically -->
          </div>
        </div>
      </div>

      <main>
        <div id="wallpaper-grid" class="wallpaper-grid">
          <!-- Wallpapers injected dynamically -->
        </div>
      </main>

      <footer>
        <p>© 2026 Bhakti Wallpapers. Website made by Kisna Raghuvanshi.</p>
        <p>Images generated with high fidelity AI. All rights reserved.</p>
      </footer>
    </div>

    <!-- Interactive Preview Modal -->
    <div id="preview-modal" class="modal-overlay">
      <div class="modal-container">
        <button id="modal-close" class="modal-close-btn" aria-label="Close modal">
          ${ICONS.close}
        </button>
        
        <div class="modal-preview-panel">
          <div class="sim-controls">
            <button id="sim-toggle-ui" class="sim-btn active">
              ${ICONS.eye}
              Toggle UI Overlay
            </button>
          </div>
          
          <!-- Simulator Frame (Injected dynamically based on Aspect Ratio) -->
          <div id="device-simulator-wrapper"></div>
        </div>
        
        <div class="modal-details-panel">
          <div class="details-header-wrapper">
            <div class="details-header">
              <h2 id="modal-title">Wallpaper Title</h2>
              <div class="details-meta">
                <span id="modal-aspect" class="aspect-badge">9:16</span>
                <span id="modal-category" class="card-category">Shiva</span>
              </div>
            </div>
            
            <div id="modal-quote" class="quote-container">
              <!-- Spiritual Quote -->
            </div>
            
            <div class="details-tags">
              <h4>Tags</h4>
              <div id="modal-tags-list" class="tags-list">
                <!-- Tags list -->
              </div>
            </div>
          </div>
          
          <div class="actions-container">
            <button id="modal-btn-download" class="action-btn-main btn-download">
              ${ICONS.download}
              Download Wallpaper
            </button>
            
            <div class="secondary-actions">
              <button id="modal-btn-fav" class="action-btn-sec fav-modal-btn">
                ${ICONS.heart(false)}
                <span>Favorite</span>
              </button>
              <button id="modal-btn-share" class="action-btn-sec">
                ${ICONS.share}
                Share Link
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast-notify" class="toast-container">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
      <span id="toast-text">Link copied to clipboard!</span>
    </div>
  `;
}

// DOM Cache
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const favToggle = document.getElementById('fav-toggle') as HTMLButtonElement;
const aspectTabs = document.querySelectorAll('.aspect-tab');
const categoryPillsContainer = document.getElementById('category-pills') as HTMLDivElement;
const wallpaperGrid = document.getElementById('wallpaper-grid') as HTMLDivElement;

const previewModal = document.getElementById('preview-modal') as HTMLDivElement;
const modalClose = document.getElementById('modal-close') as HTMLButtonElement;
const simToggleUi = document.getElementById('sim-toggle-ui') as HTMLButtonElement;
const deviceSimulatorWrapper = document.getElementById('device-simulator-wrapper') as HTMLDivElement;
const modalTitle = document.getElementById('modal-title') as HTMLHeadingElement;
const modalAspect = document.getElementById('modal-aspect') as HTMLSpanElement;
const modalCategory = document.getElementById('modal-category') as HTMLSpanElement;
const modalQuote = document.getElementById('modal-quote') as HTMLDivElement;
const modalTagsList = document.getElementById('modal-tags-list') as HTMLDivElement;
const modalBtnDownload = document.getElementById('modal-btn-download') as HTMLButtonElement;
const modalBtnFav = document.getElementById('modal-btn-fav') as HTMLButtonElement;
const modalBtnShare = document.getElementById('modal-btn-share') as HTMLButtonElement;

const toastNotify = document.getElementById('toast-notify') as HTMLDivElement;
const toastText = document.getElementById('toast-text') as HTMLSpanElement;

// Helper: Show Toast
function showToast(message: string) {
  toastText.textContent = message;
  toastNotify.classList.add('show');
  setTimeout(() => {
    toastNotify.classList.remove('show');
  }, 2500);
}

// Favorites State Sync
function toggleFavorite(id: string) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
    showToast('Removed from favorites');
  } else {
    state.favorites.add(id);
    showToast('Added to favorites!');
  }
  localStorage.setItem('bhakti_favorites', JSON.stringify(Array.from(state.favorites)));
  
  // Sync favorites toggler visual state
  renderGrid();
  updateModalFavBtn();
}

function updateModalFavBtn() {
  if (!state.activeWallpaperId) return;
  const isFav = state.favorites.has(state.activeWallpaperId);
  modalBtnFav.innerHTML = `
    ${ICONS.heart(isFav)}
    <span>${isFav ? 'Favorited' : 'Favorite'}</span>
  `;
  if (isFav) {
    modalBtnFav.classList.add('favorited');
  } else {
    modalBtnFav.classList.remove('favorited');
  }
}

// Render Category Chips
function renderCategories() {
  // Collect all unique categories
  const categories = ['All', ...new Set(wallpapersData.map((wp: Wallpaper) => wp.category))];
  
  categoryPillsContainer.innerHTML = categories.map(cat => {
    const isActive = state.selectedCategory === cat;
    return `<button class="category-pill ${isActive ? 'active' : ''}" data-category="${cat}">${cat}</button>`;
  }).join('');

  // Add click events
  categoryPillsContainer.querySelectorAll('.category-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      state.selectedCategory = target.getAttribute('data-category') || 'All';
      
      // Update UI active states
      categoryPillsContainer.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
      target.classList.add('active');
      
      renderGrid();
    });
  });
}

// Filter and Render Wallpapers
function renderGrid() {
  let filtered = wallpapersData.filter((wp: Wallpaper) => {
    // Search Query filter
    const matchesSearch = wp.title.toLowerCase().includes(state.searchQuery.toLowerCase()) || 
                          wp.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                          wp.tags.some((t: string) => t.toLowerCase().includes(state.searchQuery.toLowerCase()));
    
    // Aspect Ratio filter
    const matchesAspect = state.selectedAspectRatio === 'All' || wp.aspectRatio === state.selectedAspectRatio;
    
    // Category filter
    const matchesCategory = state.selectedCategory === 'All' || wp.category === state.selectedCategory;
    
    // Favorites filter
    const matchesFavorites = !state.showFavoritesOnly || state.favorites.has(wp.id);
    
    return matchesSearch && matchesAspect && matchesCategory && matchesFavorites;
  });

  // Manage Grid classes based on selected aspect ratio
  wallpaperGrid.className = 'wallpaper-grid';
  if (state.selectedAspectRatio === '9:16') {
    wallpaperGrid.classList.add('grid-9-16');
  } else if (state.selectedAspectRatio === '16:9') {
    wallpaperGrid.classList.add('grid-16-9');
  }

  if (filtered.length === 0) {
    wallpaperGrid.innerHTML = `
      <div class="no-results">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <h3>No Wallpapers Found</h3>
        <p>Try clearing your search terms or filters to browse all wallpapers.</p>
      </div>
    `;
    return;
  }

  wallpaperGrid.innerHTML = filtered.map((wp: Wallpaper) => {
    const isFav = state.favorites.has(wp.id);
    const aspectClass = wp.aspectRatio === '9:16' ? 'aspect-9-16' : 'aspect-16-9';
    return `
      <div class="wallpaper-card ${aspectClass}" data-id="${wp.id}">
        <div class="card-img-wrapper">
          <img src="${wp.url}" alt="${wp.title}" loading="lazy" />
          <div class="card-overlay">
            <div class="card-top-actions">
              <button class="card-action-btn fav-btn ${isFav ? 'favorited' : ''}" data-id="${wp.id}" aria-label="Add to favorites">
                ${ICONS.heart(isFav)}
              </button>
            </div>
            <div class="card-bottom-actions">
              <span class="aspect-badge">${wp.aspectRatio}</span>
              <button class="preview-trigger-btn" data-id="${wp.id}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Quick Preview
              </button>
            </div>
          </div>
        </div>
        <div class="card-info">
          <h3>${wp.title}</h3>
          <div class="card-meta">
            <span class="card-category">${wp.category}</span>
            <span class="card-ratio-text">${wp.aspectRatio}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Card & Icon Interaction listeners
  wallpaperGrid.querySelectorAll('.wallpaper-card').forEach(card => {
    // Click card to open preview (unless clicking target is favorite button)
    card.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.closest('.fav-btn')) return; // Avoid triggering preview when favoriting
      
      const id = card.getAttribute('data-id');
      if (id) openPreviewModal(id);
    });
  });

  wallpaperGrid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = (btn as HTMLButtonElement).getAttribute('data-id');
      if (id) toggleFavorite(id);
    });
  });
}

// Mobile Lock Screen Simulator HTML helper
function getMobileSimulatorHTML(imgUrl: string, showUi: boolean) {
  // Format Date and Time dynamically
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

  return `
    <div class="mobile-simulator">
      <div class="sim-screen" style="background-image: url('${imgUrl}');">
        
        <!-- Status Bar -->
        <div class="sim-status-bar">
          <span>${timeStr}</span>
          <div class="sim-status-icons">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="7" width="16" height="10" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="2.5"></rect><line x1="22" y1="11" x2="22" y2="13" stroke="currentColor" stroke-width="2.5"></line><rect x="5" y="10" width="10" height="4"></rect></svg>
          </div>
        </div>

        <!-- Lockscreen UI -->
        <div class="phone-ui ${showUi ? '' : 'hidden'}">
          <div class="phone-clock">
            <div class="time">${timeStr}</div>
            <div class="date">${dateStr}</div>
          </div>
          
          <div class="phone-bottom">
            <div class="phone-shortcuts">
              <div class="phone-shortcut-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
              </div>
              <div class="phone-shortcut-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
              </div>
            </div>
            <div class="phone-unlock-bar"></div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// Desktop Monitor Simulator HTML helper
function getDesktopSimulatorHTML(imgUrl: string, showUi: boolean) {
  return `
    <div class="desktop-simulator">
      <div class="sim-screen" style="background-image: url('${imgUrl}');">
        
        <!-- Desktop UI Mock -->
        <div class="desktop-ui ${showUi ? '' : 'hidden'}">
          
          <!-- Top Menu Bar -->
          <div class="desktop-menu-bar">
            <div class="desktop-menu-left">
              <span></span>
              <span style="font-weight: 700;">File</span>
              <span>Edit</span>
              <span>View</span>
              <span>Go</span>
            </div>
            <div>
              <span>100% 🔋</span>
              <span style="margin-left: 0.5rem;">Wed 10:08 PM</span>
            </div>
          </div>
          
          <!-- Bottom Dock -->
          <div class="desktop-dock">
            <div class="dock-item"></div>
            <div class="dock-item"></div>
            <div class="dock-item"></div>
            <div class="dock-item"></div>
            <div class="dock-item"></div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// Open Preview Modal
function openPreviewModal(id: string) {
  const wp = wallpapersData.find((w: Wallpaper) => w.id === id);
  if (!wp) return;

  state.activeWallpaperId = id;
  
  // Set modal texts
  modalTitle.textContent = wp.title;
  modalAspect.textContent = wp.aspectRatio;
  modalCategory.textContent = wp.category;
  
  // Dynamic quote
  modalQuote.textContent = quotesMap[wp.category] || quotesMap['Cosmic'];

  // Render tags
  modalTagsList.innerHTML = wp.tags.map((tag: string) => {
    return `<span class="tag-chip">${tag}</span>`;
  }).join('');

  // Hook Tag Chip Clicks to search inside modal
  modalTagsList.querySelectorAll('.tag-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const tagText = (e.currentTarget as HTMLSpanElement).textContent;
      if (tagText) {
        state.searchQuery = tagText;
        searchInput.value = tagText;
        closePreviewModal();
        renderGrid();
      }
    });
  });

  // Sync Favorite state
  updateModalFavBtn();

  // Render device preview simulator
  renderSimulator();

  // Show Modal
  previewModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Disable background scrolling

  // Update URL search query without reloading
  const newUrl = `${window.location.origin}${window.location.pathname}?wallpaper=${id}`;
  window.history.pushState({ path: newUrl }, '', newUrl);
}

// Render simulator depending on aspect ratio & state
function renderSimulator() {
  if (!state.activeWallpaperId) return;
  const wp = wallpapersData.find((w: Wallpaper) => w.id === state.activeWallpaperId);
  if (!wp) return;

  if (wp.aspectRatio === '9:16') {
    deviceSimulatorWrapper.innerHTML = getMobileSimulatorHTML(wp.url, state.isSimUiVisible);
  } else {
    deviceSimulatorWrapper.innerHTML = getDesktopSimulatorHTML(wp.url, state.isSimUiVisible);
  }
}

// Close Preview Modal
function closePreviewModal() {
  state.activeWallpaperId = null;
  previewModal.classList.remove('active');
  document.body.style.overflow = ''; // Re-enable background scrolling

  // Reset URL query parameter
  const cleanUrl = `${window.location.origin}${window.location.pathname}`;
  window.history.pushState({ path: cleanUrl }, '', cleanUrl);
}

// Download wallpaper file logic
function triggerDownload() {
  if (!state.activeWallpaperId) return;
  const wp = wallpapersData.find((w: Wallpaper) => w.id === state.activeWallpaperId);
  if (!wp) return;

  const a = document.createElement('a');
  a.href = wp.url;
  a.download = `${wp.id}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('Download started!');
}

// Share link copy to clipboard
function copyShareLink() {
  if (!state.activeWallpaperId) return;
  
  const shareUrl = `${window.location.origin}${window.location.pathname}?wallpaper=${state.activeWallpaperId}`;
  
  navigator.clipboard.writeText(shareUrl)
    .then(() => {
      showToast('Link copied to clipboard!');
    })
    .catch(() => {
      showToast('Failed to copy link.');
    });
}

// Attach Global Control Event Listeners
function initEvents() {
  // Real-time search
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = (e.target as HTMLInputElement).value;
    renderGrid();
  });

  // Favorite toggle bar button
  favToggle.addEventListener('click', () => {
    state.showFavoritesOnly = !state.showFavoritesOnly;
    if (state.showFavoritesOnly) {
      favToggle.classList.add('active');
      favToggle.innerHTML = `
        ${ICONS.heart(true)}
        Showing Favorites
      `;
    } else {
      favToggle.classList.remove('active');
      favToggle.innerHTML = `
        ${ICONS.heart(false)}
        Show Favorites
      `;
    }
    renderGrid();
  });

  // Aspect Ratio selector tabs
  aspectTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLButtonElement;
      state.selectedAspectRatio = target.getAttribute('data-aspect') || 'All';
      
      aspectTabs.forEach(t => t.classList.remove('active'));
      target.classList.add('active');
      
      renderGrid();
    });
  });

  // Modal actions
  modalClose.addEventListener('click', closePreviewModal);
  
  // Close modal when clicking outside the container
  previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) {
      closePreviewModal();
    }
  });

  // Toggle simulator elements (lockscreen time, bottom bar, menu bar, etc.)
  simToggleUi.addEventListener('click', () => {
    state.isSimUiVisible = !state.isSimUiVisible;
    if (state.isSimUiVisible) {
      simToggleUi.classList.add('active');
    } else {
      simToggleUi.classList.remove('active');
    }
    renderSimulator();
  });

  // Action Buttons inside Modal
  modalBtnDownload.addEventListener('click', triggerDownload);
  
  modalBtnFav.addEventListener('click', () => {
    if (state.activeWallpaperId) {
      toggleFavorite(state.activeWallpaperId);
    }
  });

  modalBtnShare.addEventListener('click', copyShareLink);

  // Esc key closes modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && state.activeWallpaperId) {
      closePreviewModal();
    }
  });
}

// Router to handle shared links e.g. ?wallpaper=shiva_kailash_desktop
function runRouter() {
  const params = new URLSearchParams(window.location.search);
  const wallpaperId = params.get('wallpaper');
  if (wallpaperId) {
    const wpExists = wallpapersData.some((wp: Wallpaper) => wp.id === wallpaperId);
    if (wpExists) {
      openPreviewModal(wallpaperId);
    }
  }
}

// Bootstrap Application
function init() {
  renderCategories();
  renderGrid();
  initEvents();
  runRouter();
}

// Run app
init();
