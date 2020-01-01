import * as React from "react";

import { OnlineContainer } from "./styles";

import * as API from "api";

type UsersProps = {
  users: API.UsersProps[];
};

export const OnlineUsers: React.FC<UsersProps> = ({ users }) => {
  return (
    <OnlineContainer>
      {users.map(({ name }, key) => (
        <div key={key}>{name}</div>
      ))}
    </OnlineContainer>
  );
};
