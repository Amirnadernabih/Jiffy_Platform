import React, { useState, useEffect, useMemo } from "react";
import { Button } from "react-bootstrap";
import ServicePreviewContent from "./ServicePreviewContent";

export default function SubStep5Theme({ data, onUpdate, onNext, onPrev }) {
  const initialColor = (data && data.themePrimaryColor) || "#4A3AFF";
  const initialFont = (data && data.themeFont) || "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

  const [themeColor, setThemeColor] = useState(initialColor);
  const [themeFont, setThemeFont] = useState(initialFont);
  const [alpha, setAlpha] = useState(0.35);
  const [hue, setHue] = useState(240);

  useEffect(() => {
    onUpdate && onUpdate({ themePrimaryColor: themeColor, themeFont });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor, themeFont]);

  const fonts = [
    { label: "Inter", value: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" },
    { label: "Poppins", value: "Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" },
    { label: "Roboto", value: "Roboto, Inter, system-ui, -apple-system, Segoe UI, Helvetica, Arial, sans-serif" },
    { label: "Open Sans", value: "'Open Sans', Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" },
  ];

  const selectedFontLabel = useMemo(() => {
    const found = fonts.find(f => f.value === themeFont);
    return found ? found.label : "Inter";
  }, [themeFont]);

  const hexToRgb = (hex) => {
    const cleaned = hex.replace('#','');
    const bigint = parseInt(cleaned.length === 3
      ? cleaned.split('').map(c => c + c).join('')
      : cleaned, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };
  const rgba = (hex, a) => {
    const { r, g, b } = hexToRgb(hex);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  };
  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h/60) % 6;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n), Math.min(4 - k(n), 1)));
    const toHex = x => Math.round(x * 255).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
  };

  const cardTintA = rgba(themeColor, 0.18);
  const cardTintB = rgba(themeColor, 0.28);
  const accentGlow = rgba(themeColor, alpha);
  const { r, g, b } = hexToRgb(themeColor);
  const alphaOverlayStyle = { background: `linear-gradient(to right, rgba(${r},${g},${b},0), rgba(${r},${g},${b},1))` };

  const previewStyle = {
    fontFamily: themeFont,
    ['--theme-color']: themeColor,
    ['--theme-accent-glow']: accentGlow,
  };

  const handleSkip = () => onNext && onNext();

  const mergedData = { ...data, themeFont, themePrimaryColor: themeColor };

  return (
    <div className="theme-step-container">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Theme</h2>
        <div className="d-flex align-items-center gap-2">
          <Button type="button" variant="outline-secondary" className="btn-skip" onClick={handleSkip}>Skip</Button>
          <span className="step-counter">Step 5/5</span>
        </div>
      </div>

      {/* Preview Area */}
      <div className="theme-preview-wrapper" style={previewStyle}>
        <div className="theme-preview-canvas">
          {/* Font badge overlay */}
          <div className="font-badge">
            <span className="tt-icon">TT</span>
            <select
              aria-label="Font family"
              className="font-select"
              value={themeFont}
              onChange={(e) => setThemeFont(e.target.value)}
            >
              {fonts.map((f) => (
                <option key={f.label} value={f.value}>{f.label}</option>
              ))}
            </select>
            <span className="check-icon" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>

          {/* Color picker overlay */}
          <div className="color-picker-card">
            <span className="picker-icon" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1"/>
                <path d="M9 3L12 6L9 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="picker-controls">
              <div className="hue-strip">
                <input
                  type="range"
                  min="0"
                  max="360"
                  step="1"
                  value={hue}
                  onChange={(e) => {
                    const newHue = Number(e.target.value);
                    setHue(newHue);
                    const nextHex = hslToHex(newHue, 100, 62);
                    setThemeColor(nextHex);
                  }}
                  aria-label="Hue"
                />
              </div>
              <div className="alpha-strip">
                <div className="alpha-overlay" style={alphaOverlayStyle}></div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={Math.round(alpha * 100)}
                  onChange={(e) => setAlpha(Number(e.target.value) / 100)}
                  aria-label="Opacity"
                />
              </div>
            </div>
          </div>

          {/* Live preview content */}
          <div className="theme-preview-inner">
            <ServicePreviewContent data={mergedData} />
          </div>
        </div>
      </div>

      <div className="form-navigation d-flex justify-content-between mt-4">
        <Button type="button" variant="outline-secondary" className="btn-back" onClick={onPrev}>Back</Button>
        <Button type="button" className="btn-continue" onClick={onNext}>Continue</Button>
      </div>
    </div>
  );
}