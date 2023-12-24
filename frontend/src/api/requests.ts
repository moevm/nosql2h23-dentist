import axios, {AxiosResponse} from "axios"
import { Endpoints } from "./endpoints.ts";

const API_URL = "http://localhost:1234/api/"




export const loginRequest = (username: string, password: string): Promise<AxiosResponse<any, any>> => {
  const data = {
    "login": username,
    "password": password
  }
  return axios({
    url: API_URL + Endpoints.LOGIN,
    method: 'POST',
    data
  })
}


export const getDoctorById = (id: string) => {
  return axios({
    url: API_URL + Endpoints.GET_DOCTOR_BY_ID + "/" + id,
    method: 'GET',
  })
}

export const getPatientById = (id: string) => {
  return axios({
    url: API_URL + Endpoints.GET_PATIENTS + "/" + id,
    method: "GET"
  })
}
export const getAdminById = (id: string) => {
  return axios({
    url: API_URL + Endpoints.GET_ADMIN + "/" + id,
    method: "GET"
  })
}