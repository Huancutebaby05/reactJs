export const Input = (props) => {
  return (
    <div className="input-field">
      <p className="mb-0">{props.label}</p>
      <input
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
      ></input>
      <br />
      {props.error ? (
        <div>
          {" "}
          <span className="error-none">{props.error} </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
