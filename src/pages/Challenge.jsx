import { useState } from "react";
import "../App.css";
import ChallengeBox from "../components/ChallengeBox";
import ChallengeContextProvider from "../store/challenge";
import Modal from "../components/Modal";

export default function Challenge() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function toggleModal() {
    setIsModalVisible(!isModalVisible);
  }

  return (
    <ChallengeContextProvider>
      {isModalVisible && <Modal toggleModal={toggleModal} />}

      <div id="challenge">
        <section id="challenge-page">
          <h1>Your Challenges</h1>
          <button onClick={toggleModal}>Add Challenge</button>
        </section>
        <ChallengeBox />
      </div>
    </ChallengeContextProvider>
  );
}
