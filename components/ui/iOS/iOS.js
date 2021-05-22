import React, { forwardRef, useRef } from 'react';
import s from './iOS.module.css';

const Phone = forwardRef((props) => {
  const { className, children, Component = 'div' } = props;

  return (
    <Component className={className}>
      <div class={s.iphone}>
        <div className={s.pill} />
        <div className={s.header}>
          <div className={s.tof} />
          <div className={s.cam} />
          <div className={s.lidar} />
        </div>
        <div class={s.side}>
          <div class={s.screen}>{children}</div>
        </div>
        <div className={s.line} />
        <div className={s.volume}></div>
        <div className={s.power}></div>
      </div>
    </Component>
  );
});

export default Phone;
