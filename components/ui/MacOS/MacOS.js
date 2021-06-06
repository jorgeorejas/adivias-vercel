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
      <div className="relative justify-center object-center pt-8 m-auto overflow-hidden transition-shadow duration-300 border shadow-xl min-h-5/10 animate hover:shadow-2xl hover:z-10 rounded-2xl">
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
        {children}
      </div>
    </Component>
  );
};

export default MacOS;
