import { useContext, useState } from "react";
import { buttonStyle } from "./NewChallenge";
import { ChallengeContext } from "../store/challenge";
import { motion } from "framer-motion";

export default function ChallengeGridTile({ item }) {
  const itemDate = new Date(item.deadline).toLocaleDateString("en-us", {
    dateStyle: "medium",
    // day: "2-digit",
    // month: "short",
    // year: "numeric",
  });
  const [hide, setHide] = useState(false);
  const { updateChallenges } = useContext(ChallengeContext);
  return (
    <div className={`challenge-item-details ${hide ? "expanded" : ""}`}>
      <div style={rootStyle}>
        <div style={challengeItemStyle}>
          <div style={{ display: "inline-flex", gap: "1rem" }}>
            <img src={item.image} alt="cimage" style={imageStyle} />
            <div>
              <h2>{item.title}</h2>
              <p>complete by {itemDate}</p>
            </div>
          </div>
          <div style={{ margin: "1.5rem 0 1rem 0" }}>
            <select
              defaultValue={item.status}
              onChange={(e) => {
                console.log("option selected", item.id, e.target.value);
                updateChallenges(item.id, e.target.value);
              }}
            >
              <option value={"active"}>Active</option>
              <option value={"completed"}>Complete</option>
              <option value={"failed"}>Failed</option>
            </select>
          </div>
        </div>
        <button
          onClick={() => setHide(!hide)}
          style={{
            ...buttonStyle,
            fontSize: "1.2rem",
            borderStyle: "none",
            backgroundColor: "transparent",
            color: "#8298cb",
          }}
        >
          View Details{" "}
          <span className="challenge-item-details-icon">&#9650;</span>
        </button>
        {hide && (
          <p style={{ textAlign: "center", padding: "0 0 1rem 0" }}>
            {item.description}
          </p>
        )}
      </div>
    </div>
  );
}

const rootStyle = {
  // backgroundColor: "grey",
};
const challengeItemStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
  margin: "1rem 0 ",
  // backgroundColor : "grey"
};
const imageStyle = {
  width: "6rem",
  height: "6rem",
  borderRadius: "50%",
  border: "0.001px solid red",
  objectFit: "cover",
};
