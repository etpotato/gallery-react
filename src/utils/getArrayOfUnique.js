export default function getArrayOfUnique(array) {
  const arrayOfUnique = [];
  const set = new Set();
  for (const photo of array) {
    if (!set.has(photo.id)) {
      set.add(photo.id);
      arrayOfUnique.push(photo);
    }
  }
  return arrayOfUnique;
};
