import { useContext, useState } from "react";
import { ChallengeContext } from "../store/challenge.jsx";
import ChallengeTab from "./ChallengeTab.jsx";
import ChallengeItems from "./ChallengeItems.jsx";

export default function Challenges() {
  const [status, setStatus] = useState("active");
  const { challenges } = useContext(ChallengeContext);
  console.log("CHALLENGES", challenges);

  const filteredChallenges = {
    active: challenges?.filter((item) => item.status === "active"),
    completed: challenges?.filter((item) => item.status === "completed"),
    failed: challenges?.filter((item) => item.status === "failed"),
  };

  const finalChallenges = filteredChallenges[status];
  console.log("finalChallenges", finalChallenges);

  return (
    <div id="challenges">
      <ChallengeTab
        status={status}
        setStatus={setStatus}
        filteredChallenges={filteredChallenges}
      />
      <ChallengeItems finalChallenges={finalChallenges}/>
    </div>
  );
}
