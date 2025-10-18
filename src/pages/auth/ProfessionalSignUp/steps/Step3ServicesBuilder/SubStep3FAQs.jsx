import React, { useState, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";

const SubStep3FAQs = ({ data, onUpdate, onBack, onContinue }) => {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Why do I need to use a Design System?",
      answer: "A Design System is a super useful tool for designers. It helps keep designs consistent and makes the design process faster. You can use pre-designed stuff over and over and it's helpful for both new and toolbox for making great-looking and user-friendly designs.",
      isDefault: true
    },
    {
      id: 2,
      question: "Is there a preview or a free trial available?",
      answer: "",
      isDefault: false
    },
    {
      id: 3,
      question: "Where can I purchase AlgoUI Design System?",
      answer: "",
      isDefault: false
    }
  ]);

  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState('');

  // Restore from parent if available (non-default FAQs only)
  useEffect(() => {
    if (data && Array.isArray(data.faqs)) {
      setFaqs((prev) => {
        const defaults = prev.filter(f => f.isDefault);
        const restored = data.faqs.map(f => ({ ...f, isDefault: false }));
        return [...defaults, ...restored];
      });
    }
  }, [data]);

  const handleQuestionChange = (e) => {
    const value = e.target.value;
    if (value.length <= 60) {
      setCurrentQuestion(value);
    }
  };

  const handleAnswerChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      setCurrentAnswer(value);
    }
  };

  const handleAddFAQ = () => {
    if (currentQuestion.trim() && currentAnswer.trim()) {
      const newFAQ = {
        id: Date.now(),
        question: currentQuestion.trim(),
        answer: currentAnswer.trim(),
        isDefault: false
      };
      const updated = [...faqs, newFAQ];
      setFaqs(updated);
      // Persist only non-default FAQs to parent
      const toSave = updated.filter(f => !f.isDefault);
      onUpdate({ faqs: toSave });
      setCurrentQuestion('');
      setCurrentAnswer('');
    }
  };

  const canContinue = () => {
    return faqs.length > 0;
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hero Sections</h2>
        <div className="d-flex align-items-center gap-3">
          <button 
            className="btn-skip" 
            onClick={onContinue}
          >
            Skip
          </button>
          <span className="step-counter">Step 3/5</span>
        </div>
      </div>

      <div className="faq-content">
        {/* Default FAQ Info Box */}
        <div className="faq-info-box">
          <h3>Why do I need to use a Design System?</h3>
          <p>
            A Design System is a super useful tool for designers. It helps keep 
            designs consistent and makes the design process faster. You can use 
            pre-designed stuff over and over and it's helpful for both new and 
            toolbox for making great-looking and user-friendly designs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqs.filter(faq => !faq.isDefault).map((faq) => (
            <div key={faq.id} className="faq-item">
              <div className="faq-question">{faq.question}</div>
              {faq.answer && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>

        {/* Add FAQ Form */}
        <div className="faq-form">
          <div className='form-group-main'>
          <div className="form-group">
            <label htmlFor="question">Question*</label>
            <div className="input-container">
              <input
                type="text"
                id="question"
                value={currentQuestion}
                onChange={handleQuestionChange}
                placeholder="type here..."
                className="form-input first-input"
              />
              <span className="character-count">{currentQuestion.length}/60</span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="answer">Answer*</label>
            <div className="input-container">
              <textarea
                id="answer"
                value={currentAnswer}
                onChange={handleAnswerChange}
                placeholder="type here..."
                className="form-textarea second-input"
                rows="4"
              />
              <span className="character-count">{currentAnswer.length}/200</span>
            </div>
          </div>
          </div>

          <button 
            className="add-faq-btn"
            onClick={handleAddFAQ}
            disabled={!currentQuestion.trim() || !currentAnswer.trim()}
          >
            ADD FAQ
          </button>
        </div>
      </div>

      <div className="form-navigation">
        <Button 
          type="button" 
          className="btn-back"
          onClick={onBack}
        >
          Back
        </Button>
        <Button 
          type="button" 
          className="btn-continue"
          disabled={!canContinue()}
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default SubStep3FAQs;