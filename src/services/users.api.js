import React from "react";

import { BASE_URL } from "../utils/configs";
export default function getAllUsers() {
  const res = fetch(`${BASE_URL}/users`).then((res) => res.json());
  return res;
}
