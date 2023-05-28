import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderConponent from "./HeaderComponent";
import {
  connectThunk,
  checkSessionThunk,
  disconnectThunk,
} from "../../store/web3";
import API from "../../API/API";

const HeaderContainer = () => {
  const dispatch = useDispatch<any>();
  const AccountInfo = useSelector((state: any) => state.web3);
  const navigate = useNavigate();

  const connectWalletFunc = async () => {
    if (window.ethereum) {
      dispatch(connectThunk());
    } else {
      alert("metamask 설치해주세요");
    }
  };
  const disConnectWalletFunc = async () => {
    if (window.ethereum) {
      dispatch(disconnectThunk());
      navigate("/");
    } else {
      alert("metamask 설치해주세요");
    }
  };

  useEffect(() => {
    window.ethereum.on("accountsChanged", async () => {
      const result = await API.get("/api/web3/check/connect");
      if (result.data.account != "disconnect") {
        connectWalletFunc();
      }
    });
  }, []);
  useEffect(() => {
    dispatch(checkSessionThunk());
  }, []);

  const testItems = [
    { text: "disconnect", func: disConnectWalletFunc },
    {
      text: "admin",
      func: () => {
        navigate("/admin");
      },
    },
  ];
  return (
    <HeaderConponent
      connectWalletFunc={connectWalletFunc}
      AccountInfo={AccountInfo}
      items={testItems}></HeaderConponent>
  );
};

export default HeaderContainer;
