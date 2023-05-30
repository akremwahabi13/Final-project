import { v4 as uuidv4 } from "uuid";

const places = [
  {
    title: "Testour",
    description:
      "This spot is located in Beni Khiar, Nabel. If you want to camp in just one place in this country, this forest might be one of your best options.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12821.071235850957!2d9.435088574795058!3d36.54765511838288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fc966d811c57e3%3A0x9298200b05f22d60!2sTestour!5e0!3m2!1sfr!2stn!4v1653264138783!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Testour-Beja-768x576.jpg",
    id: uuidv4(),
  },
  {
    title: "Ghabet Elbondek",
    description:
      "Looking to spend a weekend close to the nature and discovering a new beautiful spot? Camping by the Mejerda river would be such a unique experience. Mejerda river is flowing from northeast Algeria through Tunisia and is the largest supplier of water in Tunisia.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25670.465756101956!2d10.76539965946079!3d36.46219073621686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302a2a1833f825b%3A0xaf524255bf99ebc0!2sBeni%20Khiar!5e0!3m2!1sfr!2stn!4v1653262573127!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Ghabet-El-Bondek.jpg",
    id: uuidv4(),
  },
  {
    title: "Cape Angela",
    description:
      "Cape Angela is a rocky headland in Bizerte. It is the northernmost point of the African continent. The place is very popular among camping lovers, do yourself a favor and camp there — you won’t regret it.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.9245170739382!2d9.74182159830271!3d37.346082602395626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31a6bc815afeb%3A0xd8c4d62975d25e45!2zQ2FwIEFuZ2VsYSAtINix2KPYsyDYo9mG2KzZhNip!5e0!3m2!1sfr!2stn!4v1653264410283!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Cape-Angela-Da-Landa-768x576.jpg",
    id: uuidv4(),
  },
  {
    title: "El Mgasseb",
    description:
      "It is located in Beja, El Mgasseb is one of the most gorgeous virgin spots to camp in Tunisia. You will experience serenity and peacefulness unlike of which you may find nowhere else.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.866527793518!2d8.95290881910968!3d37.065661205534845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4b1abbd78e779%3A0xb91b1546083dc8bf!2zRUwgTUdBU0VCINin2YTZhdmC2KfYtdio!5e1!3m2!1sfr!2stn!4v1653264668015!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/El-Mgasseb-1024x1024.jpg",
    id: uuidv4(),
  },
  {
    title: "Bni Mtir",
    description:
      "A popular camping attraction, Bnir Mtir is a small town located in Ain Drahem, Jendouba. It is quite known for camping lovers. You get to stay in an area completely surrounded by the dam. Try topping that.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10407.612407142582!2d8.72700682489455!3d36.7413253244425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3be810b848c7%3A0x5c9b4e0888055974!2sBeni%20M%60Tir!5e1!3m2!1sfr!2stn!4v1653264787910!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Bni-Mtir.jpg",
    id: uuidv4(),
  },
  {
    title: "Kaf Abbed",
    description:
      "This sport is located in Bizerte. Everything’s just beautiful about Kef Abed – the night sky, and the relaxing ambience. Camping there is a once in a lifetime experience.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20671.599657839026!2d9.432845165150628!3d37.26768719430593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e36a05798d4721%3A0x52a36049b2cfa957!2sKef%20Abed!5e1!3m2!1sfr!2stn!4v1653265004323!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Kef-Abed-768x512.jpg",
    id: uuidv4(),
  },
  {
    title: "Critique de Robinson",
    description:
      "La Crique de Robinson is located in Nabel, and is a popular attractions in Tunisia, especially during summer time. Do yourself a favor and camp there.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.355401744908!2d10.572853014642037!3d36.84584997282959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2aadffa0df93f%3A0xb057d5089696d9e7!2sLa%20Crique%20De%20Robinson!5e1!3m2!1sfr!2stn!4v1653265159981!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/La-Crique-de-Robinson--768x492.jpg",
    id: uuidv4(),
  },
  {
    title: "Cape Serat",
    description:
      "Cape Serrat is truly one of Tunisia’s hidden gems; not many know that you can easily pick up a tent and go camp there. It’s probably the most gorgeous part of the Bizerte coastline.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10339.59681167365!2d9.208745225153134!3d37.24001621046271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e35fa12d665671%3A0xe3be836750dbee43!2sCap%20Serrat!5e1!3m2!1sfr!2stn!4v1653265300718!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Cape-serrat-Tunisia.jpg",
    id: uuidv4(),
  },
  {
    title: "Port aux Princes",
    description:
      "Port aux princes is a bit closer to Tunis. It is an area over the coast of Nabel, and it’s just lined with camps directly on the beach.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.4716847837312!2d10.670283414643139!3d36.879062770957376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d5449c879be4d%3A0x31595455e56f8679!2sPort%20aux%20Princes!5e0!3m2!1sfr!2stn!4v1653265447079!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Takelsa-819x1024.jpg",
    id: uuidv4(),
  },
  {
    title: "El Rtiba",
    description:
      "Another beautiful camping sport, El Rtiba located in Nabel, is a cool place to camp and you’ll get to see some very impressive sceneries.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204243.51432355292!2d10.496492385864261!3d36.88305331840381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d519760f370ef%3A0xfd318dea22d07922!2sRtiba%20Lovers!5e0!3m2!1sfr!2stn!4v1653265604550!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Rtiba-Tunisia-768x576.jpg",
    id: uuidv4(),
  },
];

export default places
