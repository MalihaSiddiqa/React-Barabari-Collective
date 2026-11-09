
import UserCard from './userCards';

function userList({ users =[]}) { 
    if (!users||users.length === 0) {
        return <p className="no-results">No users found</p>;
    }

    return (
        <div className="users-grid">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
}

export default userList;