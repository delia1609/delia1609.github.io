import { Link, useParams } from "react-router-dom";

export default function User() {
  const { accountId, userId } = useParams();

  return (
    <>
      <h1>User {userId} </h1>
      {accountId && <h2>ACCOUNT {accountId}</h2>}
    </>
  );
}