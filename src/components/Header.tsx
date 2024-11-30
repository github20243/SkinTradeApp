import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  styled,
  Box,
} from "@mui/material";
import LogoImage from "../assets/icon/sticker 2.svg";
import steamIcons from "../assets/icon/Vector.png";
import TelegramLogo from "../assets/icon/Link.png";
import YoutubeLogo from "../assets/icon/Link (1).png";

const Header = () => {
  return (
    <HeaderWrapper position="static">
      <Toolbar>
        <StyledLogo src={LogoImage} alt="Logo" />
        <NavWrapper>
          <NavList>
            <NavItem>
              <Typography>ПРОДАТЬ СКИНЫ</Typography>
            </NavItem>
            <NavItem>
              <Typography sx={{ color: "#007AFF" }}>КУПИТЬ СКИНЫ</Typography>
            </NavItem>
            <NavItem>
              <Typography>FAQ</Typography>
            </NavItem>
            <NavItem>
              <Typography>ГАРАНТИИ</Typography>
            </NavItem>
            <NavItem>
              <Typography>БЛОГ</Typography>
            </NavItem>
            <NavItem>
              <Typography sx={{ color: "#AD95FF" }}>GIVEAWAY</Typography>
            </NavItem>
          </NavList>
        </NavWrapper>
        <IconsWrapper>
          <StyledContainer>
          <StyledYoutubeIcon src={YoutubeLogo} alt="YouTube" />
          <StyledTelegramIcon src={TelegramLogo} alt="Telegram" />
          </StyledContainer>
          <SteamButton>
            <StyledSteamIcon src={steamIcons} alt="Steam" />
            ВОЙТИ ЧЕРЕЗ STEAM
          </SteamButton>
        </IconsWrapper>
      </Toolbar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(AppBar)({
  backgroundColor: "#1A1C21",
  color: "white",
});

const StyledLogo = styled("img")({
  width: "62px",
  height: "61px",
  position: "absolute",
  left: "165px",
});

const NavWrapper = styled(Box)({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
});

const NavList = styled("ul")({
  display: "flex",
  listStyle: "none",
  gap: "25px",
  padding: 0,
  margin: 0,
  fontFamily: "'Open Sans', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  width: "800px",
  marginLeft: "40px",
  "& .active": {
    color: "#007AFF",
  },
});

const NavItem = styled("li")({
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "14px",
  paddingRight: "6.6px",
  "&:hover": {
    color: "#1e90ff",
    borderBottom: "2px solid #1e90ff",
    transition: "border-bottom 0.3s ease",
  },
  "&.active": {
    color: "#007AFF",
    fontWeight: 600,
  },
});

const SteamButton = styled(Button)(({
  width: "200px",
  height: "38px",
  borderRadius: "4px",
  backgroundColor: "#007AFF",
  color: "white",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "18px",
  fontFamily: "'Open Sans', sans-serif",
  position: "relative",
  right: "80px",
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

const IconsWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "120px",
  flexDirection: "row-reverse",
  gap: "10px",
});

const Icon = styled("img")({
  width: "18px",
  height: "18px",
  marginLeft: "12px",
});

const StyledSteamIcon = styled("img")({
  width: "18px",
  height: "10.38px",
  marginRight: "8px",
  opacity: 1,
});

const StyledYoutubeIcon = styled(Icon)({
  position: "relative",
  right: "10px",
  cursor: "pointer",
});

const StyledTelegramIcon = styled(Icon)({
  marginLeft: "12px",
  cursor: "pointer",
});


const StyledContainer = styled("div")(({}) => ({
  position: "relative",
  right: "375px",
  display: "flex",
  justifyContent: "center",
  gap: "10px"
}))