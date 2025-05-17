import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../util/firebaseConfig';
import useAuthRequired from '../hooks/useAuthRequired';
import { useParams } from 'react-router-dom';

const ResumeViewer = () => {
  const { filename } = useParams();
  const [url, setUrl] = useState(null);
  const user =  useAuthRequired();

  useEffect(() => {
    if (user && filename) {
      const pdfRef = ref(storage, `resume/${filename}`);
      getDownloadURL(pdfRef).then(setUrl);
    }
  }, [filename, user]);

  if (!url) return <p>Loading Resume...</p>;

  return (
    <iframe src={url} width="100%" height="600px" title="PDF Viewer" />
  );
};

export default ResumeViewer;
