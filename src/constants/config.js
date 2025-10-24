import { DataContext } from "@/context/DataProvider";
import { useContext } from "react";

export const API_NOTIFICATION_MESSAGES = {
  success: {
    title: "Success",
    message: "Data successfully loaded",
  },
  requestFailure: {
    title: "Error!",
    message: "An error occurred while parsing request data",
  },
  responseFailure: {
    title: "Error!",
    message:
      "An error occurred while fetching response from server. Please try again",
  },
  networkError: {
    title: "Error!",
    message:
      "Unable to connect to the server. Please check internet connectivity and try again.",
  },
};

export const SERVICE_URLS = {
  userSignup: { url: "/public/register", method: "POST" },
  userLogin: { url: "/public/login", method: "POST" },
  createWallet: { url: "/wallets", method: "POST" },
  //addMoney: { url: `/wallets/${account.userId}/credit`, method: "POST" },
};
