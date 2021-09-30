import React from "react";

import Avatar from "../Avatar";
import { User } from "../types";

export type AvatarListProps = {
  users: User[];
};

const AvatarList = ({ users }: AvatarListProps) => {
  return (
    <div className="anec--user-list">
      <p>Liste des utilisateurs : </p>
      {users.map((user) => (
        <div className="row anec--user-list-item" key={user.userID}>
          <div
            className={`anec--user-list-item-user-info-connection-info ${
              user.connected ? "connected" : "unconnected"
            }`}
            title={user.connected ? "Connecté" : "Déconnecté"}
          >
            &nbsp;
          </div>
          <div className="anec--user-list-item-user-avatar">
            <Avatar type={user.avatar} />
          </div>
          <div className="anec--user-list-item-user-info">
            <div>
              <div>{user.username}</div>
            </div>

            <div className={`anec--user-list-item-user-info-${user.vote}`}>
              {user.vote ? (
                user.vote === "true" ? (
                  <div className="animate__animated animate__lightSpeedInLeft">
                    <i className="material-icons">thumb_up</i>A voté vrai
                  </div>
                ) : (
                  <div className="animate__animated animate__lightSpeedInLeft">
                    <i className="material-icons">thumb_down</i>A voté faux
                  </div>
                )
              ) : (
                <div>&nbsp;</div>
              )}
            </div>
            <div>
              <p>
                Score: <b>{user.score}</b>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvatarList;
