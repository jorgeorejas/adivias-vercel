const Logo = ({ className = '', ...props }) => (
  <>
    <span className="text-base text-2xl font-semibold tracking-wide">
      <span className={className}>
        Adivi<span className="font-extrabold text-blue">.</span>as
      </span>
    </span>
  </>
);

export default Logo;
