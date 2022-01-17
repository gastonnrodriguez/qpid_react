import Tag from "./Tag";
const Card = ({ user }) => {
  console.log('USER',user)
  return (
    <div className="tinder--card">
      <img src={user.image} />
      <h3>{user.name}</h3>
      <h4>{user.age}</h4>
      <p>{user.bio}</p>
      {user.interests.map(tag => (
          <Tag key={tag} interest={tag} />
        ))}
    </div>
  );
};

export default Card;
