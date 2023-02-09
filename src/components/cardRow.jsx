import data from "../data";
import Card from "./Card";

const CardRow = (props) => {
       const cards = data.map(item => {
        let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }
        return (
            <div>
              {badgeText && <div className="card--badge">{badgeText}</div>}  
            <img src={`/src/images/`+ item.coverImg} className="card--image" />
             <Card 
                key={item.id}
                item={item}
                
              />
              </div>
        )
    })  
    return ( 
        <div className="flexit">
          {cards}
        </div>
     );
}
 
export default CardRow;