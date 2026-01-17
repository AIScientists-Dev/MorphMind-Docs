import React from 'react';

const steps = [
  { number: 1, title: "Sign Up" },
  { number: 2, title: "Confirm Email" },
  { number: 3, title: "Create Agent" },
];

export default function PromoBanner(): JSX.Element {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #1a5d4c 0%, #2a7d6c 100%)',
        borderRadius: '12px',
        padding: '32px',
        marginBottom: '32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '16px',
      }}
    >
      <div style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: 600 }}>
        Start building your AI agent now
      </div>
      <div style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1rem' }}>
        Free trial with 1,000 credits • No credit card required
      </div>

      {/* Steps */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '8px',
          flexWrap: 'wrap',
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.number}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.875rem',
              }}
            >
              {step.number}
            </div>
            <span style={{ color: '#ffffff', fontWeight: 500 }}>
              {step.title}
            </span>
            {index < steps.length - 1 && (
              <span style={{ color: 'rgba(255, 255, 255, 0.5)', marginLeft: '16px' }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <a
        href="https://agentlab.morphmind.ai/signup"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: '#ffffff',
          color: '#1a5d4c',
          padding: '12px 32px',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '1rem',
          textDecoration: 'none',
          marginTop: '8px',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        Get Started Free →
      </a>
    </div>
  );
}
