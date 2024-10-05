import { useLocation } from "react-router-dom";
import FinalImagePagePresentation from "./FinalImagePage";

function FinalImagePageLogic(){
    const location =useLocation();
    const imageDetails=location.state.imageDetails;
    const name=location.state.name
    const ImageType=location.state.imagetype
return (
    <div>
<FinalImagePagePresentation imageDetails={imageDetails} name={name} imageType={ImageType} />
    </div>
)
}

export default FinalImagePageLogic;

