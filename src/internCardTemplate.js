function buildInternCard(intObj) {
  return `
<div class="col-sm-4 my-2">
  <div class="card">
    <div class="card-header bg-primary text-white">
      <h5 class="card-title">${intObj.getName()}</h5>
      <h6>
        <i class="fa-solid fa-user-graduate"></i> ${intObj.getRole()}
      </h6>
    </div>
    <div class="card-body bg-secondary bg-opacity-25">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intObj.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${intObj.getEmail()}">${intObj.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${intObj.getSchool()}</li>
      </ul>
    </div>
  </div>
</div>
`;
}
module.exports = buildInternCard;
