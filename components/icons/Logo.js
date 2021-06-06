const Logo = ({ className = '', ...props }) => (
  <>
    <span className="flex items-center text-base text-2xl font-semibold tracking-wide">
      <span className={className}>
        <span>
          Adivi<span className="font-extrabold text-blue">.</span>as
        </span>
        <span className="px-1 ml-2 text-sm tracking-normal rounded-md opacity-75 bg-blue">
          Alpha
        </span>
      </span>
    </span>
  </>
);

export default Logo;
