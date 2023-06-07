import { useState } from "react";
import CardsTs from "../components/cardsTs";

function LstProductoTs() {
  const { total } = CardsTs();

  return {
    total,
  };
}

export default LstProductoTs;
