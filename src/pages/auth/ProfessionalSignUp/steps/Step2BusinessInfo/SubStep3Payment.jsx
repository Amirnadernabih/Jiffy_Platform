import { Button } from "react-bootstrap";

export default function SubStep3Payment({ data, onUpdate, onNext, onPrev }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Payment</h2>
        <span className="step-counter">Step 3/3</span>
      </div>
      
      <div className="text-center py-5">
        <h4 className="text-muted mb-3">Payment Setup</h4>
        <p className="text-muted">This section is pending UI/UX design.</p>
        <p className="text-muted">Payment integration will be implemented here.</p>
      </div>

      <div className="form-navigation">
        <Button 
          type="button" 
          className="btn-back"
          onClick={onPrev}
        >
          Back
        </Button>
        <Button 
          type="button" 
          className="btn-continue"
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </>
  );
}