import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <header>
      <a href="/" class="logo">Bishal💡</a>
      
      <button class="hamburger" id="hamburger" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav id="nav">
        <ul>
          <li><a href="#" class="active">Apps</a></li>
          <li><a href="https://bishalb.com">About</a></li>
          <li><a href="https://bishalb.com/contact" target="_blank">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>Apps by BishalB</h1>
        <p>A collection of tools, projects and mini-apps from BishalB</p>
      </section>

      <!-- Updated Recently Section -->
      <section class="apps-section">
        <h2 class="section-title">Updated Recently</h2>
        <div class="apps-grid">
          <div class="app-item" data-app="NepElect" data-status="live" data-url="https://nepelect.bishalb.com">
            <div class="app-icon">🗳️</div>
            <div class="app-name">NepElect</div>
            <div class="app-category">Politics</div>
          </div>

          <div class="app-item" data-app="PomoDoro" data-status="live" data-url="https://pomodoro.bishalb.com">
            <div class="app-icon">🍅</div>
            <div class="app-name">PomoDoro</div>
            <div class="app-category">Productivity</div>
          </div>

          <div class="app-item" data-app="TweakCV" data-status="coming-soon">
            <div class="app-icon">📝</div>
            <div class="app-name">TweakCV</div>
            <div class="app-category">Career</div>
          </div>

          <div class="app-item" data-app="DocBite" data-status="coming-soon">
            <div class="app-icon">📜</div>
            <div class="app-name">DocBite</div>
            <div class="app-category">Utility</div>
          </div>

          <div class="app-item" data-app="Expense Tracker" data-status="coming-soon">
            <div class="app-icon">💰</div>
            <div class="app-name">Expense Tracker</div>
            <div class="app-category">Finance</div>
          </div>

          <div class="app-item" data-app="MatchUni" data-status="coming-soon">
            <div class="app-icon">🎓</div>
            <div class="app-name">MatchUni</div>
            <div class="app-category">Education</div>
          </div>

          <div class="app-item" data-app="MockTOEFL" data-status="coming-soon">
            <div class="app-icon">📚</div>
            <div class="app-name">MockTOEFL</div>
            <div class="app-category">Education</div>
          </div>
        </div>
      </section>

      <!-- Apps in Development Section -->
      <section class="apps-section">
        <h2 class="section-title">Apps in Development</h2>
        <div class="apps-grid">
          <div class="app-item" data-app="Claims Auditor" data-status="in-development">
            <div class="app-icon">🔍</div>
            <div class="app-name">Claims Auditor</div>
            <div class="app-category">Healthcare</div>
          </div>

          <div class="app-item" data-app="MediReport" data-status="in-development">
            <div class="app-icon">🏥</div>
            <div class="app-name">MediReport</div>
            <div class="app-category">Healthcare</div>
          </div>

          <div class="app-item" data-app="AI Shorts Generator" data-status="in-development">
            <div class="app-icon">🎬</div>
            <div class="app-name">AI Shorts Generator</div>
            <div class="app-category">Content</div>
          </div>

          <div class="app-item" data-app="AlphaStock" data-status="in-development">
            <div class="app-icon">📈</div>
            <div class="app-name">AlphaStock</div>
            <div class="app-category">Finance</div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p class="footer-text">
        Copyright © ${new Date().getFullYear()} All Rights Reserved
      </p>
    </footer>

    <!-- Modal -->
    <div class="modal-overlay" id="modal">
      <div class="modal-content">
        <span class="modal-emoji" id="modal-emoji">🚀</span>
        <h2 class="modal-title" id="modal-title">Coming Soon!</h2>
        <p class="modal-text" id="modal-text">This app is coming soon online.</p>
        <div id="modal-action"></div>
      </div>
    </div>
  </div>
`

// Modal Logic
const modal = document.getElementById('modal');
const modalEmoji = document.getElementById('modal-emoji');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalAction = document.getElementById('modal-action');
const allApps = document.querySelectorAll('.app-item');

allApps.forEach(app => {
  app.addEventListener('click', () => {
    const appName = app.getAttribute('data-app');
    const status = app.getAttribute('data-status');
    const url = app.getAttribute('data-url');

    // Reset modal content
    modalAction.innerHTML = '';

    if (status === 'live') {
      modalEmoji.textContent = '🎉';
      modalTitle.textContent = `${appName} is Live!`;
      modalText.innerHTML = `${appName} is now available online. Click below to launch the app.`;
      modalAction.innerHTML = `<a href="${url}" target="_blank" class="modal-btn">Launch App 🚀</a>`;
    } else if (status === 'coming-soon') {
      modalEmoji.textContent = '⏳';
      modalTitle.textContent = 'Coming Soon!';
      modalText.innerHTML = `<strong>${appName}</strong> is coming soon online. Stay tuned! ✨`;
    } else if (status === 'in-development') {
      modalEmoji.textContent = '🛠️';
      modalTitle.textContent = 'In Development';
      modalText.innerHTML = `<strong>${appName}</strong> is currently in active development. Check back soon! 💻`;
    }

    modal.classList.add('active');
  });
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Close menu when clicking a nav link
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
  });
});

