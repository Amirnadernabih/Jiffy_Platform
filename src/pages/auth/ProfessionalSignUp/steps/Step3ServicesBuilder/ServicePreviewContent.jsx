import React, { useMemo } from "react";

export default function ServicePreviewContent({ data = {} }) {
  const {
    // Step 3.1 (Hero)
    selectedTemplate = "",
    title = "",
    subtitle = "",
    heroImage,
    // Step 3.2 (Sub Services)
    selectedCardType = "",
    subServiceTitle = "",
    subServiceDescription = "",
    // Step 3.3 (FAQs)
    faqs = [],
    // Step 3.4 (Features)
    featuresSelectedTemplate = "",
    featureTitle = "",
    featureDescription = "",
    featureImage,
    featureAttachments = [],
    // Theme
    themeFont = "Inter, sans-serif",
    themePrimaryColor = "#4A3AFF",
  } = data || {};

  const heroUrl = useMemo(() => {
    if (!heroImage) return null;
    return typeof heroImage === "string" ? heroImage : URL.createObjectURL(heroImage);
  }, [heroImage]);

  const featureUrl = useMemo(() => {
    if (!featureImage) return null;
    return typeof featureImage === "string" ? featureImage : URL.createObjectURL(featureImage);
  }, [featureImage]);

  const thumbs = useMemo(() => {
    return (featureAttachments || []).slice(0, 3).map((f, idx) => {
      const url = typeof f === "string" ? f : URL.createObjectURL(f);
      return <div key={idx} className="thumb" style={{ backgroundImage: `url(${url})` }} />;
    });
  }, [featureAttachments]);

  const renderHeroSection = () => {
    switch (selectedTemplate) {
      case "bento-grid":
        return (
          <section className="preview-hero bento">
            <div className="container">
              <div className="bento-left">
                <h1>{title || "Write a Title Here"}</h1>
                <p>{subtitle || "Subtitle goes here. This is placeholder text to demonstrate your hero copy."}</p>
              </div>
              <div className="bento-right">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="bento-cell">
                    {heroUrl && <div className="image" style={{ backgroundImage: `url(${heroUrl})` }} />}
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case "gradient-text":
        return (
          <section className="preview-hero gradient">
            <div className="container">
              <h1 className="gradient-text">{title || "Write a Title Here"}</h1>
              <p>{subtitle || "Subtitle goes here. This is placeholder text to demonstrate your hero copy."}</p>
            </div>
          </section>
        );
      case "text-above-image":
        return (
          <section className="preview-hero text-above">
            <div className="container">
              <h1>{title || "Write a Title Here"}</h1>
              <p>{subtitle || "Subtitle goes here. This is placeholder text to demonstrate your hero copy."}</p>
              {heroUrl && <div className="hero-image" style={{ backgroundImage: `url(${heroUrl})` }} />}
            </div>
          </section>
        );
      case "text-on-image":
        return (
          <section className="preview-hero text-on-image">
            <div className="container">
              <div className="image-overlay" style={{ backgroundImage: heroUrl ? `url(${heroUrl})` : undefined }}>
                <div className="overlay-content">
                  <h1>{title || "Write a Title Here"}</h1>
                  <p>{subtitle || "Subtitle goes here. This is placeholder text to demonstrate your hero copy."}</p>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <section className="preview-hero placeholder">
            <div className="container">
              <h1>{title || "Write a Title Here"}</h1>
              <p>{subtitle || "Subtitle goes here. This is placeholder text to demonstrate your hero copy."}</p>
            </div>
          </section>
        );
    }
  };

  const renderSubServices = () => {
    const renderCard = () => {
      switch (selectedCardType) {
        case "cards-with-photos":
          return (
            <div className="preview-card photos">
              <div className="card-image" style={{ backgroundImage: featureUrl ? `url(${featureUrl})` : undefined }} />
              <div className="card-content">
                <h4>{subServiceTitle || "Item Title"}</h4>
                <p>{subServiceDescription || "Use this space to promote your business, products or services."}</p>
                <button className="primary">Book Now</button>
              </div>
            </div>
          );
        case "text-on-image-cards":
          return (
            <div className="preview-card text-on-image" style={{ backgroundImage: featureUrl ? `url(${featureUrl})` : undefined }}>
              <div className="card-overlay">
                <h4>{subServiceTitle || "Featured Item One"}</h4>
                <p>{subServiceDescription || "Add paragraph text. Click \"Edit Text\" to update the font, size and more."}</p>
              </div>
            </div>
          );
        default:
          return (
            <div className="preview-card plain">
              <h4>{subServiceTitle || "Item Title"}</h4>
              <p>{subServiceDescription || "Description placeholder"}</p>
            </div>
          );
      }
    };

    return (
      <section className="preview-section">
        <div className="container">
          <div className="section-header">
            <h3>Services</h3>
            <p className="section-desc">Showcase your offerings with compelling visuals and copy.</p>
          </div>
          <div className={`cards-grid ${selectedCardType === "text-on-image-cards" ? "image-mode" : "text-mode"}`}>
            {[0,1,2].map((i) => (
              <div key={i} className="grid-cell">{renderCard(i)}</div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderFAQs = () => {
    const effectiveFaqs = Array.isArray(faqs) ? faqs : [];
    const defaultBox = {
      question: "Why do I need to use a Design System?",
      answer:
        "A Design System is a useful tool for designers. It helps keep designs consistent and makes the design process faster.",
    };
    return (
      <section className="preview-section">
        <div className="container">
          <div className="section-header"><h3>FAQs</h3></div>
          <div className="faq-grid">
            <details className="faq-item default" open>
              <summary className="q">{defaultBox.question}</summary>
              <div className="a">{defaultBox.answer}</div>
            </details>
            {effectiveFaqs.map((faq) => (
              <details key={faq.id} className="faq-item">
                <summary className="q">{faq.question}</summary>
                {faq.answer && <div className="a">{faq.answer}</div>}
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderFeatures = () => {
    switch (featuresSelectedTemplate) {
      case "central-image":
        return (
          <section className="preview-section">
            <div className="container">
              <div className="section-header"><h3>{featureTitle || "Feature Items"}</h3></div>
              <p className="section-desc">{featureDescription || "Add a short description of your features."}</p>
              {featureUrl && <div className="central-image" style={{ backgroundImage: `url(${featureUrl})` }} />}
              <div className="thumbs-row">{thumbs}</div>
            </div>
          </section>
        );
      case "text-only":
        return (
          <section className="preview-section">
            <div className="container">
              <div className="section-header"><h3>{featureTitle || "Feature Items"}</h3></div>
              <p className="section-desc">{featureDescription || "Add a short description of your features."}</p>
              <div className="features-list">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="feature-row">
                    <div className="dot" />
                    <div className="texts">
                      <div className="ft-title">Item Title</div>
                      <div className="ft-desc">Use this text to describe the item.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case "image-per-feature":
        return (
          <section className="preview-section">
            <div className="container">
              <div className="section-header"><h3>{featureTitle || "Feature Items"}</h3></div>
              <p className="section-desc">{featureDescription || "Add a short description of your features."}</p>
              <div className="features-grid">
                {[0,1,2,3].map((i) => (
                  <div key={i} className="feature-card">
                    {featureUrl && <div className="feature-image" style={{ backgroundImage: `url(${featureUrl})` }} />}
                    <div className="feature-content">
                      <div className="ft-title">Item Title</div>
                      <div className="ft-desc">Use this text to describe the item.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      default:
        return (
          <section className="preview-section">
            <div className="container">
              <div className="section-header"><h3>{featureTitle || "Feature Items"}</h3></div>
              <p className="section-desc">{featureDescription || "Add a short description of your features."}</p>
            </div>
          </section>
        );
    }
  };

  const renderCTA = () => (
    <section className="preview-cta">
      <div className="container">
        <div className="cta-card">
          <div className="cta-text">
            <h3>Ready to get started?</h3>
            <p>Book your first appointment in minutes.</p>
          </div>
          <div className="cta-actions">
            <button className="cta">Book Now</button>
            <button className="ghost">Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div
      className="service-preview-pro"
      style={{
        ['--preview-font']: themeFont,
        ['--preview-primary']: themePrimaryColor,
        fontFamily: "var(--preview-font, Inter, sans-serif)",
      }}
    >
      <main className="preview-content">
        {renderHeroSection()}
        {renderSubServices()}
        {renderFeatures()}
        {renderFAQs()}
        {renderCTA()}
      </main>
    </div>
  );
}