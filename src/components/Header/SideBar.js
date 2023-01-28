import { Button } from "@mui/material";
import "./SideBar.css";
import SideBarOptions from "./SideBarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import DraftsIcon from "@mui/icons-material/Drafts";
import OutboxIcon from "@mui/icons-material/Outbox";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import ContentCutOutlinedIcon from "@mui/icons-material/ContentCutOutlined";
import FlightOutlinedIcon from "@mui/icons-material/FlightOutlined";
import FolderSharedOutlinedIcon from "@mui/icons-material/FolderSharedOutlined";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { openSendMessage } from "../../redux/features/mailSlice";
import {useDispatch} from 'react-redux';


const SideBar = () => {
  const dispatch=useDispatch();

  return (
    <div className="sidebar">
      <Button className="sidebar__compose" onClick={()=>{dispatch(openSendMessage())}}>Compose</Button>
      <SideBarOptions Icon={InboxIcon} title="Inbox" number={54} />
      <SideBarOptions Icon={StarIcon} title="Stared" number={54} />
      <SideBarOptions Icon={DraftsIcon} title="Drafts" number={54} />
      <SideBarOptions Icon={OutboxIcon} title="Sent" number={54} />
      <SideBarOptions Icon={ArchiveIcon} title="Archive" number={54} />
      <SideBarOptions Icon={DeleteIcon} title="Deleted Items" number={54} />
      <SideBarOptions Icon={ExpandLessIcon} title="Less" number={54} />
      <SideBarOptions Icon={ViewStreamIcon} title="Views" number={54} />
      <SideBarOptions
        Icon={InsertPhotoOutlinedIcon}
        title="Photos"
        number={54}
      />
      <SideBarOptions
        Icon={DescriptionOutlinedIcon}
        title="Documents"
        number={54}
      />
      <SideBarOptions
        Icon={MarkAsUnreadOutlinedIcon}
        title="Subscriptions"
        number={54}
      />
      <SideBarOptions Icon={ContentCutOutlinedIcon} title="Deals" number={54} />
      <SideBarOptions Icon={FlightOutlinedIcon} title="Travel" number={54} />
      <SideBarOptions
        Icon={FolderSharedOutlinedIcon}
        title="Folders"
        number={54}
      />
      <SideBarOptions
        Icon={CreateNewFolderOutlinedIcon}
        title="New folder"
        number={54}
      />
    </div>
  );
};

export default SideBar;
