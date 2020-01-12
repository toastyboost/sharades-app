import * as React from "react";

import { OnlineContainer, UserAvatar, Host } from "./styles";

import * as API from "api/socket";

type UsersProps = {
  users: API.UsersProps[];
  host: string;
  typing: string[];
};

export const OnlineUsers: React.FC<UsersProps> = ({ users, typing, host }) => {
  return (
    <OnlineContainer>
      <Host>{host}</Host>
      {users.map(({ name, id }, key) => (
        <UserAvatar key={key} data-typing={typing.includes(id)}>
          {name}
        </UserAvatar>
      ))}
    </OnlineContainer>
  );
};
