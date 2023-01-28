import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/userSlice";
import { logout } from "../../redux/features/userSlice";
import { auth } from "../../firebase";
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Yahoo%21_Mail_%282019%29.svg"

          alt=""
        />
      </div>
      <div className="header__middle">
      <SearchIcon/>
      <input placeholder="Find messages,Documents,Photos or People " type="text"/>
      <ArrowDropDownIcon className="header__inputCaret"/>

      </div>
      <div className="header__right">
      <AccountCircleIcon onClick={logoutOfApp}/>
      <HomeIcon/>

      </div>
    </div>
  );
};

export default Header;
