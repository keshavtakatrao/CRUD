import axios from 'axios';

export function GetUserData() {
    return axios.get(`https://6061e8aeac47190017a720e2.mockapi.io/user`);
}

export function PostUserData(data) {
    return axios.post(`https://6061e8aeac47190017a720e2.mockapi.io/user`, data);
}

export function GetUserById(id) {
    return axios.get(`https://6061e8aeac47190017a720e2.mockapi.io/user/${id}`);
}

export function PostUserById(id,data) {
    return axios.put(`https://6061e8aeac47190017a720e2.mockapi.io/user/${id}`,data);
}