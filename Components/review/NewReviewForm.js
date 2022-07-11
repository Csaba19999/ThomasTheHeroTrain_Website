import Rating from "./Rating";
import LoadingSpinner from "../assets/loading_spinner";
import classes from "./NewReviewForm.module.css";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

//Működő képes állapot!

//https://stackoverflow.com/questions/38049966/get-image-preview-before-uploading-in-react
function NewReviewForm() {
  const history = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(4.5);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [nameIsvalid, setNameIsvalid] = useState(true);
  const [descriptionIsvalid, setDescriptionIsvalid] = useState(true);
  const [ratingIsvalid, setRatingIsvalid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  //https://support.cloudinary.com/hc/en-us/articles/202520752-Can-I-upload-files-to-a-folder-while-keeping-their-original-file-names-
  const uploadImage = async () => {
    const bodyContent = new FormData();
    bodyContent.append("file", selectedFile);
    bodyContent.append("upload_preset", "ThomasHeroTrain");
    bodyContent.append("cloud_name", "csa1999");
    bodyContent.append("folder", "ThomasHeroTrain");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/csa1999/image/upload",
      {
        method: "POST",
        body: bodyContent,
      }
    );
    const data = await response.json();
    console.log(data);
    return data.secure_url;
  };

  const setRateHandeler = (rat) => {
    setRating(rat);
  };
  const setNameHandeler = (event) => {
    setName(event.target.value);
  };
  const setDescriptionHandeler = (event) => {
    setDescription(event.target.value);
  };

  const addReviewHandeler = async (enteredReviewData) => {
    const response = await fetch("/api/new-review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enteredReviewData),
    });

    const data = await response.json();
  };

  const submitHandeler = async (event) => {
    event.preventDefault();

    if (name.trim().length < 3) {
      setNameIsvalid(false);
      return;
    } else {
      setNameIsvalid(true);
    }
    if (description.trim().length < 10) {
      setDescriptionIsvalid(false);
      return;
    } else {
      setDescriptionIsvalid(true);
    }
    if (rating < 1 || rating > 5) {
      setRatingIsvalid(false);
      return;
    } else {
      setRatingIsvalid(true);
    }
    setIsLoading(true);

    const today = new Date();
    let year = today.getFullYear();
    let mounth = () => {
      if (today.getMonth() < 10) {
        return `0${today.getMonth() + 1}`;
      } else {
        return today.getMonth() + 1;
      }
    };
    let day = () => {
      if (today.getDate() < 10) {
        return `0${today.getDate()}`;
      } else {
        return today.getDate();
      }
    };

    today = `${year}-${mounth()}-${day()}`;

    const enteredReviewData = {
      name,
      profileImage: selectedFile
        ? await uploadImage()
        : "./img/default_profile_image.png",
      description,
      date: today,
      rating: Number(rating),
    };
    await addReviewHandeler(enteredReviewData);
    await history.replace("/");
  };

  return (
    <form onSubmit={submitHandeler} className={classes.newReviewForm}>
      <label>felhasználó név</label>
      <input
        onChange={setNameHandeler}
        className={classes.userName}
        type="text"
        placeholder="Thomas a hősmozdony"
      />
      {!nameIsvalid && (
        <p className={classes.error}>
          A név minimum 3 karakter hosszú kell legyen
        </p>
      )}
      <label>leírás</label>
      <textarea
        onChange={setDescriptionHandeler}
        className={classes.textarea}
        type="text"
        placeholder="Thomas a legjobb hősmozdony!"
      />
      {!descriptionIsvalid && (
        <p className={classes.error}>
          A leírás minimum 10 karakter hosszú kell legyen
        </p>
      )}
      <label>profilkép</label>

      <div className={classes.fileUploadBox}>
        <section className={classes.preview}>
          {selectedFile && <img src={preview} />}
        </section>
        <input
          onChange={onSelectFile}
          className={classes.fileUpload}
          type="file"
          accept="image/jpeg, image/png,"
        />
      </div>
      <p className={classes.fileUploadText}>
          Húzd ide a fájlt vagy kattints ide! (jpg, png)
        </p>

      <label>értékelés</label>
      <Rating onSet={setRateHandeler} />
      {!ratingIsvalid && (
        <p className={classes.error}>Kérlek ne játsz a DOM-al \°.°/</p>
      )}
      <button>{isLoading ? <LoadingSpinner /> : "Küldés"}</button>
    </form>
  );
}

export default NewReviewForm;
