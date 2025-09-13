class TodosController {
  getTodos = (req, res, next) => {
    res.json({
      data: null,
      message: "get all todos...",
      status: "ok",
    });
  };

  getTodosById = (req, res, next) => {
    const id = req.params.userId;
    res.json({
      data: {
        id: id,
      },
      message: "get all todos by id...",
      status: "ok",
    });
  };

  createTodos = (req, res, next) => {
    res.json({
      data: null,
      message: "Create todos...",
      status: "ok",
    });
  };

  todosUpdate = (req, res, next) => {
    const id = req.params.userId;
    res.json({
      data: {
        id: id,
      },
      message: "Update todos...",
      status: "ok",
    });
  };

  todosDelete = (req, res, next) => {
    res.json({
      data: null,
      message: "Delete todos...",
      status: "ok",
    });
  };

  todosDeleteById = (req, res, next) => {
    const id = req.params.userId;
    res.json({
      data: {
        id: id,
      },
      message: "Delete todos by id...",
      status: "ok",
    });
  };
}

const todosCtrl = new TodosController();

export { todosCtrl };
