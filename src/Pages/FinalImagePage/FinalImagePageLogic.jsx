import { useLocation } from "react-router-dom";
import FinalImagePagePresentation from "./FinalImagePage";

function FinalImagePageLogic(){
    const location =useLocation();
    const imageDetails=location.state;


return (
    <div>
<FinalImagePagePresentation imageDetails={imageDetails} />
    </div>
)
}

export default FinalImagePageLogic;

