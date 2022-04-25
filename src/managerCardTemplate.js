`
<div class="col-sm-4 my-2">
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">${Manager.getName()}</h5>
      <h6>
        <i class="fa-solid fa-mug-hot"></i> ${Manager.getRole()}
      </h6>
    </div>
    <div class="card-body bg-secondary bg-opacity-25">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Manager.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office Number: ${Manager.getOfficeNum()}</li>
      </ul>
    </div>
  </div>
</div>;
`;
