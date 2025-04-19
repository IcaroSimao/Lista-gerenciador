import axios from 'axios'
import type { List } from '../interfaces/list'
import { API_URL } from '../config'

export class ListService {
  static async getListById(id: number) {
    const response = await axios.get(`${API_URL}/list/${id}`)
    return response.data as List
  }

  static async getLists() {
    const response = await axios.get(`${API_URL}/list`)
    return response.data as List[]
  }

  static async createList(list: List) {
    const response = await axios.post(`${API_URL}/list`, list)
    return response.data as List
  }

  static async updateList(list: List) {
    const response = await axios.put(`${API_URL}/list/${list.id}`, list)
    return response.data as List
  }

  static async deleteList(id: number) {
    const response = await axios.delete(`${API_URL}/list/${id}`)
    return response.data as List
  }
}
