import { v4 as uuidv4 } from "uuid";

export const todoData = [
  {
    uuid: uuidv4(),
    title: "Buy groceries",
    status: "Not started",
    dueDate: "13/9/2023",
    priority: "High priority",
  },
  {
    uuid: uuidv4(),
    title: "Buy bread",
    status: "Not started",
    dueDate: "13/9/2023",
    priority: "High priority",
  },
  {
    uuid: uuidv4(),
    title: "Buy milk",
    status: "Not started",
    dueDate: "13/9/2023",
    priority: "High priority",
  },
  {
    uuid: uuidv4(),
    title: "Cook dinner",
    status: "In progress",
    dueDate: "14/9/2023",
    priority: "Medium priority",
  },
  {
    uuid: uuidv4(),
    title: "Wash the dishes",
    status: "Completed",
    dueDate: "14/9/2023",
    priority: "Low priority",
  },
  {
    uuid: uuidv4(),
    title: "Go to the gym",
    status: "Completed",
    dueDate: "14/7/2023",
    priority: "Low priority",
  },
];
