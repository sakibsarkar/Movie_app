import "./Loader.css";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="loaderContainer">
            <ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    );
};

export default Loader;