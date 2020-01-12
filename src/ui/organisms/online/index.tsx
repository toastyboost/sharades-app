import * as React from "react";

import { OnlineContainer, UserAvatar } from "./styles";

import * as API from "api/socket";

type UsersProps = {
  users: API.UsersProps[];
};

export const OnlineUsers: React.FC<UsersProps> = ({ users }) => {
  return (
    <OnlineContainer>
      {users.map(({ name }, key) => (
        <UserAvatar key={key}>{name}</UserAvatar>
      ))}
    </OnlineContainer>
  );
};
