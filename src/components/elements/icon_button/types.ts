import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export type IconButtonProps = Props & Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof Props>;
