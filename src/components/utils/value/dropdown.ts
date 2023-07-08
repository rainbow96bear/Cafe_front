import { disconnectFunc } from "../func/web3";
export const dropdownItems = [
  {
    text: "disconnect",
    path: "/",
    func: disconnectFunc(),
  },
  {
    text: "admin",
    path: "/admin",
  },
];
