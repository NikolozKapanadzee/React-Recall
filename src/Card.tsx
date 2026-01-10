import profilePic from "./assets/react.svg";
function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture"></img>
      <h2>Zeitnot</h2>
      <p>I Study Computer Science And Listen Music</p>
    </div>
  );
}

export default Card;
