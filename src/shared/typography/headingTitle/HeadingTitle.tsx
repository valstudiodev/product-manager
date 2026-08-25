
function HeadingTitle({
  className,
  children
}: { className?: string, children: React.ReactNode }): React.JSX.Element {
  return (
    <h1
      className={`heading-title ${className}`}>
      {children}
    </h1>
  );
}

export default HeadingTitle;