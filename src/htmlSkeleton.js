function topHtml() {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Organizational Chart</title>
    <!-- Third party CSS/JS files linked here -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/1f888969c5.js"
      crossorigin="anonymous"
    ></script>
    <!-- Third party CSS/JS files linked here -->
  </head>
  <body>
    <!-- "My Team" Header section -->
    <header class="p-3 bg-dark text-white">
      <div class="container d-flex justify-content-center">
        <h1>My Team</h1>
      </div>
    </header>
    <!-- Team Cards -->
    <div class="container mt-3">
      <div class="row d-flex justify-content-center">
`;
}

function bottomHtml() {
  return `      </div>
    </div>
    <!-- Third party JS files linked here -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
    <!-- Third party JS files linked here -->
  </body>
</html>`;
}

module.exports = {
  topHtml,
  bottomHtml,
};
