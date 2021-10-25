import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function LoaderComponent() {
  return (
    <Loader type="Bars" color="#00BFFF" height={80} width={80} timeout={3000} />
  );
}
