import ChallengeGridTile from "./ChallengeGridTile";

export default function ChallengeItems({ finalChallenges }) {
  return (
    <>
      {finalChallenges.length > 0 ? (
        finalChallenges.map((item) => (
          <ChallengeGridTile item={item} key={item.id} />
        ))
      ) : (
        <h2 style={{textAlign : "center",}}>No Challenges found!</h2>
      )}
    </>
  );
}
