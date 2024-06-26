import Card from "./Card";
import athlete from "../../../images/athlete.png";
import bride from "../../../images/bride.png";
import bike from "../../../images/mountain-bike.png";

const experiences: experience[] = [
  {
    title: "Life lessons with Katie Zaferes",
    rating: 5,
    ratingCount: 6,
    imgUrl: athlete,
    price: "136",
    location: "USA",
    openSpots: 3,
  },
  {
    title: "Learn wedding photography",
    rating: 5,
    ratingCount: 30,
    imgUrl: bride,
    price: "125",
    location: "Online",
    openSpots: Infinity,
  },
  {
    title: "Group Mountain Biking",
    rating: 4.8,
    ratingCount: 2,
    imgUrl: bike,
    price: "50",
    location: "Norway",
    openSpots: 0,
  },
];

export default function Carousel() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-center">
      {experiences.map((experience, index) => (
        <Card key={index} {...experience} />
      ))}
    </div>
  );
}
