import React from "react";

const Card = ({ user }) => {
  return (
    <div className="flex justify-center items-center border border-gray-600 rounded-md p-4">
      <p>Hello {user.name}</p>
    </div>
  );
};

export default Card;
