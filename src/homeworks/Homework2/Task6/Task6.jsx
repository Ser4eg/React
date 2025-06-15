import { useState } from 'react';
import styles from './Task6.module.css';

const initialDishes = [
  'Голубці',
  'Хліб',
  'Сирники',
  'Бограч',
  'Млинці',
  'Борщ',
  'Плов',
  'Картопля смажена',
  'Картопля варена',
  'Котлета',
  'Салат',
];

const Task6 = () => {
  const [input, setInput] = useState('');
  const [allDishes, setAllDishes] = useState(initialDishes);
  const [waitingList, setWaitingList] = useState(['Голубці', 'Сирники']);
  const [processingList, setProcessingList] = useState([
    'Млинці',
    'Салат',
    'Салат',
  ]);
  const [completedList, setCompletedList] = useState(['Борщ', 'Плов']);
  const [error, setError] = useState('');
  const [pendingAdd, setPendingAdd] = useState('');

  const filteredOptions = allDishes.filter(dish =>
    dish.toLowerCase().includes(input.toLowerCase()),
  );

  const addOrder = () => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;
    if (!allDishes.includes(trimmedInput)) {
      setPendingAdd(trimmedInput);
      setError(`Такої страви не існує. Додати "${trimmedInput}"?`);
      return;
    }
    setWaitingList([...waitingList, trimmedInput]);
    setInput('');
    setError('');
  };

  const confirmAddDish = () => {
    setAllDishes([...allDishes, pendingAdd]);
    setWaitingList([...waitingList, pendingAdd]);
    setInput('');
    setError('');
    setPendingAdd('');
  };

  const moveToProcessing = index => {
    const item = waitingList[index];
    setWaitingList(waitingList.filter((_, i) => i !== index));
    setProcessingList([...processingList, item]);
  };

  const moveToCompleted = index => {
    const item = processingList[index];
    setProcessingList(processingList.filter((_, i) => i !== index));
    setCompletedList([...completedList, item]);
  };

  const removeCompleted = index => {
    setCompletedList(completedList.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Нова замовлена страва:</h2>
      <input
        list="dish-options"
        type="text"
        value={input}
        onChange={e => {
          setInput(e.target.value);
          setError('');
          setPendingAdd('');
        }}
        placeholder="Почніть вводити назву..."
        className={styles.input}
      />
      <datalist id="dish-options">
        {filteredOptions.map((dish, index) => (
          <option key={index} value={dish} />
        ))}
      </datalist>
      <button onClick={addOrder}>Додати</button>

      {error && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          {error}{' '}
          {pendingAdd && <button onClick={confirmAddDish}>Так, додати</button>}
        </p>
      )}

      <div className={styles.tableWrapper}>
        <div className={styles.column}>
          <h3>Очікують на виконання</h3>
          <ul>
            {waitingList.map((dish, index) => (
              <li key={index}>
                {dish}{' '}
                <button onClick={() => moveToProcessing(index)}>
                  Готувати
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Виконуються</h3>
          <ul>
            {processingList.map((dish, index) => (
              <li key={index}>
                {dish}{' '}
                <button onClick={() => moveToCompleted(index)}>
                  Приготовлено
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Готові до виносу</h3>
          <ul>
            {completedList.map((dish, index) => (
              <li key={index}>
                {dish}{' '}
                <button onClick={() => removeCompleted(index)}>Подано</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task6;
