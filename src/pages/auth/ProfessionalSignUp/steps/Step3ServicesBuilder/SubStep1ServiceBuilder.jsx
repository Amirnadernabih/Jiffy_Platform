/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { Form, Button } from "react-bootstrap";

// Import template images
import bentoImage from "../../../../../assets/bento.png";
import gradientTextImage from "../../../../../assets/gradient&text.png";
import textAboveImage from "../../../../../assets/text_above_image.png";
import textOnImage from "../../../../../assets/text_on_image.png";

export default function SubStep1ServiceBuilder({ data, onUpdate, onNext, onPrev }) {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [attachments, setAttachments] = useState([]); // [{ file, url }]
  const [imageError, setImageError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (data) {
      setSelectedTemplate(data.selectedTemplate || '');
      setTitle(data.title || '');
      setSubtitle(data.subtitle || '');
      setImageFile(data.heroImage || null);
    }
  }, [data]);

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
    onUpdate({ selectedTemplate: templateId, title, subtitle, heroImage: imageFile });
  };

  const handleTitleChange = (value) => {
    setTitle(value);
    onUpdate({ selectedTemplate, title: value, subtitle, heroImage: imageFile });
  };

  const handleSubtitleChange = (value) => {
    setSubtitle(value);
    onUpdate({ selectedTemplate, title, subtitle: value, heroImage: imageFile });
  };

  const validateImage = (file) => {
    if (!file) return 'No file provided';
    const isImage = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isImage) return 'Please upload a JPG or PNG image';
    const maxBytes = 10 * 1024 * 1024; // 10MB
    if (file.size > maxBytes) return 'File size must be no more than 10MB';
    return '';
  };

  const addFiles = (fileList) => {
    const files = Array.from(fileList || []);
    if (files.length === 0) return;
    let lastError = '';
    const valid = [];
    files.forEach((file) => {
      const err = validateImage(file);
      if (err) {
        lastError = err; // show last encountered error
      } else {
        valid.push({ file, url: URL.createObjectURL(file) });
      }
    });
    setImageError(lastError);
    if (valid.length > 0) {
      setAttachments((prev) => {
        const next = [...prev, ...valid];
        const hero = next[0]?.file || null;
        setImageFile(hero);
        onUpdate({ selectedTemplate, title, subtitle, heroImage: hero, attachments: next.map(a => a.file) });
        return next;
      });
    }
  };

  const handleFileSelect = (e) => {
    addFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const canContinue = () => {
    return selectedTemplate && title.trim().length > 0 && subtitle.trim().length > 0;
  };

  const formatSize = (bytes) => {
    if (bytes < 1024 * 1024) {
      return `${Math.round(bytes / 1024)}KB`;
    }
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)}MB`;
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => {
      const target = prev[index];
      if (target?.url) URL.revokeObjectURL(target.url);
      const next = prev.filter((_, i) => i !== index);
      const hero = next[0]?.file || null;
      setImageFile(hero);
      onUpdate({ selectedTemplate, title, subtitle, heroImage: hero, attachments: next.map(a => a.file) });
      return next;
    });
  };

  useEffect(() => {
    return () => {
      attachments.forEach(a => a.url && URL.revokeObjectURL(a.url));
    };
  }, [attachments]);

  const templates = [
    {
      id: 'bento-grid',
      name: 'Bento Grid',
      description: 'A modern way to express your business in multiple images.',
      preview: bentoImage
    },
    {
      id: 'gradient-text',
      name: 'Gradient & Text',
      description: 'A sleek & simple way to represent your brand with a focus on',
      preview: gradientTextImage
    },
    {
      id: 'text-above-image',
      name: 'Text above Image',
      description: 'A refreshing approach that ensures readability & aesthetics.',
      preview: textAboveImage
    },
    {
      id: 'text-on-image',
      name: 'Text on Image',
      description: 'A modern way where the text is over the image, needs contrast',
      preview: textOnImage
    }
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Hero Sections</h2>
        <div className="d-flex align-items-center gap-3">
          <button className="btn-skip" onClick={onNext}>Skip</button>
          <span className="step-counter">Step 1/5</span>
        </div>
      </div>
      
      {/* Use the constrained container (remove hero-sections-wide) */}
      <div className="hero-sections-container">
        {/* Template Selection Grid */}
        <div className="templates-grid templates-grid-columns mb-4">
          {templates.map((template) => (
            <div 
              key={template.id}
              className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="template-preview">
                <img 
                  src={template.preview} 
                  alt={template.name}
                  className="template-image"
                />
              </div>
              <div className="template-info">
                <h4>{template.name}</h4>
                <p>{template.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Inputs and Upload */}
        <div className="prototype-form-section inputs-upload-section">
          <div className="inputs-column">
            <div className="prototype-form-group">
              <label>Title<span className="required">*</span></label>
              <div className="prototype-input-wrapper">
                <input
                  type="text"
                  placeholder="type here..."
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  maxLength={60}
                  required
                  className="prototype-input first-input"
                />
                <span className="character-counter">{title.length}/60</span>
              </div>
            </div>

            <div className="prototype-form-group">
              <label>Subtitle<span className="required">*</span></label>
              <div className="prototype-input-wrapper">
                <textarea
                  placeholder="type here..."
                  value={subtitle}
                  onChange={(e) => handleSubtitleChange(e.target.value)}
                  maxLength={200}
                  rows={4}
                  required
                  className="prototype-textarea second-input"
                />
                <span className="character-counter">{subtitle.length}/200</span>
              </div>
            </div>
          </div>

          {/* Image Upload Panel */}
          <div className="image-upload-section">
            <div
              className={`image-dropzone ${isDragging ? 'dragging' : ''}`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="upload-icon" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V8" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12L12 8L16 12" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 16V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V16" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="upload-instructions">Select or drag a photo here</p>
              <p className="upload-subtext">JPG or PNG file size no more than 10MB</p>
              <div className="upload-actions">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  multiple
                  style={{ display: 'none' }}
                />
                <button
                  type="button"
                  className="select-file-btn"
                  onClick={() => fileInputRef.current && fileInputRef.current.click()}
                >
                  SELECT FILE
                </button>
              </div>
              {imageFile && !imageError && (
                <p className="upload-file-name">{imageFile.name}</p>
              )}
              {imageError && (
                <p className="upload-error" role="alert">{imageError}</p>
              )}
            </div>
            {attachments.length > 0 && (
              <div className="upload-previews">
                {attachments.slice(0, 3).map((a, idx) => (
                  <div key={`${a.file.name}-${idx}`} className="upload-thumb">
                    <img src={a.url} alt={a.file.name} />
                    <div className="upload-card-size">{(a.file.size < 1024 * 1024) ? `${Math.round(a.file.size / 1024)}KB` : `${(a.file.size / (1024 * 1024)).toFixed(1)}MB`}</div>
                    <button type="button" className="upload-card-close" aria-label={`Remove ${a.file.name}`} onClick={() => removeAttachment(idx)}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M5.62579 4.00044L8.86579 0.760442C8.9386 0.675419 8.97665 0.566052 8.97232 0.454196C8.968 0.34234 8.92164 0.236233 8.84248 0.15708C8.76333 0.0779272 8.65722 0.031557 8.54537 0.0272365C8.43351 0.022916 8.32414 0.0609633 8.23912 0.133775L4.99912 3.37377L1.75912 0.129331C1.6741 0.0565188 1.56473 0.0184719 1.45287 0.0227924C1.34102 0.0271129 1.23491 0.0734827 1.15576 0.152636C1.07661 0.231789 1.03024 0.337895 1.02592 0.449751C1.02159 0.561607 1.05964 0.670974 1.13245 0.755997L4.37245 4.00044L1.12801 7.24044C1.08148 7.28028 1.0437 7.32931 1.01702 7.38445C0.990343 7.43959 0.975352 7.49965 0.972987 7.56086C0.970623 7.62207 0.980937 7.68311 1.00328 7.74014C1.02563 7.79717 1.05952 7.84897 1.10283 7.89229C1.14614 7.9356 1.19794 7.96949 1.25498 7.99183C1.31201 8.01418 1.37305 8.02449 1.43426 8.02213C1.49546 8.01976 1.55552 8.00477 1.61066 7.9781C1.6658 7.95142 1.71483 7.91363 1.75468 7.86711L4.99912 4.62711L8.23912 7.86711C8.32414 7.93992 8.43351 7.97797 8.54537 7.97365C8.65722 7.96933 8.76333 7.92296 8.84248 7.8438C8.92164 7.76465 8.968 7.65854 8.97232 7.54669C8.97665 7.43483 8.9386 7.32546 8.86579 7.24044L5.62579 4.00044Z" fill="white"/>
                      </svg>
                    </button>
                    {attachments.length > 3 && idx === 2 && (
                      <div className="upload-thumb-extra">+{attachments.length - 3}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
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