import React, { useState } from 'react'
import Avatar from "@mui/material/Avatar";
import { storage } from '../Firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function ProfileImage() {
    const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
    
  return (
    <div className="App">
      <Avatar src={url} sx={{ width: 150, height: 150 }} />
      <input type="file" name='profilePic' onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
}

export default ProfileImage