import cn from 'classnames';
export default function Card({ children, className }) {
  const classNameContent = cn(
    className,
    'flex flex-row gap-2 border rounded-xl p-2'
  );
  return <div className={classNameContent}>{children}</div>;
}
