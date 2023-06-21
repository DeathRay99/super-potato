// import pic from "../images/katie-zaferes.png";
// import star from "../images/star.png";

export default function Card(prop) {
  let moreDetails;
  if (prop.item.openSpots === 0) moreDetails = "SOLD-OUT";
  else if (prop.item.location == "Online") moreDetails = "ONLINE";
  return (
    <div className="card">
      {moreDetails && <div className="tag">{moreDetails}</div>}
      <img src={`../images/${prop.item.coverImg}`} alt={prop.item.coverImg} />
      <div className="card-stats">
        <img src="../images/star.png" alt="" width="20px" />
        <span>{prop.item.stats.rating}</span>
        <span>({prop.item.stats.reviewCount}) • </span>
        <span>{prop.item.location}</span>
      </div>
      <p>{prop.item.title}</p>
      <p>
        <b>From ${prop.item.price} </b> / person
      </p>
    </div>
  );
}
