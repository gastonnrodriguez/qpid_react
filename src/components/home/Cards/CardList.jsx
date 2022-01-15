import Card from "./Card";

function CardList() {

//getproposals va a aca y iteras generando tarjetas pasandole por props los datos

  return (
    <div class="tinder">
      <div class="tinder--status">
        <i class="fa fa-remove"></i>
        <i class="fa fa-heart"></i>
      </div>

      <div class="tinder--cards" id="cardsDeck">
        <Card />
      </div>
      <div class="tinder--buttons">
        <button id="nope">
          <i class="fa fa-remove"></i>
        </button>
        <button id="love">
          <i class="fa fa-heart"></i>
        </button>
      </div>
    </div>
  );
}

export default CardList;
