import { Fragment } from 'react';
import Icon from './Icon';

export default function Stepper({ current, total }) {
  return (
    <div className="stepper" style={{ marginBottom: 32 }}>
      {Array.from({ length: total }).map((_, i) => {
        const n = i + 1;
        const state = n < current ? 'done' : n === current ? 'active' : '';
        return (
          <Fragment key={i}>
            <span className={`step-dot ${state}`}>
              {state === 'done' ? <Icon name="check" size={12} /> : n}
            </span>
            {i < total - 1 && <span className={`step-bar ${n < current ? 'done' : ''}`} />}
          </Fragment>
        );
      })}
    </div>
  );
}
