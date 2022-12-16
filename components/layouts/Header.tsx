import React from "react";

const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <div className="navbar-brand">
            <img
              style={{ cursor: "pointer", width: '60px' }}
              src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/61023bed99921_json_image_1627536365.webp"
              alt="BookIT"
            />
          </div>
        </div>

        <div className="col-3 mt-3 mt-md-0 text-center">
          <a className="btn btn-danger px-4 text-white login-header-btn float-right">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
