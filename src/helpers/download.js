import JSZip from 'jszip';

const download = (blob, name='photo_cart') => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = name;
  link.href = url;
  document.body.append(link);
  link.click();
  URL.revokeObjectURL(blob);
  link.remove();
};

const downloadZip = async (cart) => {
  if (!cart.length) return;
  const zip = new JSZip();
  const downloadPromises = cart.map(async (item) => {
    const response = await fetch(item.src.large2x);
    const imageBlob = await response.blob();
    return zip.file(`${item.photographer}.jpeg`, imageBlob, {binary: true});
  });
  
  try {
    await Promise.all(downloadPromises);
    const content = await zip.generateAsync({type:'blob'});
    download(content);
  } catch(err) {
    console.log(err);
  }
};

export default downloadZip;