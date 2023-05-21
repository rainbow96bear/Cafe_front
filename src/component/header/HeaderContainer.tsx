import Web3 from "web3";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import HeaderConponent from "./HeaderComponent";
import { action, connectThunk } from "../../store/web3";

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
      dispatch(action.disConnect());
    } else {
      alert("metamask 설치해주세요");
    }
  };

  return (
    <HeaderConponent
      connectWalletFunc={connectWalletFunc}
      disConnectWalletFunc={disConnectWalletFunc}
      AccountInfo={AccountInfo}></HeaderConponent>
  );
};

export default HeaderContainer;
