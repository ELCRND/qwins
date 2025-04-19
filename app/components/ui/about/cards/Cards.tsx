import Defense from "./defense/Defense";
import Performance from "./performance/Performance";
import Equipment from "./equipment/Equipment";
import Availability from "./availability/Availability";
import Support from "./support/Support";

type Props = {
  currentCard: string;
};

const Cards = ({ currentCard }: Props) => {
  switch (currentCard) {
    case "defense":
      return <Defense />;
    case "performance":
      return <Performance />;
    case "equipment":
      return <Equipment />;
    case "availability":
      return <Availability />;
    case "support":
      return <Support />;
    default:
      return <Defense />;
  }
};

export default Cards;
