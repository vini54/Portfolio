'use client';

import { type SVGProps } from 'react';

interface IProps extends SVGProps<SVGSVGElement> {
  animate?: boolean;
}

export const LogoWhitePath = (props: IProps) => {
  const { animate = false, ...rest } = props;

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='15' height='20' fill='none' viewBox='0 0 15 20' {...rest}>
      <g fill='#FCFCFC'>
        <path
          d='M5.167 0C1.623 0-.283 4.838 2.154 7.68l.045.05 5.316 5.986L12.83 7.73l.044-.05C15.355 4.838 13.406 0 9.862 0z'
          className={animate ? 'animate-bounce-pulse' : ''}
        />

        <path d='m12.83 11.82-.664-.747-4.652 5.236-4.651-5.236-.665.748C.515 13.716-.149 16.16.028 18.454.116 19.352.78 20 1.578 20h11.828c.798 0 1.507-.648 1.55-1.546.222-2.294-.398-4.688-2.125-6.633' />
      </g>
    </svg>
  );
};
