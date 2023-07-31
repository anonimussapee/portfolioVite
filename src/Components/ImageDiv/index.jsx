const ImageDiv = ({ width, height, image, classAlternative }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`, 
        width: width,
        height: height,
      }}
      className={`rounded-2xl img object-cover ${classAlternative}`}
    ></div>
  );
};

export { ImageDiv };
