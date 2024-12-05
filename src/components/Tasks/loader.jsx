const testList = {
  lists: [
    {
      list_id: 1,
      list_name: "Напоминания"
    },
    {
      list_id: 2,
      list_name: "Дела по дому"
    },
    {
      list_id: 3,
      list_name: "Работа"
    },
  ]
}

const testTask = {
  tasks: [
    {
      id: 1,
      task_name: "Задача 1",
      deadline: "2024-11-11T17:00:00Z",
      subtasks: [
        {
          id: 1,
          subtask_name: "Подзадача 1.1",
        },
        {
          id: 2,
          subtask_name: "Подзадача 1.2",
        },
        {
          id: 3,
          subtask_name: "Подзадача 1.2",
        },
      ],
    },
    {
      id: 2,
      task_name: "Задача 2",
      deadline: "2024-11-15T12:00:00Z",
      subtasks: [
        {
          id: 3,
          subtask_name: "Подзадача 2.1",
        },
      ],
    },
    {
      id: 3,
      task_name: "Сходить в магазин",
      deadline: "2024-11-20T09:00:00Z",
      subtasks: [],
    },
    {
      id: 4,
      task_name: "Задача 4",
      deadline: "2024-11-11T17:00:00Z",
      subtasks: [
        {
          id: 1,
          subtask_name: "Подзадача 1.1",
        },
        {
          id: 2,
          subtask_name: "Подзадача 1.2",
        },
      ],
    },
    {
      id: 5,
      task_name: "Задача без дедлайна",
      deadline: null,
      subtasks: [],
    },
  ],
};

export const loadLists = () => {
  return testList;
};

export const loadTasks = (list_id) => {
  return testTask;
}

