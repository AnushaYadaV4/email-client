import { Button } from "@mui/material";
import "./SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage } from '@hookform/error-message';
import { closeSendMessage } from "../../redux/features/mailSlice";
import { useDispatch } from "react-redux";
import { firestore as db } from "../../firebase";
import firebase from "../../firebase";





import { useForm } from "react-hook-form";
import { useState } from "react";
//import {firestore as db}  from './firebase-config' 
//import firebase from './firebase-config';
const SendMail = () => {
  
  const dispatch=useDispatch();
  const { register, handleSubmit, formState: { errors }} = useForm();

 
  const onSubmit = (formData) => {
    console.log(formData);
    const data = {
      to:formData.to,
      subject:formData.subject,

      message:formData.message,
      time:formData.time,
      
      };

      const options = {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        };

        fetch("https://client-email-auth-default-rtdb.firebaseio.com/emails.json", options)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
   /* db.collection("emails").add({
      to:formData.to,
      subject:formData.subject,

      message:formData.message,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),


    });
    */
    dispatch(closeSendMessage());
    alert("Messeage sent successfully");

  };
  
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" onClick={()=>{dispatch(closeSendMessage())}}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="email"
          {...register("to", { required: true })}
        />
         <ErrorMessage errors={errors} name="to" />
          <ErrorMessage
        errors={errors}
        name="to"
        render={() => <p className="sendMail__error">"to is required"</p>}
      />
      
        <input
          placeholder="Subject"
          type="text"
          {...register("subject", { required: true })}
        />
         <ErrorMessage errors={errors} name="subject" />
          <ErrorMessage
        errors={errors}
        name="subject"
        render={() => <p className="sendMail__error">"subject is required"</p>}
      />


        <input
          placeholder="Message..."
          type="text"
          className="sendMail__message"
          {...register("message", { required: true })}
        />
         <ErrorMessage errors={errors} name="message" />
          <ErrorMessage
        errors={errors}
        name="message"
        render={() => <p className="sendMail__error">"message is required"</p>}
      />

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
