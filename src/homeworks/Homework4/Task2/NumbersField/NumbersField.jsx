<<<<<<< HEAD
import styles from '../Task2.module.css';

const NumbersField = ({ randomNumbers, guessedNumbers, usedDigits }) => {
  return (
    <div className={styles.numbersField}>
      {/* {console.log(randomNumbers)} */}
      <h2>Випадковий масив чисел</h2>
      <div className={styles.digitList}>
        {randomNumbers.map((num, i) => (
          <div key={i} className={styles.digitBox}>
            {guessedNumbers.includes(num) ? num : '?'}
          </div>
        ))}
      </div>
      <div className={styles.usedDigits}>
        <strong>Використані цифри:</strong> {usedDigits.join(', ') || '—'}
      </div>
    </div>
  );
};

export default NumbersField;
=======
import styles from '../Task2.module.css';

const NumbersField = ({ randomNumbers, guessedNumbers, usedDigits }) => {
  return (
    <div className={styles.numbersField}>
      {/* {console.log(randomNumbers)} */}
      <h2>Випадковий масив чисел</h2>
      <div className={styles.digitList}>
        {randomNumbers.map((num, i) => (
          <div key={i} className={styles.digitBox}>
            {guessedNumbers.includes(num) ? num : '?'}
          </div>
        ))}
      </div>
      <div className={styles.usedDigits}>
        <strong>Використані цифри:</strong> {usedDigits.join(', ') || '—'}
      </div>
    </div>
  );
};

export default NumbersField;
>>>>>>> c2caaa4b0d69c748e1c0f368f2274c9e3fe85ef8
