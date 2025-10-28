import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, 
    withCredentials: true, //allows cookies to be sent/recieved for (auth)
    headers: {
        "Content-Type": "application/json"
    }
});

//create Task
export const createTask = async (taskData) => {
    const {data} = await axiosInstance.post("/task/create", taskData);
    return data.task;
};

//getAll Task
export const getAllTasks = async() => {
    const {data} = await axiosInstance.get("/task/tasks");
    return data; 
}

// get task by id
export const getTaskById = async (id) => {
    const {data} = await axiosInstance.get(`/task/tasks/${id}`);
    return data.task;
}

//update task 
export const updateTask = async (id, updatedTask) => {
    const {data} = await axiosInstance.put(`/task/update/${id}`, updatedTask);
    return data.task;
}


//delete Task
export const deleteTask = async (id) => {
    const {data} = await axiosInstance.delete(`/task/delete/${id}`);
    return data;
}