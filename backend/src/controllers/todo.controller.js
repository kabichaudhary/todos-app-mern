import { User } from "../models/userSchema.js";

class TodosController {
  getTodos = async (req, res, next) => {
    try {
      const userLists = await User.find();
      res.status(200).json(userLists);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  getTodosById = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  createTodos = async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  updateTodos = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndUpdate(id, req.body);

      if (!user) return res.status(404).json({ message: "User not found!!" });

      const userUpdate = await User.findById(id);
      res.status(200).json(userUpdate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  deleteTodos = async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);

      if (!user) {
        return res.status(404).json({ message: "User not found!!" });
      }
      res.status(200).json({ message: "User deleted successfully!!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

const todosCtrl = new TodosController();

export { todosCtrl };
