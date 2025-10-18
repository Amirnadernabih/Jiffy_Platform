import React, { useState } from 'react';
import './Country.css';
import World from '../../../assets/world.png';

const Country = () => {
  const [activeCountry, setActiveCountry] = useState('Canada');

  const countries = ['Canada','USA', 'UK', 'Italy', 'Spain', 'Germany', 'Australia'];

  const countryData = {
    Canada:{
    "Toronto": [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      "British Colombia": [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      "Ottawa": [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
    },
    USA: {
      Florida: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      California: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Texas: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      'New Jersey': [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    },
    UK: {
      London: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Manchester: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Bristol: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Edinburgh: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    },
    Italy: {
      Rome: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Modena: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Turin: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    },
    Spain: {
      Barcelona: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Galicia: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Madrid: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    },
    Germany: {
      Düsseldorf: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Hamburg: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Frankfurt: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Berlin: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    },
    Australia: {
      Sydney: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Melbourne: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ],
      Adelaide: [
        'Financial & Legal Services',
        'Maintenance & Repair Services',
        'Healthcare & Medical Services',
        'Beauty, Spa & Wellness Services',
        'Pet Care & Grooming Services',
        'Education & Tutoring Services'
      ]
    }
  };

  const cityCount = Object.keys(countryData[activeCountry]).length;

  return (
    <div className="country-container container my-5">
      <h3 className="mt-5 mb-5 category-name">Browse By Country</h3>

      {/* Country Tabs */}
      <div className="country-buttons">
        {countries.map((country) => (
          <button
            key={country}
            className={`country-button ${activeCountry === country ? 'active' : ''}`}
            onClick={() => setActiveCountry(country)}
          >
            {country}
          </button>
        ))}
      </div>

      <div className="row mt-5">
        {/* Provinces/States & Services */}
        <div className={`col-md-${cityCount >= 4 ? '8' : '7'} mt-5`}>
          <div className={`city-grid ${cityCount >= 4 ? 'four-cols' : ''}`}>
            {Object.entries(countryData[activeCountry] || {}).map(([city, services]) => (
              <div className="city-card main-country" key={city}>
                <h5 className="city-title">{city}</h5>
                <div className="services-list">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="service-box"
                      role="button"
                      onClick={() =>
                        console.log(`Navigate to ${activeCountry} > ${city} > ${service}`)
                      }
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* World Map Image */}
        <div
          className={`col-md-${cityCount >= 4 ? '4' : '5'} d-flex align-items-center `}
        >
          <div
            className={`image-wrapper ${cityCount >= 4 ? 'small-world' : ''}`}
          >
            <img src={World} alt="World" className="img-fluid world-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
