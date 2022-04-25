`
<div class="col-sm-4 my-2">
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">${Engineer.getName()}</h5>
      <h6>
        <i class="fa-solid fa-laptop-code"></i> ${Engineer.getRole()}
      </h6>
    </div>
    <div class="card-body bg-secondary bg-opacity-25">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Engineer.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a>
        </li>
        <li class="list-group-item">
          Github:
          <a
            href="https://github.com/${Engineer.getGithub()}"
            target="_blank"
            rel="noopener noreferrer"
          >
          ${Engineer.getGithub()}
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>;
`;
