import React from "react";
import axios from "axios";

// const axios =  require("axios")
import { BASE_URL } from "../utils/configs";
export default async function getAllUsers() {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
}