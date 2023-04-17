import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import "./Card.css"; // assuming the CSS file is in the same directory as the component
import { toast } from "react-toastify";

const Card = ({ course, liked, setLiked }) => {
  function handleClick() {
    //phele sa like hua pada ha
    if (liked.includes(course.id)) {
      setLiked((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Liked removed");
    } else {
      //koi bhi like nhi ha
      if (liked.length === 0) {
        setLiked([course.id]);
      } else {
        //  if kuch like the phele sa hi toh phele wale dal do or new wale bhi
        setLiked((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }

  return (
    <div className="card-container">
      <img src={course.image.url} alt={course.title} />

      <div className="card-like">
        <button onClick={handleClick}>
          {liked.includes(course.id) ?   ( <FcLike /> ) : (<FcLikePlaceholder />)}
        </button>
      </div>

      <div className="card-content">
        <p className="card-title">{course.title}</p>
        <p className="card-description">{
        
        course.description.length>100?(`${course.description.substr(0,101)}...`):(course.description)
        }</p>
      </div>
    </div>
  );
};

export default Card;
