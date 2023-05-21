import styled from "styled-components";

import CursorPointerDiv from "../../customComponent/CursorPointerDiv";

type Props = {
  connectWalletFunc: () => void;
  disConnectWalletFunc: () => void;
  AccountInfo: { account: string };
};

const HeaderConponent: React.FC<Props> = ({
  connectWalletFunc,
  disConnectWalletFunc,
  AccountInfo,
}) => {
  return (
    <HeaderBox>
      <LogoComponent
        src={process.env.PUBLIC_URL + "/img/logo.jpeg"}></LogoComponent>

      <HeaderBtn>
        {AccountInfo?.account ? (
          <CursorPointerDiv onClick={disConnectWalletFunc}>
            Disconnect
          </CursorPointerDiv>
        ) : (
          <CursorPointerDiv onClick={connectWalletFunc}>
            Connect Wallet
          </CursorPointerDiv>
        )}
      </HeaderBtn>
    </HeaderBox>
  );
};

export default HeaderConponent;

const HeaderBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;
  border-bottom: 2px solid lightgray;
`;

const LogoComponent = styled.img`
  width: 50px;
`;

const HeaderBtn = styled.button`
  font-size: 1.5rem;
  width: fit-content;
  border-radius: 5px;
  border: 1px solid gray;
`;
