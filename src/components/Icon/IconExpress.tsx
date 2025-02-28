import cn from 'classnames';
import * as React from 'react';

export const IconExpress = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      viewBox="0 0 67 40"
      fill="#fff"
      fillRule="evenodd"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round">
      <use xlinkHref="#express_svg__a" x="1" y="1" />
      <symbol id="express_svg__a" overflow="visible">
        <path
          d="M64 36.167c-2.328.592-3.768.026-5.06-1.914l-9.188-12.712-1.328-1.76-10.73 14.514c-1.226 1.746-2.512 2.506-4.8 1.888l13.74-18.444-12.792-16.66c2.2-.428 3.72-.21 5.07 1.76l9.53 12.87 9.6-12.8c1.23-1.746 2.552-2.41 4.76-1.766l-4.96 6.576-6.72 8.75c-.8 1-.69 1.684.046 2.65L64 36.167zM.016 17.431l1.124-5.528C4.2.963 16.74-3.583 25.388 3.177c5.054 3.976 6.31 9.6 6.06 15.9H2.96c-.428 11.34 7.734 18.184 18.14 14.692 3.65-1.226 5.8-4.084 6.876-7.66.546-1.792 1.45-2.072 3.134-1.56-.86 4.472-2.8 8.208-6.9 10.546-6.126 3.5-14.87 2.368-19.47-2.496C2 29.777.868 26.201.36 22.377c-.08-.632-.24-1.234-.36-1.84q.016-1.552.016-3.104zm2.996-.76h25.744c-.168-8.2-5.274-14.024-12.252-14.074-7.66-.06-13.16 5.626-13.492 14.074z"
          stroke="none"
          fill="#000"
          fillRule="nonzero"
        />
      </symbol>
    </svg>
  )
);

export const IconExpressDark = React.memo<JSX.IntrinsicElements['svg']>(
  ({className}) => (
    <svg
      className={cn('inline', className)}
      viewBox="0 0 67 40"
      fill="#000000"
      fillRule="evenodd"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round">
      <use xlinkHref="#express_svg__b" x="1" y="1" />
      <symbol id="express_svg__b" overflow="visible">
        <path
          d="M64 36.167c-2.328.592-3.768.026-5.06-1.914l-9.188-12.712-1.328-1.76-10.73 14.514c-1.226 1.746-2.512 2.506-4.8 1.888l13.74-18.444-12.792-16.66c2.2-.428 3.72-.21 5.07 1.76l9.53 12.87 9.6-12.8c1.23-1.746 2.552-2.41 4.76-1.766l-4.96 6.576-6.72 8.75c-.8 1-.69 1.684.046 2.65L64 36.167zM.016 17.431l1.124-5.528C4.2.963 16.74-3.583 25.388 3.177c5.054 3.976 6.31 9.6 6.06 15.9H2.96c-.428 11.34 7.734 18.184 18.14 14.692 3.65-1.226 5.8-4.084 6.876-7.66.546-1.792 1.45-2.072 3.134-1.56-.86 4.472-2.8 8.208-6.9 10.546-6.126 3.5-14.87 2.368-19.47-2.496C2 29.777.868 26.201.36 22.377c-.08-.632-.24-1.234-.36-1.84q.016-1.552.016-3.104zm2.996-.76h25.744c-.168-8.2-5.274-14.024-12.252-14.074-7.66-.06-13.16 5.626-13.492 14.074z"
          stroke="none"
          fill="#fff"
          fillRule="nonzero"
        />
      </symbol>
    </svg>
  )
);

IconExpress.displayName = 'IconExpress';
IconExpressDark.displayName = 'IconExpressDark';
