const createTaskElement = () => {
  return (
    <div className="create-task-hot">
      <div className="task-header">
        <h2>Добавить задачу</h2>
      </div>
        <form className="add-new-task-hot">
          <input type="text" placeholder="Название задачи"/>
          <input type="date" placeholder="Дедлайн"></input>
          <input type="time" placeholder="Дедлайн"></input>
          <button>Добавить</button>
        </form>
    </div>
  );
};

export default createTaskElement;
