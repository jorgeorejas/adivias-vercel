import React, { forwardRef, useRef } from 'react';
import cn from 'classnames';
import Link from 'next/link';

const MacOS = (props) => {
  const {
    className,
    title,
    full,
    close,
    min,
    children,
    Component = 'div'
  } = props;

  return (
    <Component className={className}>
      <div className="relative flex flex-col justify-center pt-8 transition-shadow duration-300 border shadow-xl max-h-6/10 min-h-5/10 object-centerm-auto animate hover:shadow-2xl hover:z-10 rounded-2xl ">
        <div className="absolute top-0 flex flex-row justify-between w-full h-8 px-2 py-2 border-b rounded-t-2xl">
          <div className="flex flex-row">
            <Link href={String(close)}>
              <button className="z-10 w-4 h-4 mr-1 rounded-full cursor-pointer bg-red focus:outline-none" />
            </Link>
            <Link href={String(min)}>
              <button className="z-10 w-4 h-4 mr-1 bg-yellow-500 rounded-full focus:outline-none" />
            </Link>
            <Link href={String(full)}>
              <button className="z-10 w-4 h-4 mr-1 rounded-full bg-green focus:outline-none" />
            </Link>
          </div>
          <div className="absolute top-0 w-full h-8 ">
            <h1 className="leading-8 text-center align-middle ">{title}</h1>
          </div>
        </div>
        <div className="flex flex-wrap w-full h-full gap-4 p-4 overflow-auto items-evenly justify-evenly lg:p-4">
          {children}
        </div>
      </div>
    </Component>
  );
};

export default MacOS;
