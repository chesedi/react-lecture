import React from 'react';

export default function FriendList({friends}) {
  // 상태값과 비즈니스 로직이 없어야 한다
  return (
    <ul>
      {friends.map(friend => (
        <li id={friend.id}>{`${friend.name} (${friend.age})`}</li>
      ))}
    </ul>
  );
}
