import { useSelector, useDispatch } from "react-redux";

import HeaderConponent from "./HeaderComponent";
import {
  action,
  connectThunk,
  checkCookieThunk,
  disconnectThunk,
} from "../../store/web3";
import { useEffect } from "react";

const HeaderContainer = () => {
  const dispatch = useDispatch<any>();
  const AccountInfo = useSelector((state: any) => state.web3);
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
    } else {
      alert("metamask 설치해주세요");
    }
  };
  useEffect(() => {
    dispatch(checkCookieThunk());
    window.ethereum.on("accountsChanged", () => {
      connectWalletFunc();
    });
  }, []);
  return (
    <HeaderConponent
      connectWalletFunc={connectWalletFunc}
      disConnectWalletFunc={disConnectWalletFunc}
      AccountInfo={AccountInfo}></HeaderConponent>
  );
};

export default HeaderContainer;
