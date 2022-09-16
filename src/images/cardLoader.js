import uniqid from "uniqid";

import April_Kasu_1 from "./Hanafuda_April_Kasu_1.svg";
import April_Kasu_2 from "./Hanafuda_April_Kasu_2.svg";
import April_Tane from "./Hanafuda_April_Tane.svg";
import April_Tanzaku from "./Hanafuda_April_Tanzaku.svg";
import August_Hikari from "./Hanafuda_August_Hikari.svg";
import August_Kasu_1 from "./Hanafuda_August_Kasu_1.svg";
import August_Kasu_2 from "./Hanafuda_August_Kasu_2.svg";
import August_Tane from "./Hanafuda_August_Tane.svg";
import December_Hikari from "./Hanafuda_December_Hikari.svg";
import December_Kasu_1 from "./Hanafuda_December_Kasu_1.svg";
import December_Kasu_2 from "./Hanafuda_December_Kasu_2.svg";
import December_Kasu_3 from "./Hanafuda_December_Kasu_3.svg";
import February_Kasu_1 from "./Hanafuda_February_Kasu_1.svg";
import February_Kasu_2 from "./Hanafuda_February_Kasu_2.svg";
import February_Tane from "./Hanafuda_February_Tane.svg";
import February_Tanzaku from "./Hanafuda_February_Tanzaku.svg";
import January_Hikari from "./Hanafuda_January_Hikari.svg";
import January_Kasu_1 from "./Hanafuda_January_Kasu_1.svg";
import January_Kasu_2 from "./Hanafuda_January_Kasu_2.svg";
import January_Tanzaku from "./Hanafuda_January_Tanzaku.svg";
import July_Kasu_1 from "./Hanafuda_July_Kasu_1.svg";
import July_Kasu_2 from "./Hanafuda_July_Kasu_2.svg";
import July_Tane from "./Hanafuda_July_Tane.svg";
import July_Tanzaku from "./Hanafuda_July_Tanzaku.svg";
import June_Kasu_1 from "./Hanafuda_June_Kasu_1.svg";
import June_Kasu_2 from "./Hanafuda_June_Kasu_2.svg";
import June_Tane from "./Hanafuda_June_Tane.svg";
import June_Tanzaku from "./Hanafuda_June_Tanzaku.svg";
import March_Hikari from "./Hanafuda_March_Hikari.svg";
import March_Kasu_1 from "./Hanafuda_March_Kasu_1.svg";
import March_Kasu_2 from "./Hanafuda_March_Kasu_2.svg";
import March_Tanzaku from "./Hanafuda_March_Tanzaku.svg";
import May_Kasu_1 from "./Hanafuda_May_Kasu_1.svg";
import May_Kasu_2 from "./Hanafuda_May_Kasu_2.svg";
import May_Tane from "./Hanafuda_May_Tane.svg";
import May_Tanzaku from "./Hanafuda_May_Tanzaku.svg";
import November_Hikari from "./Hanafuda_November_Hikari.svg";
import November_Kasu from "./Hanafuda_November_Kasu.svg";
import November_Tane from "./Hanafuda_November_Tane.svg";
import November_Tanzaku from "./Hanafuda_November_Tanzaku.svg";
import October_Kasu_1 from "./Hanafuda_October_Kasu_1.svg";
import October_Kasu_2 from "./Hanafuda_October_Kasu_2.svg";
import October_Tane from "./Hanafuda_October_Tane.svg";
import October_Tanzaku from "./Hanafuda_October_Tanzaku.svg";
import September_Kasu_1 from "./Hanafuda_September_Kasu_1.svg";
import September_Kasu_2 from "./Hanafuda_September_Kasu_2.svg";
import September_Tane from "./Hanafuda_September_Tane.svg";
import September_Tanzaku from "./Hanafuda_September_Tanzaku.svg";

const cards = [
  {
    seen: false,
    id: uniqid(),
    image: April_Kasu_1,
    type: "kasu",
    month: "april",
  },
  {
    seen: false,
    id: uniqid(),
    image: April_Kasu_2,
    type: "kasu",
    month: "april",
  },
  {
    seen: false,
    id: uniqid(),
    image: April_Tane,
    type: "tane",
    month: "april",
  },
  {
    seen: false,
    id: uniqid(),
    image: April_Tanzaku,
    type: "tanzaku",
    month: "april",
  },
  {
    seen: false,
    id: uniqid(),
    image: August_Kasu_1,
    type: "kasu",
    month: "august",
  },
  {
    seen: false,
    id: uniqid(),
    image: August_Kasu_2,
    type: "kasu",
    month: "august",
  },
  {
    seen: false,
    id: uniqid(),
    image: August_Tane,
    type: "tane",
    month: "august",
  },
  {
    seen: false,
    id: uniqid(),
    image: August_Hikari,
    type: "hikari",
    month: "august",
  },
  {
    seen: false,
    id: uniqid(),
    image: December_Kasu_1,
    type: "kasu",
    month: "december",
  },
  {
    seen: false,
    id: uniqid(),
    image: December_Kasu_2,
    type: "kasu",
    month: "december",
  },
  {
    seen: false,
    id: uniqid(),
    image: December_Kasu_3,
    type: "kasu",
    month: "december",
  },
  {
    seen: false,
    id: uniqid(),
    image: December_Hikari,
    type: "hikari",
    month: "december",
  },
  {
    seen: false,
    id: uniqid(),
    image: February_Kasu_1,
    type: "kasu",
    month: "february",
  },
  {
    seen: false,
    id: uniqid(),
    image: February_Kasu_2,
    type: "kasu",
    month: "february",
  },
  {
    seen: false,
    id: uniqid(),
    image: February_Tane,
    type: "tane",
    month: "february",
  },
  {
    seen: false,
    id: uniqid(),
    image: February_Tanzaku,
    type: "tanzaku",
    month: "february",
  },
  {
    seen: false,
    id: uniqid(),
    image: January_Kasu_1,
    type: "kasu",
    month: "january",
  },
  {
    seen: false,
    id: uniqid(),
    image: January_Kasu_2,
    type: "kasu",
    month: "january",
  },
  {
    seen: false,
    id: uniqid(),
    image: January_Hikari,
    type: "hikari",
    month: "january",
  },
  {
    seen: false,
    id: uniqid(),
    image: January_Tanzaku,
    type: "tanzaku",
    month: "january",
  },
  {
    seen: false,
    id: uniqid(),
    image: July_Kasu_1,
    type: "kasu",
    month: "july",
  },
  {
    seen: false,
    id: uniqid(),
    image: July_Kasu_2,
    type: "kasu",
    month: "july",
  },
  { seen: false, id: uniqid(), image: July_Tane, type: "tane", month: "july" },
  {
    seen: false,
    id: uniqid(),
    image: July_Tanzaku,
    type: "tanzaku",
    month: "july",
  },
  {
    seen: false,
    id: uniqid(),
    image: June_Kasu_1,
    type: "kasu",
    month: "june",
  },
  {
    seen: false,
    id: uniqid(),
    image: June_Kasu_2,
    type: "kasu",
    month: "june",
  },
  { seen: false, id: uniqid(), image: June_Tane, type: "tane", month: "june" },
  {
    seen: false,
    id: uniqid(),
    image: June_Tanzaku,
    type: "tanzaku",
    month: "june",
  },
  {
    seen: false,
    id: uniqid(),
    image: March_Kasu_1,
    type: "kasu",
    month: "march",
  },
  { seen: false, id: uniqid(), image: May_Kasu_1, type: "kasu", month: "may" },
  { seen: false, id: uniqid(), image: May_Kasu_2, type: "kasu", month: "may" },
  { seen: false, id: uniqid(), image: May_Tane, type: "tane", month: "may" },
  {
    seen: false,
    id: uniqid(),
    image: May_Tanzaku,
    type: "tanzaku",
    month: "may",
  },
  {
    seen: false,
    id: uniqid(),
    image: March_Kasu_2,
    type: "kasu",
    month: "march",
  },
  {
    seen: false,
    id: uniqid(),
    image: March_Hikari,
    type: "hikari",
    month: "march",
  },
  {
    seen: false,
    id: uniqid(),
    image: March_Tanzaku,
    type: "tanzaku",
    month: "march",
  },
  { seen: false, id: uniqid(), image: May_Kasu_1, type: "kasu", month: "may" },
  { seen: false, id: uniqid(), image: May_Kasu_2, type: "kasu", month: "may" },
  { seen: false, id: uniqid(), image: May_Tane, type: "tane", month: "may" },
  {
    seen: false,
    id: uniqid(),
    image: May_Tanzaku,
    type: "tanzaku",
    month: "may",
  },
  {
    seen: false,
    id: uniqid(),
    image: November_Kasu,
    type: "kasu",
    month: "november",
  },
  {
    seen: false,
    id: uniqid(),
    image: November_Tanzaku,
    type: "tanzaku",
    month: "november",
  },
  {
    seen: false,
    id: uniqid(),
    image: November_Tane,
    type: "tane",
    month: "november",
  },
  {
    seen: false,
    id: uniqid(),
    image: November_Hikari,
    type: "hikari",
    month: "november",
  },
  {
    seen: false,
    id: uniqid(),
    image: October_Kasu_1,
    type: "kasu",
    month: "october",
  },
  {
    seen: false,
    id: uniqid(),
    image: October_Kasu_2,
    type: "kasu",
    month: "october",
  },
  {
    seen: false,
    id: uniqid(),
    image: October_Tane,
    type: "tane",
    month: "october",
  },
  {
    seen: false,
    id: uniqid(),
    image: October_Tanzaku,
    type: "tanzaku",
    month: "october",
  },
  {
    seen: false,
    id: uniqid(),
    image: September_Kasu_1,
    type: "kasu",
    month: "september",
  },
  {
    seen: false,
    id: uniqid(),
    image: September_Kasu_2,
    type: "kasu",
    month: "september",
  },
  {
    seen: false,
    id: uniqid(),
    image: September_Tane,
    type: "tane",
    month: "september",
  },
  {
    seen: false,
    id: uniqid(),
    image: September_Tanzaku,
    type: "tanzaku",
    month: "september",
  },
];
export default cards;
