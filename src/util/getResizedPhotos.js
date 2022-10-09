const getResizedPhotos = (payload, width = 600, height = 400) => {
  if (!height) height = width;

  const resizedPhotos = payload.map((item) => {
    const replacement = `${width}/${height}`;
    const regex = /([0-9]+)\/([0-9]+)(?=[^\/]*$)/;
    const updatedUrl = item.download_url.replace(regex, replacement);
    return {
      ...item,
      width: width,
      height: height,
      download_url: updatedUrl,
    };
  });
  console.log(resizedPhotos);
  return resizedPhotos;
};

export default getResizedPhotos;
