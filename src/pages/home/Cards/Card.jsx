const Card = ({ user }) => {
  console.log('USER',user)
  return (
    <div className="tinder--card">
      <img src={user.image} />
      <h3>{user.name}</h3>
      <p>{user.bio}</p>
    </div>
  );
};

export default Card;
