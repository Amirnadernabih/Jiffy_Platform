const UnderConstruction = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="display-1 fw-bold text-primary">🚧</h1>
            <h2 className="display-4 fw-bold mb-4">Under Construction</h2>
            <p className="lead mb-4 text-muted">
              This page is currently being built. We're working hard to bring you something amazing!
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <a href="/" className="btn btn-primary btn-lg">
                <i className="bi bi-house-fill me-2"></i>
                Go Home
              </a>
              <a href="/contact" className="btn btn-outline-primary btn-lg">
                <i className="bi bi-envelope-fill me-2"></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;