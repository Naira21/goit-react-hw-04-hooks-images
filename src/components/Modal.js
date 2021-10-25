// import { Component } from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./styles.css";

function Modal({ largePic, alt, onClick }) {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      onClick();
    }
  };

  const handleClose = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleClose}>
      <div className="Modal">
        <img src={largePic} alt={alt} />
      </div>
    </div>,
    document.getElementById("modalRoot")
  );
}

export default Modal;

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleEscape);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleEscape);
//   }

//   handleEscape = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClick();
//     }
//   };

//   handleClose = (e) => {
//     if (e.currentTarget === e.target) {
//       this.props.onClick();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className="Overlay" onClick={this.handleClose}>
//         <div className="Modal">
//           <img src={this.props.largePic} alt="" />
//         </div>
//       </div>,
//       document.getElementById("modalRoot")
//     );
//   }
// }
