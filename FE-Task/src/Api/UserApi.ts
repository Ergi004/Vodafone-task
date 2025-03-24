import { User } from "../types/User";
import axios from "./axios";

export const Api = {
  async getUsers() {
    const response = await axios.get("/users");
    return response.data;
  },

  async getUserById(id: number) {
    const response = await axios.get(`/users/${id}`);
    return response.data;
  },

  async createUser(user: { name: string; email: string }) {
    const response = await axios.post("/users", user);
    return response.data;
  },

  async updateUser(user?: User) {
    const response = await axios.put(`/users/${user?.id}`, user);
    return response.data;
  },

  async deleteUser(id?: number) {
    await axios.delete(`/users/${id}`);
  },
};
