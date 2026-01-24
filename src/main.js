import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="layout">
    <header>
      <a href="/" class="logo">Bishal💡</a>
      <nav>
        <ul>
          <li><a href="#" class="active">Apps</a></li>
          <li><a href="https://bishalb.com">About</a></li>
          <li><a href="https://bishalb.com/contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>Apps by BishalB</h1>
        <p>A collection of tools and mini-apps designed to simplify your workflow.</p>
      </section>

      <section class="apps-grid">
        <a href="#" class="app-item">
          <div class="app-icon">⏳</div>
          <div class="app-name">PomoDoro</div>
          <div class="app-category">Productivity</div>
        </a>

        <a href="#" class="app-item">
          <div class="app-icon">📝</div>
          <div class="app-name">TweakCV</div>
          <div class="app-category">Career</div>
        </a>

        <a href="#" class="app-item">
          <div class="app-icon">📜</div>
          <div class="app-name">DocBite</div>
          <div class="app-category">Utility</div>
        </a>
      </section>
    </main>

    <footer>
      <p style="text-align: center; padding: 4rem; color: #9ca3af; font-size: 0.875rem;">
        &copy; ${new Date().getFullYear()} BishalB. Built with precision and passion.
      </p>
    </footer>
  </div>
`
