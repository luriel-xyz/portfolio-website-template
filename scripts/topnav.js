// This is the navigation bar component for the application
export const navBar = `
  <nav class="navbar navbar-expand-md bg-body-tertiary navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><small>Portfolio</small></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">
              <i class="fa fa-xs fa-home"></i>Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="interests.html">
              <i class="fa fa-xs fa-list-alt"></i>Interests
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html">
              <i class="fa fa-xs fa-signing"></i>Services
            </a>
          </li>
          <li class="nav-item">
            <a id="about-list-item" class="nav-link" href="about.html">
              <i class="fa fa-xs fa-info-circle"></i>About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="blog.html">
              <i class="fa fa-xs fa-info-circle"></i>Blog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="register.html">
              <i class="fa fa-xs fa-user-plus"></i>Register
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              <i class="fa fa-xs fa-solid fa-message"></i>Contact
            </a>
          </li>
        </ul>
        <ul class="navbar-nav" id="authNav">
          <li class="nav-item">
            <a class="nav-link" href="login.html">
              <i class="fa fa-xs fa-right-to-bracket"></i>Login/Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>`;

// Function to set the active link in the navigation bar
export const setActiveLink = function (pageTitle) {
  // Remove the 'active' class from all navigation links
  $(".navbar-nav a").removeClass("active");
  // Add the 'active' class to the navigation link that matches the current page
  $(`.navbar-nav a[href="${pageTitle}.html"]`).addClass("active");
};
