import JSZip from 'jszip';

const download = ({ blob, name='photo_cart' }) => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = name;
  link.href = url;
  document.body.append(link);
  link.click();
  URL.revokeObjectURL(blob);
  link.remove();
};

const downloadZip = async (items) => {
  try {
    if (!items.length) return;
    const zip = new JSZip();

    const downloadPromises = items.map(async ({ url, name }) => {
      const response = await fetch(url);
      const imageBlob = response.blob();
      return zip.file(`${name}.jpeg`, imageBlob, {binary: true});
    });

    await Promise.all(downloadPromises);
    const content = await zip.generateAsync({type:'blob'});
    download({blob: content});
  } catch(err) {
    console.error(err);
  }
};

export default downloadZip;
