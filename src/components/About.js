import React from "react";

export default function About() {
  return (
    <div>
      <div className="card text-center mt-45" style={{ marginTop: "100px" }}>
        <div className="card-header">ABOUT ME</div>
        <div className="card-body">
          <h5 className="card-title">ABHISHEK SHUKLA</h5>
          <p className="card-text">
            A College Student making such kind of Projects for Learning and
            Entertainment Purpose🗿
          </p>
          {/* <a href="/" className="btn btn-dark">
            Go somewhere
          </a> */}
        </div>
        <div className="card-footer text-muted d-flex justify-content-around">
          <a className="btn btn-dark" rel="noreferrer" target="_blank" style={{backgroundColor: '#333333'}} href="https://github.com/Shuklaaa" role="button">
            <i className="fab fa-github"></i>
          </a>

          <a className="btn btn-primary" rel="noreferrer" target="_blank" style={{backgroundColor: '#0082ca'}} href="https://www.linkedin.com/in/abhishek-shukla-2b5a32210" role="button">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="btn btn-primary" rel="noreferrer" target="_blank" style={{backgroundColor: '##55acee'}} href="https://twitter.com/who_shukla" role="button">
            <i className="fab fa-twitter"></i>
          </a>

          <a className="btn btn-dark" rel="noreferrer" target="_blank" style={{backgroundColor: '#ac2bac'}} href="https://www.instagram.com/abhishekkshuklaaaaa" role="button">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
