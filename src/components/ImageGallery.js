import "./styles.css";
import { useState, useEffect } from "react";
import { PixabayFetch } from "../services/pixabay";
import ImageGalleryItem from "./ImageGalleryItem";
import Button from "./Button";
import LoaderComponent from "./Loader";
import Modal from "./Modal";

//для запроса
const API_KEY = `23235889-ad2e782c3a775466fc04cd861`;
const BASE_URL = `https://pixabay.com/api/`;
const newPixabayFetch = new PixabayFetch(API_KEY, BASE_URL);

export default function ImageGallery({ searchValue }) {
  const [searchResults, setSearchResults] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("init");
  const [largImg, setLargImg] = useState("");
  const [photographer, setPhotographer] = useState(null);

  useEffect(() => {
    setStatus("pending");
    newPixabayFetch.searchQuery = searchValue;
    newPixabayFetch.resetPage();
    newPixabayFetch
      .searchPhotos()
      .then((searchResults) => {
        console.log(searchResults);
        setSearchResults(searchResults);
        setStatus("success");
        scrolling();
      })
      .catch(() => {
        setStatus("error");
      });
  }, [searchValue]);

  const scrolling = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleClick = () => {
    newPixabayFetch.page = 1;
    console.log("page", newPixabayFetch.page);
    newPixabayFetch
      .searchPhotos()
      .then((searchResults) => {
        setSearchResults((prev) => [...prev, ...searchResults]);
        setStatus("success");
        scrolling();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const openModal = (e) => {
    setShowModal(true);
    setLargImg(e.target.dataset.source);
    setPhotographer(e.target.alt);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (status === "init") {
    return null;
  }
  if (status === "pending") {
    return <LoaderComponent />;
  }
  if (status === "success") {
    return (
      <>
        <ul className="ImageGallery">
          {searchResults.length > 0 &&
            searchResults.map((picture) => {
              return (
                <ImageGalleryItem
                  key={picture.id}
                  onClick={openModal}
                  pictUrl={picture.webformatURL}
                  photographer={picture.user}
                  largImg={picture.largeImageURL}
                />
              );
            })}
          {showModal && (
            <Modal onClick={closeModal} largePic={largImg} alt={photographer} />
          )}
        </ul>
        <Button type="button" onClick={handleClick} results={searchResults} />
      </>
    );
  }
  if (status === "error") {
    if (searchResults.length === 0) {
      return alert(`Sorry, we have not find such word... Lets try again!`);
    }
  }

  // state = {
  //   searchResults: [],
  //   showModal: false,
  //   status: "init",
  //   largImg: "",
  //   photographer:'',
  // };
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.searchValue !== this.props.searchValue) {
  //     console.log(`get fetch`);
  //     this.setState({ status: "pending" });
  //     newPixabayFetch.resetPage();
  //     newPixabayFetch.searchQuery = this.props.searchValue; //так как мы обращаемся к сеттеру, то значение мы просто перезаписываем (а не вызываем)
  //     newPixabayFetch
  //       .searchPhotos() //сетим значение из searchValue, чтобы вызвать метод searchPhotos
  //       .then((searchResults) => {
  //         console.log(searchResults);
  //         this.setState({ searchResults, status: "success" });
  //         this.scrolling();
  //       })
  //       .catch(() => {
  //         this.setState({ status: "error" });
  //       });
  //   }
  // }

  // handleClick = () => {
  //   newPixabayFetch.page = 1;
  //   console.log("page", newPixabayFetch.page);
  //   newPixabayFetch
  //     .searchPhotos()
  //     .then((searchResults) => {
  //       this.setState((prev) => ({
  //         searchResults: [...prev.searchResults, ...searchResults],
  //         status: "success",
  //       }));
  //       this.scrolling();
  //     })
  //     .catch(() => {
  //       this.setState({ status: "error" });
  //     });
  // };

  // scrolling = () => {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  // closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  // openModal = (e) => {
  //   this.setState({
  //     showModal: true,
  //     largImg: e.target.dataset.source,
  //     photographer: e.target.alt,
  //   });
  // };

  // render() {
  //   const { searchResults, status, showModal } = this.state;
  //   const { closeModal, handleClick, openModal } = this;
  //   if (status === "init") {
  //     return null;
  //   }
  //   if (status === "pending") {
  //     return <LoaderComponent />;
  //   }
  //   if (status === "success") {
  //     return (
  //       <>
  //         <ul className="ImageGallery">
  //           {searchResults.length > 0 &&
  //             searchResults.map((picture) => {
  //               return (
  //                 <ImageGalleryItem
  //                   key={picture.id}
  //                   onClick={openModal}
  //                   pictUrl={picture.webformatURL}
  //                   photographer={picture.user}
  //                   largImg={picture.largeImageURL}
  //                 />
  //               );
  //             })}
  //           {showModal && (
  //             <Modal onClick={closeModal} largePic={this.state.largImg} alt={this.state.photographer }/>
  //           )}
  //         </ul>
  //         <Button type="button" onClick={handleClick} results={searchResults} />
  //       </>
  //     );
  //   }
  //   if (status === "error") {
  //     if (searchResults.length === 0) {
  //       return alert("Sorry, we have not find such word... Lets try again!");
  //     }
  //   }
  // }
}
