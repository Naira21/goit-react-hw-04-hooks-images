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
    newPixabayFetch.searchQuery = searchValue;
    if (searchValue === "") {
      return;
    }
    setStatus("pending");
    newPixabayFetch.resetPage();
    newPixabayFetch
      .searchPhotos()
      .then((searchResults) => {
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
}
