import axios from "axios";
export const disconnectFunc = async () => {
  const result = await axios.put("/api/web3/disconnect");
  return result;
};
