import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
class Getcards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckid: "",
      gotDeck: false,
      carddetails: {},
      cards: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle"
    );
    this.setState({ deckid: response.data.deck_id, gotDeck: true });
  }

  getCard = async () => {
    try {
      const dt = await axios.get(
        `https://deckofcardsapi.com/api/deck/${this.state.deckid}/draw/`
      );
      this.setState({ carddetails: dt.data.cards[0] });
      this.setState((st) => ({
        cards: [...st.cards, this.state.carddetails.image],
      }));
      console.log("Card State", this.state);
    } catch (error) {
      alert("Card Finished");
    }
  };

  render() {
    const displayCardImages = this.state.cards.map((el, idx) => {
      return <Card image={el} key={idx} id={idx} />;
    });
    return (
      <div>
        <button className="dealButton" onClick={this.getCard}>
          {" "}
          Deal a card{" "}
        </button>
        {displayCardImages}
      </div>
    );
  }
}

export default Getcards;
