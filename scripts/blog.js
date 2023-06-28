// Function to create a card for each post
const createCard = (id) => {
  // Create the card element with the given id
  const card = $(`
    <div class="card blog" id="card-${id}">
      <div class="card-body blog" id="card-body-${id}">
        <h5 class="card-title text-capitalize fw-bold blog" id="card-title-${id}"></h5>
        <img id="img-${id}" class="blog-pic">
        <p class="card-text small blog" id="card-text-${id}"></p>
      </div>
    </div>
  `);
  // Append the card to the blog column
  $(".blog-column").append(card);
};

// Function to create and display the card posts
const createCards = (numPosts) => {
  // Loop through the number of posts
  for (let i = 0; i < numPosts; i++) {
    // Create a card for each post
    createCard(i);
    // Hide and fade in the card
    $(`#card-${i}`).hide().fadeIn(1000);
  }
};

// Function to fetch and populate the blog data
const fetchAndPopulateBlogData = async (numPosts) => {
  // Pixabay API key and URL
  const PIXABAY_KEY = "34278028-1fb95411d9b78e6cb871f94af";
  const PIXABAY_URL = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=night+sky&image_type=photo&per_page=${numPosts}`;
  // Posts API URL
  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  // Fetch data from both APIs and process the responses
  try {
    // Create the cards
    createCards(numPosts);

    const [res1, res2] = await Promise.all([
      fetch(PIXABAY_URL),
      fetch(POSTS_URL),
    ]);
    const [imageData, postData] = await Promise.all([res1.json(), res2.json()]);

    for (let i = 0; i < numPosts; i++) {
      const src = imageData["hits"][i]["webformatURL"];
      const alt = imageData["hits"][i]["tags"];
      $(`#img-${i}`).attr("src", src).attr("alt", alt);
      $(`#card-title-${i}`).text(postData[i]["title"]);
      $(`#card-text-${i}`).text(postData[i]["body"]);
    }
  } catch (err) {
    console.log(err);
  }
};

// Export the functions and variables as a module
export default fetchAndPopulateBlogData;
