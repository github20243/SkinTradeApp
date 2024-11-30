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
              <StyledNavItemText>ПРОДАТЬ СКИНЫ</StyledNavItemText>
            </NavItem>
            <NavItem>
              <StyledNavItemText color="#007AFF">КУПИТЬ СКИНЫ</StyledNavItemText>
            </NavItem>
            <NavItem>
              <StyledNavItemText>FAQ</StyledNavItemText>
            </NavItem>
            <NavItem>
              <StyledNavItemText>ГАРАНТИИ</StyledNavItemText>
            </NavItem>
            <NavItem>
              <StyledNavItemText>БЛОГ</StyledNavItemText>
            </NavItem>
            <NavItem>
              <StyledNavItemText color="#AD95FF">GIVEAWAY</StyledNavItemText>
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

const HeaderWrapper = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#1A1C21",
  color: "white",
  [theme.breakpoints.down("xs")]: {
    padding: "0 10px",
  },
}));

const StyledLogo = styled("img")(({ theme }) => ({
  width: "62px",
  height: "61px",
  position: "absolute",
  left: "165px",
  [theme.breakpoints.down("md")]: {
    width: "50px",
    height: "50px",
    left: "20px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "40px",
    height: "40px",
    left: "10px",
  },
}));

const NavWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
  [theme.breakpoints.down("xs")]: {
    justifyContent: "center",
  },
}));

const NavList = styled("ul")(({ theme }) => ({
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
  [theme.breakpoints.down("md")]: {
    width: "600px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "400px",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    gap: "10px",
    width: "auto",
    marginLeft: 0,
  },
}));

const NavItem = styled("li")(({ theme }) => ({
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 300,
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
  [theme.breakpoints.down("xs")]: {
    fontSize: "12px",
  },
}));

const StyledNavItemText = styled(Typography)(({ theme, color }) => ({
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "14px",
  color: color || "inherit",
  "&:hover": {
    color: "#1e90ff",
    borderBottom: "2px solid #1e90ff",
    transition: "border-bottom 0.3s ease",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "12px",
  },
}));

const SteamButton = styled(Button)(({ theme }) => ({
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
  [theme.breakpoints.down("sm")]: {
    right: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "150px",
    right: "0px",
    fontSize: "10px",
  },
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

const IconsWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  marginLeft: "120px",
  flexDirection: "row-reverse",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    gap: "5px",
    marginLeft: "0",
    marginTop: "10px",
  },
}));

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

const StyledContainer = styled("div")(({ theme }) => ({
  position: "relative",
  right: "375px",
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    right: "50px",
  },
  [theme.breakpoints.down("xs")]: {
    right: "0",
    justifyContent: "flex-start",
  },
}));
