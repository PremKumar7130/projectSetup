import { useState } from "react";
import axios from "axios";

const useAxiosCrud = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRequest = async () => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const postRequest = async (postData) => {
    try {
      setLoading(true);
      const response = await axios.post(url, postData);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const putRequest = async (putData) => {
    try {
      setLoading(true);
      const response = await axios.put(url, putData);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteRequest = async () => {
    try {
      setLoading(true);
      await axios.delete(url);
      setData(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return { data, error, loading, getRequest, postRequest, putRequest, deleteRequest };
};

export default useAxiosCrud;
