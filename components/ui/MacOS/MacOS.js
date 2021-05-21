import React, { forwardRef, useRef } from 'react';
import Link from 'next/link';

const MacOS = forwardRef((props) => {
  const {
    className,
    title,
    full,
    children,
    loading = false,
    Component = 'div'
  } = props;

  return (
    <Component className={className}>
      <div className="relative flex flex-col justify-center transition-shadow duration-300 border shadow-xl max-h-6/10 min-h-5/10 object-centerm-auto animate hover:shadow-2xl rounded-2xl ">
        <div className="absolute top-0 flex flex-row justify-between w-full h-8 px-2 py-2 rounded-t-2xl">
          <div className="flex flex-row">
            <Link href="#">
              <button className="w-4 h-4 mr-1 rounded-full cursor-pointer bg-red" />
            </Link>
            <Link href="/#bottom">
              <a className="w-4 h-4 mr-1 bg-yellow-500 rounded-full" />
            </Link>
            <Link href={String(full)}>
              <a className="w-4 h-4 mr-1 rounded-full bg-green" />
            </Link>
          </div>
          <h1 className="h-8 align-middle">{title}</h1>
          <span></span>
        </div>
        <div className="flex flex-wrap items-start content-around justify-around w-full h-full p-4 mt-8 space-x-4 space-y-4 overflow-y-auto">
          {children}
          {loading && <i className="flex pl-2 m-0"></i>}
        </div>
      </div>
    </Component>
  );
});

export default MacOS;
