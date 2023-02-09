
import Star from "../images/star.png"

function Card(props) {
    
    return (
        <div className="card">
            
            
            <div className="card--stats">
                <img src={Star} className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}
export default Card