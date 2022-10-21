import { formatDateTime } from "../../helpers/formatDate.helper"

const Card = ()=>{
return (
    <div>
        <h3>
            time: {formatDateTime(new Date())}
        </h3>
    </div>
)
}
export default Card