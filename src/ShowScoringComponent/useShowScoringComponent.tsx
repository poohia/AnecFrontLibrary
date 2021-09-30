import { useState, useEffect } from "react";

import { ScoringUsers } from "../types";

type Scoring = Array<Array<ScoringUsers>>;

const useShowScoringComponent = (users: ScoringUsers[]) => {
  const [scoring, setScoringState] = useState<Scoring>([]);

  const setScoring = (f: (score: Scoring) => Scoring, user: ScoringUsers) => {
    setScoringState((score) => {
      if (score.find((s) => s.find((u) => u.username === user.username))) {
        return score;
      }
      return f(score);
    });
  };

  useEffect(() => {
    console.log("useEffect", users);
    let i = 0;
    let lastScore: number | null = null;
    users.forEach((user, j) => {
      const timeout = 500 * j;
      if (user.score !== lastScore) {
        console.log("append user", user, lastScore);
        setTimeout(() => {
          setScoring((score) => {
            console.log("timeout append", score, i);
            const s = score;
            if (i > 2 && typeof s[i] === "undefined") {
              s[i] = [user];
            } else if (i > 2 && s[i]) {
              s[i].push(user);
            } else if (
              typeof s[i] === "undefined" &&
              !score.find((s) => s.find((u) => u.username === user.username))
            ) {
              s[i] = [user];
              i += 1;
            }
            return Array.from(s);
          }, user);
        }, timeout);
      } else {
        setTimeout(() => {
          setScoring((score) => {
            const s = score;
            s[i - 1].push(user);
            return Array.from(s);
          }, user);
        }, timeout);
      }
      lastScore = user.score;
    });
  }, [users]);

  return { scoring };
};

export default useShowScoringComponent;
