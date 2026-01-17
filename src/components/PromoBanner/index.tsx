import React from 'react';
import styles from './styles.module.css';

const steps = [
  { number: 1, title: 'Sign Up', description: '30 seconds' },
  { number: 2, title: 'Confirm Email', description: 'Check inbox' },
  { number: 3, title: 'Create Agent', description: 'Pick a template' },
];

export default function PromoBanner(): React.ReactElement {
  return (
    <div className={styles.banner}>
      {/* Headline */}
      <h2 className={styles.headline}>
        Start Building Your Own Agent Now!
      </h2>
      <p className={styles.subtext}>
        Free version includes 1,000 credits
      </p>

      {/* CTA Button */}
      <a
        href="https://agentlab.morphmind.ai/signup"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaButton}
      >
        Sign Up Free
      </a>

      {/* Quick Start Guide */}
      <div className={styles.stepsContainer}>
        <p className={styles.stepsTitle}>Quick Start Guide</p>
        <div className={styles.steps}>
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Step */}
              <div className={styles.step}>
                <div className={styles.stepNumber}>{step.number}</div>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepDescription}>{step.description}</span>
              </div>

              {/* Arrow (not after last step) */}
              {index < steps.length - 1 && (
                <div className={styles.arrow}>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
