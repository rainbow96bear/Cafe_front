import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import HeaderConponent from "./HeaderComponent";
import {
  connectThunk,
  checkSessionThunk,
  disconnectThunk,
} from "../../store/web3";

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

  useEffect(() => {
    window.ethereum.on("accountsChanged", async () => {
      const result = await axios.get("/api/web3/check/connect");
      if (result.data.account != "disconnect") {
        connectWalletFunc();
      }
    });
  }, []);
  useEffect(() => {
    dispatch(checkSessionThunk());
  }, []);

  const moveto = (where: string) => {
    navigate(`/${where}`);
  };
  return (
    <HeaderConponent
      connectWalletFunc={connectWalletFunc}
      AccountInfo={AccountInfo}
      moveto={moveto}></HeaderConponent>
  );
};

export default HeaderContainer;
