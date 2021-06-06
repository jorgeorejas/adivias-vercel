import cn from 'classnames';
export default function Card({ children, className }) {
  const classNameContent = cn(
    className,
    'flex flex-row gap-2 border   rounded-xl'
  );
  return <div className={classNameContent}>{children}</div>;
}
