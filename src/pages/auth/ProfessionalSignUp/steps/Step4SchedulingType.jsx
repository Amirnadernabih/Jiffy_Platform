import { Button } from "react-bootstrap";

export default function Step4SchedulingType({ data, onUpdate, onPrev, onSubmit }) {
  return (
    <div className="form-section">
      <h2>Scheduling Type</h2>
      <div className="text-center py-5">
        <p className="text-muted">Appointment scheduling preferences will be implemented here.</p>
      </div>
      <div className="form-navigation">
        <Button className="btn-back" onClick={onPrev}>Back</Button>
        <Button className="btn-continue" onClick={onSubmit}>Submit</Button>
      </div>
    </div>
  );
}