import React from 'react';

interface BotanicalLeafProps {
  className?: string;
  flip?: boolean;
  opacity?: number;
}

export const BotanicalLeaf: React.FC<BotanicalLeafProps> = ({
  className = '',
  flip = false,
  opacity = 0.18,
}) => {
  return (
    <div
      className={`pointer-events-none select-none absolute z-0 ${className} ${
        flip ? '-scale-x-100' : ''
      }`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width="160"
        height="220"
        viewBox="0 0 160 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 200C50 180 80 130 90 20"
          stroke="#204940"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M85 35C105 20 135 25 140 40C125 55 95 50 85 35Z" fill="#316358" />
        <path d="M80 60C60 40 30 45 25 60C40 75 70 70 80 60Z" fill="#316358" />
        <path d="M75 90C100 75 130 85 135 100C115 115 85 105 75 90Z" fill="#316358" />
        <path d="M65 120C45 105 15 115 10 130C30 145 55 135 65 120Z" fill="#316358" />
        <path d="M55 150C80 140 110 150 115 165C95 180 65 170 55 150Z" fill="#316358" />
        <path d="M40 175C25 165 5 172 2 185C20 195 35 188 40 175Z" fill="#316358" />
      </svg>
    </div>
  );
};
