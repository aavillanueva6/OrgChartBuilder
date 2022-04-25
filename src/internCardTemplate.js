`
<div class="col-sm-4 my-2">
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">${Intern.getName()}</h5>
      <h6>
        <i class="fa-solid fa-user-graduate"></i> ${Intern.getRole()}
      </h6>
    </div>
    <div class="card-body bg-secondary bg-opacity-25">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Intern.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${Intern.getSchool()}</li>
      </ul>
    </div>
  </div>
</div>;
`;
