const uploadForm = () => {
  return (
    <>
      <button className="logout-button">Logout</button>
      <div className="page">
        <h1 className="page-heading">Upload</h1>
        <form>
          <label htmlFor="date">Date Taken</label>
          <input
            id="date"
            type="date"
            placeholder="Date taken"
            name="date"
            required
          />
          <label htmlFor="photo">Photo URL</label>
          <input
            id="photo"
            type="text"
            placeholder="Photo URL"
            name="photo"
            required
          />
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
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
            required
          />

          <button className="form-button" type="submit">
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default uploadForm;
