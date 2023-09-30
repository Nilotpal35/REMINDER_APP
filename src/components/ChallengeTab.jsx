export default function ChallengeTab({
  status,
  setStatus,
  filteredChallenges,
}) {
  return (
    <>
      <div className="tab">
        <p
          onClick={() => setStatus("active")}
          className={status === "active" ? "active" : ""}
        >
          Active {filteredChallenges.active.length}
        </p>
        <p
          onClick={() => setStatus("completed")}
          className={status === "completed" ? "active" : ""}
        >
          Completed {filteredChallenges.completed.length}
        </p>
        <p
          onClick={() => setStatus("failed")}
          className={status === "failed" ? "active" : ""}
        >
          Failed {filteredChallenges.failed.length}
        </p>
      </div>
    </>
  );
}

