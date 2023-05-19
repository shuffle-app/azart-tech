export const Hamburger = ({ toggled, toggle }) => {
  const onToggle = () => {
    toggle(!toggled);
  };

  return (
    <button className="hamburgerA" onClick={onToggle} aria-expanded={toggled}>
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="0"
          x="0"
          width="30"
          height="2"
          fill="currentColor"
          className="line top"
        />
        <rect
          y="10"
          x="15"
          width="15"
          height="2"
          fill="currentColor"
          className="line bottom"
        />
      </svg>
    </button>
  );
};
