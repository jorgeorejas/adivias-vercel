import React, { forwardRef, useRef } from 'react';
import s from './iOS.module.css';

const Phone = (props) => {
  const { className, children, Component = 'div' } = props;

  return (
    <Component className={className}>
      <div className={s.iphone}>
        <div className={s.header}>
          <div className={s.tof} />
          <div className={s.cam} />
          <div className={s.lidar} />
        </div>
        <div className={s.side}>
          <div className={s.screen}>{children}</div>
        </div>
        <div className={s.line} />
        <div className={s.volume}></div>
        <div className={s.power}></div>
      </div>
    </Component>
  );
};

export default Phone;
