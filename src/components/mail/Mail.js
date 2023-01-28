import "./Mail.css";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../../redux/features/mailSlice";
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import { firestore as db } from "../../firebase";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Mail = () => {
  const navigate = useNavigate();
  const selectedMail=useSelector(selectOpenMail)

  /*const handleDelete = async (id) => {
    const taskDocRef = doc(db, 'emails',id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }
  */
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "emails", id)); 
  }

  
  
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton onClick={handleDelete}>
          <DeleteForeverIcon />

          </IconButton>

          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <ArrowDropUpIcon />
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
            <h2>{selectedMail?.subject}</h2>
            <LabelImportantIcon className="mail__important"/>
            <p>{selectedMail?.title}</p>
            <p className="mail__time">{selectedMail?.time}</p>

        </div>
        <div className="mail__message">
            <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
