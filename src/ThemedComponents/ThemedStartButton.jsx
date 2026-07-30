const ThemedStartButton = ({ onClick, children, ...props }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position from center (-1 to 1)
    const horizontal = (x / rect.width - 0.5) * 2;
    const vertical = (y / rect.height - 0.5) * 2;

    // Shadow intensity for each side
    const left = Math.max(0, -horizontal);
    const right = Math.max(0, horizontal);
    const top = Math.max(0, -vertical);
    const bottom = Math.max(0, vertical);

    e.currentTarget.style.setProperty("--shadow-left", left);

    e.currentTarget.style.setProperty("--shadow-right", right);

    e.currentTarget.style.setProperty("--shadow-top", top);

    e.currentTarget.style.setProperty("--shadow-bottom", bottom);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty("--shadow-left", 0);
    e.currentTarget.style.setProperty("--shadow-right", 0);
    e.currentTarget.style.setProperty("--shadow-top", 0);
    e.currentTarget.style.setProperty("--shadow-bottom", 0);
  };

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export default ThemedStartButton;
