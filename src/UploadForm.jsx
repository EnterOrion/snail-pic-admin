/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const UploadForm = ({ setUserAuth }) => {
  const { register, handleSubmit } = useForm();

  const submitForm = async (data) => {
    // Gets auth token to post data
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(data);
    const bearer = `Bearer ${token}`;
    const formData = JSON.stringify(data);
    try {
      const req = await fetch(
        `https://snail-pic-api.onrender.com/api/create-pic`,
        {
          method: "post",
          body: formData,
          headers: {
            Authorization: bearer,
            "Content-Type": "application/json",
          },
        }
      );
      // Return any error
      if (req.status !== 200) {
        console.log("error!");
        return;
      }
      console.log("success!");
    } catch (err) {
      console.log(err);
    }
  };

  // Clears the session on logout
  const clickManager = () => {
    setUserAuth(false);
    localStorage.clear();
    window.location.reload(true);
  };
  return (
    <>
      <button className="logout-button" onClick={clickManager}>
        Logout
      </button>
      <div className="page">
        <h1 className="page-heading">Upload</h1>
        <form>
          <label htmlFor="dateTaken">Date Taken</label>
          <input
            id="dateTaken"
            type="date"
            placeholder="Date taken"
            name="dateTaken"
            {...register("dateTaken", {
              required: "Required",
            })}
          />
          <label htmlFor="photo">Photo URL</label>
          <input
            id="photoUrl"
            type="text"
            placeholder="Photo URL"
            name="photoUrl"
            {...register("photoUrl", {
              required: "Required",
            })}
          />
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            {...register("category", {
              required: "Required",
            })}
          >
            <option value="2D">2D</option>
            <option value="3D">3D</option>
            <option value="Live">Live</option>
          </select>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            type="text"
            placeholder="Description"
            name="description"
            {...register("description", {
              required: "Required",
            })}
          />

          <button
            className="form-button"
            type="submit"
            onClick={((e) => e.preventDefault(), handleSubmit(submitForm))}
          >
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default UploadForm;
