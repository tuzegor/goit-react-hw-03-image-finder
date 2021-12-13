export default async function fetchPicturesApi(searchName, page) {
  console.log(page);
  console.log(searchName);
  const response = await fetch(
    `https://pixabay.com/api/?q=${searchName}&page=${page}&key=24011723-51ecfad92349740cba3768f0d&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return await response.json();
}
