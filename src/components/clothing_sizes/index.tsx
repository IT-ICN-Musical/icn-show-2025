import Tshirt from "./shirt";
import Windbreaker from "./windbreaker";

// export as map
// "848e0999-f233-4c66-92a0-0da8c5ffab0b" windbreaker
// "74d684bd-4802-404d-b085-c321feba5dc3" tshirt

export default {
  "848e0999-f233-4c66-92a0-0da8c5ffab0b": Windbreaker,
  "74d684bd-4802-404d-b085-c321feba5dc3": Tshirt,
} as Record<string, React.ComponentType>;
