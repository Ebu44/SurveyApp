const keys = require("../../config/key");

module.exports = (survey) => {
  return `
    <html>
      <body>
        <div style="text-align:center">
          <h3>Selam</h3>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes/thanks">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no/thanks">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
