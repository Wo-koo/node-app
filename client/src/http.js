import axios from "axios";
// import Vue from 'vue';
// import router from './router';

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || 'client',
    // baseURL: 'http://localhost:3000/admin/api'
})

export default http