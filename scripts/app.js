// import modules
import User from "./user.js";
import * as formValidator from "./form.js";
import * as topNav from "./topnav.js";
import footerNav from "./footernav.js";
import fetchAndPopulateBlogData from "./blog.js";

(function () {
  /** Adds the header nav and fixed bottom nav */
  const addNavs = () => {
    // insert nav bar at the top of each page
    $("#page-header").html(topNav.navBar);

    // add fixed bottom nav bar
    $("#page-footer").html(footerNav);
  };

  /** Inject texts to the home page */
  const displayHomePage = () => {
    const homeHeadingText = "Welcome!"; // heading text content
    const homeBodyText = "This is my portfolio website."; // paragraph text content

    // Set the home link as active
    topNav.setActiveLink("index");

    // set heading and body texts
    $("#home-heading").text(homeHeadingText);
    $("#home-text").text(homeBodyText);
  };

  /** Inject texts and htmls to the interests page */
  const displayInterestsPage = () => {
    // interests paragraph content
    const interestsIntro =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend viverra mi, ut luctus justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed auctor mauris in diam lacinia, at eleifend ipsum tristique.";
    const movie = "Movie: <em>Total Recall (1990)</em>"; // movie heading
    const music = 'Music: <em>"Thunder" – Imagine Dragons</em>'; // music heading
    const book = "Book: <em>Harry Potter and the Sorcerer's Stone</em>"; // book heading
    const movieImageUrl = "images/total-recall.jpg";
    const musicImageUrl = "images/song.jpg";
    const bookImageUrl = "images/book.jpg";

    topNav.setActiveLink("interests"); // Set the product link as active

    // Set text & htmls
    $("#interests-intro").text(interestsIntro);
    $("#movie").html(movie);
    $("#music").html(music);
    $("#book").html(book);
    $(".img-movie").attr("src", movieImageUrl);
    $(".img-music").attr("src", musicImageUrl);
    $(".img-book").attr("src", bookImageUrl);
  };

  /** Inject texts and html to the services page */
  const displayServices = () => {
    const webDesignHeading = "Web design"; // web design heading text
    const frontEndHeading = "Front-end web development"; // front-end web development heading text
    const backEndHeading = "Back-end development"; // back-end development heading text
    const resumeLink = '<a href="#" class="text-info">Resume</a>'; // the link to the resume

    topNav.setActiveLink("services"); // Set the services link as active

    // Set all values
    $("#web-design-heading").text(webDesignHeading);
    $("#frontend-heading").text(frontEndHeading);
    $("#backend-heading").text(backEndHeading);
    $("#resume-heading").html(resumeLink);
  };

  /** Inject texts to the about page */
  const displayAbout = () => {
    const aboutText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet mi at risus ullamcorper, eget imperdiet nisl rutrum. Fusce id turpis non metus auctor interdum. Suspendisse potenti.";

    topNav.setActiveLink("about"); // Set the about link as active

    $("#about-info").text(aboutText); // set about text
  };

  /** display contact page */
  const displayContact = () => {
    topNav.setActiveLink("contact"); // Sets the contact link as active

    // add event listener to the submit button
    $("#btn-contact").click(function (e) {
      e.preventDefault();

      const contactName = $("#name").val();
      const contactEmail = $("#email").val();
      const contactNumber = $("#number").val();
      const contactMessage = $("#message").val();

      console.log(contactName, contactEmail, contactNumber, contactMessage);

      /**
       * After 2 seconds, the user will be redirected back to the Home Page
       */
      setTimeout(function () {
        const url = window.location.href.replace("contact", "index");
        window.location.href = url;
      }, 2000);
    });
  };

  /** blog posts page */
  const dislplayBlogPosts = () => {
    topNav.setActiveLink("blog");

    fetchAndPopulateBlogData(20);
  };

  /** register page */
  const displayRegister = () => {
    topNav.setActiveLink("register"); // Sets the register link as active
    // Cache selected elements
    const formTitle = $("h1.form-title");
    const errorMessage = $("<div>").attr("id", "errorMessage");
    errorMessage.hide();
    // Insert error message div after the form title
    formTitle.after(errorMessage);
    // handle register click
    $("#btn-register").click(function (e) {
      e.preventDefault(); // prevent page reload
      // Unvalidated user
      const user = new User(
        $("#firstname").val(),
        $("#lastname").val(),
        $("#username").val(),
        $("#email").val(),
        $("#password").val()
      );
      console.log(user.toString()); // log user to the console
      errorMessage.html(""); // Clear errors
      // Set errors
      const errors = [
        formValidator.validateFirst(user.firstName),
        formValidator.validateLast(user.lastName),
        formValidator.validateUsername(user.username),
        formValidator.validateEmail(user.email),
        formValidator.validatePassword(
          user.password,
          $("#confirm-password").val()
        ),
      ];
      errorMessage.html(errors.join("")).show();
      // Clear all input fields if there are no errors
      if (errors.length == 0) {
        $("#firstname").val("");
        $("#lastname").val("");
        $("#username").val("");
        $("#email").val("");
        $("#password").val("");
        $("#confirm-password").val("");
      }
    });
  };

  /** display login page */
  const displayLogin = () => {
    topNav.setActiveLink("login"); // Set the login link as active

    // Handle login
    $("#btn-login").click(function (e) {
      e.preventDefault(); // prevent web page from reloading

      const username = $("#username").val();
      const password = $("#password").val();

      const usernameSpan = $("<span>")
        .addClass("navbar-text")
        .addClass("username")
        .text(username);

      // Prepend the username beside the Login/Logout link
      $("#authNav").prepend(usernameSpan);
    });
  };

  $(function () {
    addNavs(); // add header and footer nav bars

    // display a specific page
    switch (document.title) {
      case "Home":
        displayHomePage();
        break;
      case "Product":
        displayInterestsPage();
        break;
      case "Services":
        displayServices();
        break;
      case "About":
        displayAbout();
        break;
      case "Blog":
        dislplayBlogPosts();
        break;
      case "Contact":
        displayContact();
        break;
      case "Register":
        displayRegister();
        break;
      case "Login":
        displayLogin();
        break;
    }
  });
})();
