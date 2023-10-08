import React from 'react';

function AboutUs() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="/src/assets/img/AboutUs.svg"
            alt="About Us"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h2 className="fw-bold">About Us</h2>
          <p className="mt-3 text-justify">
            Welcome to "Sumber Barakah," your trusted source for comprehensive and engaging technology education. Our journey began with a shared passion for technology and a vision to make complex concepts accessible to all.
          </p>
          <p>
            We are a dedicated team of experts, enthusiasts, and educators who are committed to providing you with the latest insights, tutorials, and resources in the ever-evolving world of technology. Whether you're a novice or a seasoned professional, we have something to offer you.
          </p>
          <p>
            Our mission is to empower individuals like you to unlock your full potential in the digital age. We believe that knowledge is the key to success, and we strive to deliver high-quality, easy-to-understand content that enables you to thrive in today's tech-driven world.
          </p>
          
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AboutUs;
