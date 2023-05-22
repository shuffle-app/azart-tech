import './Checkbox.module.css';

export const Checkbox = (props) => {
  return (
    <div>
      <input type="checkbox" className="custom-checkbox" {...props} />
    </div>
  );
};
