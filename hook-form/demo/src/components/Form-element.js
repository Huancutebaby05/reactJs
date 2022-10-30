
import React, { useState } from "react";

function App() {
  const [state, setState] = useState({
    description:
      "Hoom nay là một ngày đẹo trời nên em đi dạo phố, không ngờ gặp đúng cái hố",
      car:null
  });
  return <form className="App">
    <textarea value={state.description}></textarea>
    <select value={state.car}>
      <option value={"Ford"}>Ford</option>
      <option value={"Volvo"}>Volvo</option>
      <option value={"Lamborghini"}>Lamborghini</option>
    </select>
  </form>;
}
// export default App;



function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = event => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {};
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}
export {FileUploadPage, App};
