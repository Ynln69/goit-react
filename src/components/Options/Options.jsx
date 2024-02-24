import css from "./Options.module.css";

const Options = ({ onChange, onReset, isReset }) => {
  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => {
            onChange("good");
          }}
        >
          good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onChange("neutral");
          }}
        >
          neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            onChange("bad");
          }}
        >
          bad
        </button>
      </li>
      {isReset ? (
        <li>
          <button
            onClick={() => {
              onReset();
            }}
          >
            reset
          </button>
        </li>
      ) : null}
    </ul>
  );
};

export default Options;
