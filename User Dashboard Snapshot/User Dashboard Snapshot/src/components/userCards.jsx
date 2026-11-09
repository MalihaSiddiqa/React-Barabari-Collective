
function userCard({user}){
  return (
    <div className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0)}
      </div>
      <h3>{user.name}</h3>
      <div className="user-details">
        <p>Username: {user.username}</p>
        <p>Email:{user.email}</p>
        <p>Company:{user.company.name}</p>
      </div>
    </div>
  );
};

userCard.displayName = 'UserCard';

export default userCard;