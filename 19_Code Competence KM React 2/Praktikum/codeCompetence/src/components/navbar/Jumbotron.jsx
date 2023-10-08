function Jumbotron() {
  return (
    <div className="container-fluid banner">
      <div className="container text-center">
        <h4 className="display-6 fw-bold text-light mb-2">
          WELCOME TO OUR WEBSITE
        </h4>
        <p className="text-light fs-5">
        "Sumber Barakah" is your ultimate source for educational content revolving around technology. Whether you're looking to stay updated on the latest tech trends, learn new skills, or explore the fascinating world of technology, you've come to the right place. Our mission is to empower you with knowledge and insights to thrive in the digital age. 
        </p>
        <a href="#">
          <button type="button" className="btn btn-success btn-lg mt-5">
            Join Now
          </button>
        </a>
      </div>
    </div>
  );
}

export default Jumbotron