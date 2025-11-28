import { useParams } from 'react-router-dom';

export default function ServiceCategory() {
  const { category } = useParams();

  return (
    <div style={{ padding: '48px' }}>
      <h1 style={{ marginBottom: '16px' }}>Category: {category}</h1>
      <p>Replace this placeholder with the actual content for “{category}”.</p>
    </div>
  );
}