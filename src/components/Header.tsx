import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  Typography,
  styled,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoImage from "../assets/icon/sticker 2 (1).svg";
import SteamIcon from "../assets/icon/steam_logo.svg.svg";

interface TextLinkProps {
  isGiveaway: boolean;
  index: number;
  children: React.ReactNode;
}

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(false);

  const handleMenuToggle = () => {
    setDrawerOpen(!drawerOpen);
    setMenuIcon(!menuIcon);
  };

  const handleMenuItemClick = () => {
    setDrawerOpen(false);
    setMenuIcon(false);
  };

  return (
    <HeaderWrapper position="static">
      <Toolbar>
        <LeftSection>
          <LogoWrapper>
            <StyledLogo src={LogoImage} alt="Logo" />
          </LogoWrapper>
          <TextLinksWrapper>
            {[
              "ПРОДАТЬ СКИНЫ",
              "КУПИТЬ СКИНЫ",
              "FAQ",
              "ГАРАНТИИ",
              "БЛОГ",
              "GIVEAWAY",
            ].map((text, index) => (
              <TextLink key={index} isGiveaway={text === "GIVEAWAY"} index={index}>
                {text}
              </TextLink>
            ))}
          </TextLinksWrapper>
        </LeftSection>

        <RightSection>
          <IconButton color="inherit" aria-label="youtube" sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledIcon>
              <YouTubeIcon fontSize="small" />
            </StyledIcon>
          </IconButton>

          <IconButton color="inherit" aria-label="telegram" sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledIcon>
              <TelegramIcon fontSize="small" />
            </StyledIcon>
          </IconButton>

          <SteamButton variant="contained">
            <SteamIconWrapper src={SteamIcon} alt="Steam" />
            <StyledText sx={{ display: { xs: "none", md: "inline", fontWeight: 600 } }}>
              ВОЙТИ ЧЕРЕЗ STEAM
            </StyledText>
            <StyledText sx={{ display: { xs: "inline", md: "none" } }}>Войти</StyledText>
          </SteamButton>
        </RightSection>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuToggle}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          {menuIcon ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleMenuToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "100%",
            backgroundColor: "#1A1C21",
            color: "white",
            padding: "20px",
            borderBottom: "2px solid #AD95FF",
            marginTop: "60px",
            boxShadow: "none",
          },
        }}
      >
        <List>
          {[
            "ПРОДАТЬ СКИНЫ",
            "КУПИТЬ СКИНЫ",
            "FAQ",
            "ГАРАНТИИ",
            "БЛОГ",
            "GIVEAWAY",
          ].map((item, index) => (
            <ListItemButton
              component="button"
              key={index}
              onClick={handleMenuItemClick}
              sx={{
                fontWeight: "bold",
                padding: "15px 0",
                "&:hover": { backgroundColor: "#AD95FF" },
                borderBottom: index !== 5 ? "1px solid #fff" : "none",
                width: "100%",
              }}
            >
              <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", fontWeight: "600", color: "white" }}>
                {item}
              </Typography>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled(AppBar)({
  backgroundColor: "#1A1C21",
  color: "white",
  width: "100%",
  margin: "0 auto",
});

const LeftSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexGrow: 1,
});

const LogoWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const StyledLogo = styled("img")(({ theme }) => ({
  width: "62px",
  height: "61px",
  position: "absolute",
  left: "170px",
  top: "0px",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    top: "0px",
    left: "20px",
    width: "62px",
    height: "61px",
  },
}));

const TextLinksWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "2px",
  position: "relative",
  left: "45%",
  transform: "translateX(-50%)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const TextLink = styled(Typography)<TextLinkProps>(({ isGiveaway, index }) => ({
  fontFamily: "Open Sans",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "14px",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
  color: isGiveaway ? "#AD95FF" : index === 1 ? "blue" : "white",
  cursor: "pointer",
  marginLeft: "20px",
  marginRight: index === 5 ? "0" : "20px",
  borderBottom: "none",
  "&:hover": {
    textDecoration: "underline",
    transition: "color 0.3s ease, transform 0.3s ease",
    borderBottom: "1px solid white",
  },
}));

const RightSection = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledIcon = styled("div")({
  width: "24px",
  height: "24px",
});

const SteamButton = styled(Button)({
  backgroundColor: "#007AFF",
  color: "white",
  textTransform: "none",
  display: "flex",
  alignItems: "center",
  padding: "10px 20px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: "#005BB5",
  },
});

const SteamIconWrapper = styled("img")({
  width: "20px",
  height: "20px",
  marginRight: "8px",
});

const StyledText = styled(Typography)({
  fontFamily: "Open Sans",
  fontSize: "14px",
  fontWeight: "400",
  color: "white",
});
