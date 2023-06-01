import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
      <CursorPointerDiv>
        <LogoComponent
          src={process.env.PUBLIC_URL + "/img/logo.jpeg"}></LogoComponent>
      </CursorPointerDiv>

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

const HeaderBox = styled("div")({
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "15px",
  borderBottom: "2px solid lightgray",
});

const LogoComponent = styled("img")({
  width: "50px",
});

const HeaderBtn = styled("button")({
  fontSize: "1.5rem",
  width: "fit-content",
  borderRadius: "5px",
  border: "1px solid gray",
});

const ConnectBox = styled("div")({
  position: "relative",
});
