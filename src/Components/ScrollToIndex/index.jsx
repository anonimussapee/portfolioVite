const scrollToIndex = () => {
  const Section = document.body
  if (Section) {
    Section.scrollIntoView({ behavior: 'smooth' });
  }
};
export {scrollToIndex}