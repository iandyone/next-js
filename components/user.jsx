const User = ({ user }) => {
  const { name, email, username, phone } = user;
  return (
    <div>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
};

export default User;
