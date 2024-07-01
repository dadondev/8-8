import { useSelector } from "react-redux"
import { useCollection } from "../hooks/useCollection"
import { useState, useEffect } from "react";

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount !== null) {
      setCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  const { user } = useSelector((state) => state.user);
  const { data } = useCollection("todos", ["uid", "==", user.uid]);
  console.log(data);
  return (
    <div className="container pr-5 pl-5">
      <h1 className="text-2xl mb-10 mt-4 font-normal">Home Page</h1>
      <div className="card w-96 bg-slate-50 shadow-md p-6 flex items-center flex-col gap-5">
        <h1 className="text-center text-xl font-bold">Counter</h1>
        <div className="flex items-center gap-4">
          <button className="text-2xl btn-error btn text-white font-bold  btn-circle text-center pb-1" onClick={decrement}>-</button>
          <p className="text-2xl">{count}</p>
          <button className="text-2xl btn-success text-white font-bold btn  btn-circle text-center pb-1" onClick={increment}>+</button></div>

      </div>
    </div>
  )
}

export default Home 