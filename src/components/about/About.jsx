import React from "react";

const HomePage = () => {
  return (
    <div className="container-about mt-5 mb-5">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header ">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>This service is strictly for law enforcement agencies/officers use
              only.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Description:.</strong> The Restricted Access Law
              Enforcement Service is an exclusive platform designed and
              dedicated solely for the utilization of law enforcement agencies
              and officers. Created with a focus on enhancing the efficiency,
              collaboration, and security of law enforcement operations, this
              service provides a comprehensive suite of tools and resources
              tailored to meet the unique needs of the law enforcement
              community.
              <code>Secure Communication Channels</code>,
              <code>Case Management and Documentation</code>,
              <code>Resource Sharing and Collaboration</code>,
              <code>Training and Education Modules</code>,
              <strong> In conclusion</strong>, the Restricted Access Law
              Enforcement Service stands as a specialized and secure platform,
              dedicated to empowering law enforcement agencies with the tools
              and resources necessary to uphold justice, protect communities,
              and ensure the highest standards of professionalism within the law
              enforcement community.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="main-card" style={{display: "flex",alignItems: "center", justifyContent: "center", padding: "15px"}}>
        <div
          className="card"
          style={{
            width: "18rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "https://miro.medium.com/v2/resize:fit:1400/0*nSzpIryiwO5FNOlr"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">OSNIT</h5>
            <p className="card-text">
            Ready to enhance your digital investigations? Connect with us now to gain access to the cutting-edge OSNIT Online Security and Network Investigation Tool. For inquiries and tool access, simply give us a call at 9999999999. Elevate your investigative capabilities with OSNIT - your trusted ally in the digital realm.
            </p>
            <a href="#" className="btn btn-primary">
              Explore OSNIT
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
