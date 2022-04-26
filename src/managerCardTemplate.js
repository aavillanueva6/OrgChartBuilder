function buildManagerCard(manObj) {
  return `
        <div class="col-sm-4 my-2">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title">${manObj.getName()}</h5>
              <h6><i class="fa-solid fa-mug-hot"></i> ${manObj.getRole()}</h6>
            </div>
            <div class="card-body bg-secondary bg-opacity-25">
              <ul class="list-group">
                <li class="list-group-item">ID: ${manObj.getId()}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${manObj.getEmail()}">${manObj.getEmail()}</a>
                </li>
                <li class="list-group-item">Office Number: ${manObj.getOfficeNum()}</li>
              </ul>
            </div>
          </div>
        </div>
`;
}

module.exports = buildManagerCard;
