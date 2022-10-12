const addFavsToLocalStorage = (photoItem) => {
  const photos = localStorage.getItem("photos");

  const getCurrentItem = localStorage.getItem("photos");
  console.log(JSON.parse(getCurrentItem))

  if (photos === null) {
    localStorage.setItem("photos", JSON.stringify([photoItem]));
  } else {
    const getCurrentItem = localStorage.getItem("photos");
    const currentItem = JSON.parse(getCurrentItem);

    currentItem.push(photoItem);

    localStorage.setItem("photos", JSON.stringify(currentItem));
  }
};

export default addFavsToLocalStorage;
