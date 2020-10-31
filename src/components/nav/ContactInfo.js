import React from "react";

import colors from "../../modules/colors";

const ContactInfo = () => {
  return (
    <div style={{ color: colors.white, padding: "20px", marginTop: "15px" }}>
      <div> Michael Clark 2020</div>
      <div>
        <div style={{ color: "blue", fontSize: "40px" }}>
          <a href="https://www.linkedin.com/in/michaelclarknashville/">
            LinkedIn
          </a>
        </div>
        <div style={{ color: "blue", fontSize: "40px" }}>
          <a href="https://www.michaelclarknashville.com">portfolio</a>
        </div>
        <div style={{ color: "blue", fontSize: "40px" }}>
          <a href="https://www.michaelclarknashville.com">hipstar</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
