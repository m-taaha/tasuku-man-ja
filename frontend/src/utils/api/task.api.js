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
    const {data} = await axiosInstance.post("/task/create", userData);
    return data;
};

//getAll Task
export const getAllTasks = async() => {
    const {data} = await axiosInstance.get("/task/tasks", userData);
    return data;
}

// get task by id
export const getTaskById = async (id) => {
    const {data} = await axiosInstance.get(`/task/tasks/${id}`, userData);
    return data;
}

//update task 
export const updateTask = async (id, updatedData) => {
    const {data} = await axiosInstance.put(`/task/update/${id}`, userData);
    return data;
}


//delete Task
export const deleteTask = async (id) => {
    const {data} = await axiosInstance.delete(`/task/delete/${id}`, userData);
    return data;
}