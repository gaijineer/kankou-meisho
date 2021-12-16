import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
import data from './data';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);

    try {
      setTours(data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length) {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    );
  } else {
    return (
      <main>
        <div className="title">
          <h2>他にツアーがありません</h2>
          <button className="btn" onClick={fetchTours}>
            ツアーを再度表示する
          </button>
        </div>
      </main>
    );
  }
}

export default App;
