//import React from 'react'
import "./style.css";
import Headermain from "../../components/headermain";
import axios from "axios";
import More from "../../images/more.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Feed() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-todo-six.vercel.app/todo")
      .then((response) => {
        setTasks(response.data);
      })
      .catch(() => {
        console.log("Deu errado");
      });
  }, []);

  function deleteTask(id) {
    axios.delete(`https://api-todo-six.vercel.app/todo/${id}`)
    setTasks(tasks.filter(task => task._id !== id))
  }

  return (
    <div>
      <Headermain />
      <main>
        <div className="cards">
          {tasks.map((task) => {
            return (
              <div className="card" key={task._id}>
                <header>
                  <h2>{task.title}</h2>
                  <img src={More} alt="more" />
                </header>
                <div className="line"></div>
                <h3>{task.category}</h3>
                <p>{task.description}</p>
                <div className="btns">
                  <div className="btn-edit">
                    <Link to={{ pathname: `/edit/${task._id}`}}>
                      <button>Editar</button>
                    </Link>
                  </div>
                  {/* <div className='btn-readmore'>
                  <Link to='/lermais'>
                    <button>Ler mais</button>
                    </Link>
                  </div> */}
                  {/* 
                  Implementação do ler mais: detalhas da tarefa.
                  */}
                  <div className="btn-delete">
                    <button onClick={() => deleteTask(task._id)}>Apagar</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
