import { createContext, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

export const ChallengeContext = createContext({
  challenges: [],
  addChallenges: () => {},
  updateChallenges: () => {},
});

export default function ChallengeContextProvider({ children }) {
  const [challenges, setChallenges] = useState([
    {
      id: "abcdefgh",
      title: "Nilotpal",
      description: "Hi there",
      deadline: new Date().toString(),
      image: "/src/assets/working-out.png",
      status: "active",
    },
  ]);

  function addChallenges(challenge) {
    setChallenges((prevChallenge) => {
      return [{ ...challenge, id: nanoid() }, ...prevChallenge];
    });
  }

  function deleteChallenge(challengeId) {
    setChallenges((prevChallenge) => {
      return prevChallenge.filter((item) => item.id !== challengeId);
    });
  }

  function updateChallenges(challengeId, newStatus) {
    console.log("INSIDE CTX UPDATE CHALLENGE", challengeId, newStatus);
    // console.log(
    //   "UPDATE OPERATION",
    //   challenges.map((item) => {
    //     if (item.id === challengeId) {
    //       return { ...item, status: newStatus };
    //     }
    //     return item;
    //   })
    // );
    setChallenges((prevChallenge) => {
      return prevChallenge.map((item) => {
        if (item.id === challengeId) {
          return { ...item, status: newStatus };
        }
        return item;
      });
    });
  }

  const challengeCtxValue = {
    addChallenges,
    updateChallenges,
    deleteChallenge,
    challenges,
  };
  return (
    <ChallengeContext.Provider value={challengeCtxValue}>
      {children}
    </ChallengeContext.Provider>
  );
}
