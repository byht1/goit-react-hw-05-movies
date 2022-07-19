import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Server from 'server/api';

const API = new Server();

export default function Reviews() {
  const { id } = useParams();
  const [language, setLanguage] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    API.movieId = `${id}`;
    serverData();
  }, []);

  async function serverData() {
    const data = await API.serverResponse();
    const results = await data.results;

    if (results.length === 0) {
      const dataUS = await API.serverResponseUS();
      const resultsUS = await dataUS.results;
      if (resultsUS.length === 0) {
        return;
      }
      setLanguage(true);
      setReviewsList(resultsUS);
      return;
    }
    setReviewsList(results);
  }

  return (
    <div>
      {!language && <p>Вибачне але ми не знайшли відгуків</p>}
      {language && (
        <p>
          Вибачте але ми не знайшли відгуків на вашошій рідній мові. Але ми
          знайшли на іншій мові.
        </p>
      )}

      <ul>
        {reviewsList.map(({ id, author, content, created_at, url }) => {
          return (
            <li key={id}>
              <p>
                <span>Автор:</span> {author}
              </p>
              <p>
                <span>Відгук:</span> {content}
              </p>
              <p>
                <span>Дата:</span> {created_at}
              </p>
              <a href={url}>
                <span>Посилання на оригінал віднуку:</span> {url}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
