import styled from "styled-components";

import CursorPointerDiv from "../../customComponent/CursorPointerDiv";
import DropdownContainer from "../../customComponent/dropdown/DropdownContainer";

type Props = {
  connectWalletFunc: () => void;
  AccountInfo: { account: string };
  items: DropdownItems[];
};

const HeaderConponent: React.FC<Props> = ({
  connectWalletFunc,
  AccountInfo,
  items,
}) => {
  return (
    <HeaderBox>
      <LogoComponent
        src={process.env.PUBLIC_URL + "/img/logo.jpeg"}></LogoComponent>

      <HeaderBtn>
        {AccountInfo?.account == "disconnect" ||
        AccountInfo?.account == undefined ? (
          <CursorPointerDiv onClick={connectWalletFunc}>
            {"Connect Wallet"}
          </CursorPointerDiv>
        ) : (
          <ConnectBox>
            <DropdownContainer
              title={`${AccountInfo.account.slice(
                0,
                5
              )}...${AccountInfo?.account.slice(-3)}`}
              items={items}></DropdownContainer>
          </ConnectBox>
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

const ConnectBox = styled.div`
  position: relative;
`;
