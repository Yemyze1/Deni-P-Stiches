import React from 'react';

const LoaderSpinner = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'rgba(255,255,255,0.8)'
  }}>
    <svg width="100" height="100" viewBox="0 0 100 100">
      <g>
        <path
          d="M50 20 Q65 35 50 50 Q35 65 50 80"
          stroke="#2563eb"
          strokeWidth="6"
          fill="none"
        >
          <animate
            attributeName="d"
            values="
              M50 20 Q65 35 50 50 Q35 65 50 80;
              M50 20 Q80 50 50 50 Q20 50 50 80;
              M50 20 Q65 35 50 50 Q35 65 50 80"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M50 20 Q35 35 50 50 Q65 65 50 80"
          stroke="#60a5fa"
          strokeWidth="6"
          fill="none"
        >
          <animate
            attributeName="d"
            values="
              M50 20 Q35 35 50 50 Q65 65 50 80;
              M50 20 Q20 50 50 50 Q80 50 50 80;
              M50 20 Q35 35 50 50 Q65 65 50 80"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  </div>
);

export default LoaderSpinner;