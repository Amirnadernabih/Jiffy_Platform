import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function SubStep2Services({ data, onUpdate, onNext, onPrev }) {
  const [selectedCardType, setSelectedCardType] = useState('');
  const [subServiceTitle, setSubServiceTitle] = useState('');
  const [subServiceDescription, setSubServiceDescription] = useState('');

  useEffect(() => {
    if (data) {
      setSelectedCardType(data.selectedCardType || '');
      setSubServiceTitle(data.subServiceTitle || '');
      setSubServiceDescription(data.subServiceDescription || '');
    }
  }, [data]);

  const handleCardTypeSelect = (cardType) => {
    setSelectedCardType(cardType);
    onUpdate({ 
      selectedCardType: cardType, 
      subServiceTitle, 
      subServiceDescription 
    });
  };

  const handleTitleChange = (value) => {
    setSubServiceTitle(value);
    onUpdate({ 
      selectedCardType, 
      subServiceTitle: value, 
      subServiceDescription 
    });
  };

  const handleDescriptionChange = (value) => {
    setSubServiceDescription(value);
    onUpdate({ 
      selectedCardType, 
      subServiceTitle, 
      subServiceDescription: value 
    });
  };

  const canContinue = () => {
    return selectedCardType && 
           subServiceTitle.trim().length > 0 && 
           subServiceDescription.trim().length > 0;
  };

  const cardTypes = [
    {
      id: 'cards-with-icons',
      name: 'Cards with Icons',
      description: 'Use this space to promote the business, its products or its services.',
      preview: (
        <div className="prototype-card-preview">
          <div className="prototype-card icons-card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.273974C0 0.122663 0.122662 0 0.273973 0H19.726C19.8773 0 20 0.122662 20 0.273973V19.726C20 19.8773 19.8773 20 19.726 20H0.273974C0.122663 20 0 19.8773 0 19.726V0.273974ZM10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z" fill="black"/>
              </svg>
            </div>
            <div className="card-content">
              <h4 className="card-title">Item Title</h4>
              <p className="card-description">Use this space to promote the business, its products or its services.</p>
              <button className="card-button">Book Now</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'text-only-cards',
      name: 'Text Only Cards',
      description: 'Use this space to promote the business, its products or its services.',
      preview: (
        <div className="prototype-card-preview">
          <div className="prototype-card text-only-card">
            <div className="card-content">
              <h4 className="card-title">Item Title</h4>
              <p className="card-description">Use this space to promote the business, its products or its services.</p>
              <button className="card-button">Book Now</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'cards-with-photos',
      name: 'Cards with Photos',
      description: 'Use this space to promote the business, its products or its services.',
      preview: (
        <div className="prototype-card-preview">
          <div className="prototype-card photos-card">
            <div className="card-image" style={{
              backgroundImage: `url('/src/assets/cards with photos.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
            <div className="card-content">
              <h4 className="card-title">Item Title</h4>
              <p className="card-description">Use this space to promote the business, its products or its services.</p>
              <button className="card-button">Book Now</button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'text-on-image-cards',
      name: 'Text on Image Cards',
      description: 'Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.',
      preview: (
        <div className="prototype-card-preview">
          <div className="prototype-card text-on-image-card" style={{
            backgroundImage: `url('/src/assets/text-on-image.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="card-overlay">
              <div className="overlay-content">
                <h4 className="card-title white-text">Featured Item One</h4>
                <p className="card-description white-text">Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hero Sections</h2>
        <div className="d-flex align-items-center gap-3">
          <button className="btn-skip" onClick={onNext}>Skip</button>
          <span className="step-counter">Step 2/5</span>
        </div>
      </div>
      
      <div className="hero-sections-container">
        {/* Card Type Selection Grid */}
        <div className="prototype-cards-grid">
          {cardTypes.map((cardType) => (
            <div 
              key={cardType.id}
              className={`prototype-template-card ${selectedCardType === cardType.id ? 'selected' : ''}`}
              onClick={() => handleCardTypeSelect(cardType.id)}
            >
              <div className="template-preview-wrapper">
                {cardType.preview}
              </div>
              <div className="template-info">
                <h4>{cardType.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Form Fields */}
        <div className="prototype-form-section">
          <div className="prototype-form-group">
            <label>Sub Service Title<span className="required">*</span></label>
            <div className="prototype-input-wrapper">
              <input
                type="text"
                placeholder="type here..."
                value={subServiceTitle}
                onChange={(e) => handleTitleChange(e.target.value)}
                maxLength={60}
                required
                className="prototype-input first-input"
              />
              <span className="character-counter">{subServiceTitle.length}/60</span>
            </div>
          </div>

          <div className="prototype-form-group">
            <label>Sub Service Description<span className="required">*</span></label>
            <div className="prototype-input-wrapper">
              <textarea
                placeholder="type here..."
                value={subServiceDescription}
                onChange={(e) => handleDescriptionChange(e.target.value)}
                maxLength={200}
                rows={4}
                required
                className="prototype-textarea second-input"
              />
              <span className="character-counter">{subServiceDescription.length}/200</span>
            </div>
          </div>
        </div>
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
          disabled={!canContinue()}
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </>
  );
}