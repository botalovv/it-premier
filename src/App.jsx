import './App.css'
import Worker from "./components/Worker.jsx";
import { useState, useEffect } from "react";

function App() {
  const [workerList, setWorkerList] = useState([
    "Сережа Колотвинов",
    "Катя Калугина",
    "Миша Ходырев",
    "Сергей Иванов",
    "Света Чмеленко",
    "Марина Максимова",
    "Саша Мерзляков",
    "Дима Коновалов",
    "Дима Атаманов",
    "Антон Воронцов",
    "Дима Паньков",
    "Саша Бабин",
    "Анатолий Пономарев",
    "Анюта Федосеева",
    "Марина Васильева",
    "Олег Шапкин",
    "Алексей Туманов",
    "Дамир Хазиев",
  ]);

  // const  shuffle = (arr) => {
  //     for (let i = arr.length - 1; i > 0; i--) {
  //       let j = Math.floor(Math.random() * (i + 1));
  //       [arr[i], arr[j]] = [arr[j], arr[i]];
  //     }
  //   };

  // useEffect(() => {
  //   setWorkerList(shuffle(workerList));
  // }, [])

 
  return (
    <div className="App">
      <p className="company">
        IT Premier
      </p>
      <div className="container">
        <div className="workerList">
          {workerList.map((worker) => (
            <Worker prop={worker} key={worker} />
          ))}
        </div>
      </div>
      <p className="annotation">
        Создано в 2023 году Владимиром Боталовым 
      </p>
    </div>
  );
}

export default App;

