import axios from "axios";

const BASE_URL = "http://localhost:5000";

const apiService = {
  getCustomer: (id) => axios.get(`${BASE_URL}/customer/${id}`),
  createCustomer: (customerData) =>
    axios.post(`${BASE_URL}/customer`, customerData),
  updateCustomer: (id, customerData) =>
    axios.put(`${BASE_URL}/customer/${id}`, customerData),
  deleteCustomer: (id) => axios.delete(`${BASE_URL}/customer/${id}`),

  getProduct: (id) => axios.get(`${BASE_URL}/product/${id}`),
  createProduct: (productData) =>
    axios.post(`${BASE_URL}/product`, productData),
  updateProduct: (id, productData) =>
    axios.put(`${BASE_URL}/product/${id}`, productData),
  deleteProduct: (id) => axios.delete(`${BASE_URL}/product/${id}`),

  placeOrder: (orderData) => axios.post(`${BASE_URL}/order`, orderData),
  getOrderDetails: (id) => axios.get(`${BASE_URL}/order/${id}`),
};

export default apiService;
