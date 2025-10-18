import './ServicesHeader.css';

const ServicesHeader = ({ plan, setPlan }) => {

  return (
    <header className="services-header">
      {/* Grid Overlay */}
      <div className="grid-layer">
        <svg xmlns="http://www.w3.org/2000/svg" width="1287" height="652" viewBox="0 0 1287 652" fill="none">
          <path d="M491.1 543.522H802.048M0.650361 15.3668L0.650332 651.999M42.1101 15.3668L42.1101 651.999M83.5698 15.3668L83.5698 651.999M125.03 15.3668L125.03 651.999M166.489 15.3668L166.489 651.999M207.949 15.3668L207.949 651.999M249.409 15.3668L249.409 651.999M290.869 15.3668L290.868 651.999M332.328 15.3668L332.328 651.999M0.179199 626.658H1285.43M373.788 15.3668L373.788 651.999M0.179199 587.535H1285.43M415.248 15.3668L415.248 651.999M0.179199 548.413H1285.43M456.707 15.3668V651.999M0.179199 509.29H1285.43M498.167 15.3668L498.167 651.999M0.179199 470.167H1285.43M539.627 15.3668L539.627 651.999M0.179199 431.045H1285.43M581.087 15.3668L581.087 651.999M0.179199 391.922H1285.43M622.546 15.3668L622.546 651.999M0.179199 352.799H1285.43M664.006 15.3668L664.006 651.999M0.179199 313.677H1285.43M705.466 15.3668L705.466 651.999M0.179199 274.554H1285.43M746.926 15.3668L746.926 651.999M0.179199 235.432H1285.43M788.385 15.3668L788.385 651.999M0.179199 196.309H1285.43M829.845 15.3668L829.845 651.999M0.179199 157.186H1285.43M871.305 15.3668L871.305 651.999M0.179199 118.064H1285.43M912.765 15.3668L912.765 651.999M0.179199 78.941H1285.43M954.224 15.3668L954.224 651.999M0.179199 39.8184H1285.43M995.684 15.3668V651.999M0.179199 0.695801L1285.43 0.695801M1037.14 15.3668V651.999M1078.6 15.3668V651.999M1120.06 15.3668V651.999M1161.52 15.3668V651.999M1202.98 15.3668V651.999M1244.44 15.3668V651.999M1285.9 15.3668V651.999" stroke="url(#paint0_radial_55_3159)" strokeWidth="0.888544"/>
          <defs>
            <radialGradient id="paint0_radial_55_3159" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(643.041 287.696) rotate(90) scale(364.303 719.163)">
              <stop stopColor="#1144FA" stopOpacity="0.5"/>
              <stop offset="0.6" stopOpacity="0"/>
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Header Content */}
      <div className="content">
        <p className="main-subtitle">
          Bring your business to the best scale
        </p>
        <h1 className="title">
          Elevate your Business with <br />
          the <span className="jiffy-title">Jiffy</span>
        </h1>
        <p className="subtitle">
          Select from best plan, ensuring a perfect match. Need more or less? <br />
          Customize your subscription for a seamless fit!
        </p>

        {/* Toggle Buttons */}
        <div className="toggle-buttons">
          <div
            className="toggle-slider"
            style={{ transform: plan === 'monthly' ? 'translateX(0%)' : 'translateX(100%)' }}
          />
          <button
            className={`toggle-btn ${plan === 'monthly' ? 'active' : ''}`}
            onClick={() => setPlan('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${plan === 'yearly' ? 'active' : ''}`}
            onClick={() => setPlan('yearly')}
          >
            Yearly
          </button>
        </div>
      </div>
    </header>
  );
};

export default ServicesHeader;