import { saveAs } from 'file-saver';

export async function downloadFile(fileName: string, data: Blob) {
  try {
    saveAs(data, fileName);

    return Promise.resolve();
  } catch (e) {
    return Promise.reject(e);
  }
}
