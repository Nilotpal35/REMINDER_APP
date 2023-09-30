import { useContext, useRef, useState } from "react";
import Icons from "./Icons";
import { ChallengeContext } from "../store/challenge";

export default function NewChallenge({ closeModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  console.log("SELECTED IMAGE",selectedImage);

  const { addChallenges } = useContext(ChallengeContext);
  const title = useRef(null);
  const description = useRef(null);
  const deadline = useRef(null);
  async function submitForm(e) {
    e.preventDefault();
    const formData = {
      title: title.current.value,
      deadline: deadline.current.value,
      description: description.current.value,
      image : selectedImage,
      status: "active",
    };
    try {
      setIsLoading(true);
      addChallenges(formData);
      await new Promise((res) => setTimeout(res, 500));
      closeModal();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={submitForm} style={formStyle} id="newChallenge">
      <label htmlFor="title">Title</label>
      <input name="title" placeholder="title" ref={title} style={inputStyle} />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        placeholder="description"
        ref={description}
        rows={5}
        style={inputStyle}
      ></textarea>
      <label htmlFor="deadline">Deadline</label>
      <input type="date" name="deadline" ref={deadline} style={inputStyle}/>
      <label>Icon:</label>
      <Icons
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div style={buttonContainerStyle}>
        <button
          type="button"
          style={{
            ...buttonStyle,
            backgroundColor: "transparent",
            color: "red",
          }}
          disabled={isLoading}
          onClick={() => closeModal()}
        >
          cancel
        </button>
        <button
          type="reset"
          style={{ ...buttonStyle, color: "white", backgroundColor: "purple" }}
          disabled={isLoading}
        >
          Reset
        </button>
        <button
          type="submit"
          style={{
            ...buttonStyle,
            backgroundColor: "rgba(5, 48, 220,1)",
            color: "white",
          }}
        >
          {isLoading ? "Submitting" : "Submit"}
        </button>
      </div>
    </form>
  );
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  justifyContent: "center",
  margin: "1rem 3rem",
  gap: "2rem",
  padding: "1rem",
};

const inputStyle = {
  padding: "0.5rem",
  fontFamily: `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif`,
  fontSize: "1rem",
  // width : "100%"
};
const buttonContainerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "end",
  gap: "2rem",
  margin: "2rem 0",
};
export const buttonStyle = {
  borderStyle: "none",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  borderRadius: "4px",
};
