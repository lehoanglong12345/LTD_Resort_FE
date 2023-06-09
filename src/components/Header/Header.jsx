import { Typography, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div className={cx("header-wrapper")}>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </div>
  );
};

export default Header;
