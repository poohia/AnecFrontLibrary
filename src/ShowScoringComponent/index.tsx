import React from "react";
import Avatar from "../Avatar";

import { ScoringUsers } from "../types";
import { GameOver, SecondPrize, ThirdPrice, Trophy } from "./icons";
import useShowScoringComponent from "./useShowScoringComponent";

export const AvatarCard = ({ user }: { user: ScoringUsers }) => (
  <div className="row anec--user-list-item animate__animated animate__backInUp">
    <div className="anec--user-list-item-user-avatar">
      <Avatar type={user.avatar} preset="default" />
    </div>

    <div className="anec--user-list-item-user-info">{user.username}</div>
  </div>
);

const ShowScoringComponent = ({ users }: { users: ScoringUsers[] }) => {
  const { scoring } = useShowScoringComponent(users);

  console.log("scoring", JSON.parse(JSON.stringify(scoring)));

  return (
    <div className="anec--show-scoring-one-winner-content">
      {scoring.map((score, i) => (
        <React.Fragment key={i}>
          <div className="anec--show-scoring-one-winner-content-row-placement">
            {i === 0 && <Trophy />}
            {i === 1 && <SecondPrize />}
            {i === 2 && <ThirdPrice />}
            {i > 2 && <GameOver />}
            Score: {score[0].score}
          </div>
          <div className="anec--user-list">
            {score.map((s) => (
              <AvatarCard key={s.username} user={s} />
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ShowScoringComponent;
