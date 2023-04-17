import { useState } from "react";
import Card from "../card/Card";
import "../card/Card.css";

const Cards = ({ courses, category }) => {
    
  const [liked, setLiked] = useState([]);

  const allCourses = category === "All"
    ? Object.values(courses).flat() // flatten array of arrays
    : courses[category];

  return (
    <div className="cards-container">
      {allCourses.map((course) => (
        <Card course={course} key={course.id} liked={liked} setLiked={setLiked} />
      ))}
    </div>
  );
};

export default Cards;
