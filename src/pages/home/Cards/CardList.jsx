import Card from "./Card";

const CardList = ({ proposals }) => {

  console.log('CARDLIST', proposals)
  if (!proposals || proposals.length === 0) {
    return (
      <>
        <p>There is no people matching your interests</p>{" "}
        <i className="fa fa-heart-broken fa-10x"></i>
      </>
    );
  }

  return (
    <div className="tinder">
      <div className="tinder--status">
        <i className="fa fa-remove"></i>
        <i className="fa fa-heart"></i>
      </div>

      <div className="tinder--cards" id="cardsDeck">
        {proposals.map(user => (
          <Card key={user._id} user={user} />
        ))}
      </div>
      <div className="tinder--buttons">
        <button id="nope">
          <i className="fa fa-remove"></i>
        </button>
        <button id="love">
          <i className="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
};

export default CardList;
