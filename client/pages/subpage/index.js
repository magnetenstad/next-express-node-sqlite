import createPersistedState from 'use-persisted-state';
const useCounterState = createPersistedState('count');

const useCounter = () => {
  const [count, setCount] = useCounterState(0);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>increment</button>
      <button onClick={() => setCount(currentCount => currentCount - 1)}>decrement</button>
    </div>
  );
};

export default useCounter;