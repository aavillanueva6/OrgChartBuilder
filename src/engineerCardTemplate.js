/**
 * function builds the card for the engineer object that it was called on.  Uses the object's methods to get the specific info for the employee
 * @param {Object} engObj Engineer object passed in from the orgArray
 * @returns string  HTML string for the card
 */
function buildEngineerCard(engObj) {
  return `        <div class="col-sm-4 my-2">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <h5 class="card-title">${engObj.getName()}</h5>
              <h6><i class="fa-solid fa-laptop-code"></i> ${engObj.getRole()}</h6>
            </div>
            <div class="card-body bg-secondary bg-opacity-25">
              <ul class="list-group">
                <li class="list-group-item">ID: ${engObj.getId()}</li>
                <li class="list-group-item">
                  Email:
                  <a href="mailto:${engObj.getEmail()}">${engObj.getEmail()}</a>
                </li>
                <li class="list-group-item">
                  Github:
                  <a
                    href="https://github.com/${engObj.getGithub()}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >${engObj.getGithub()}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
`;
}

module.exports = buildEngineerCard;
