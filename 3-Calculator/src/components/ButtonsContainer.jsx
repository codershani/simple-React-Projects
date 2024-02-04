/* eslint-disable react/prop-types */
import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "0",
    ".",
    "/",
    "*",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => (
        <button
          type="button"
          key={button}
          className={styles.button}
          onClick={() => onButtonClick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
