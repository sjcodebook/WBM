import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const CoronaApp1 = () => {
  const renderButtons = () => {
    return (
      <div>
        <button style={{ margin: '5px' }}>Worldwide</button>
        <button style={{ margin: '5px' }}>USA</button>
        <button style={{ margin: '5px' }}>India</button>
        <button style={{ margin: '5px' }}>China</button>
      </div>
    );
  };

  return (
    <div>
      <h2>Corona Tracker</h2>
      {renderButtons()}
    </div>
  );
};

export const CoronaApp2 = () => {
  const [data, setData] = useState({});
  const [region, setRegion] = useState('all');

  const renderButtons = () => {
    return (
      <div>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('all');
          }}
        >
          Worldwide
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('usa');
          }}
        >
          USA
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('india');
          }}
        >
          India
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('china');
          }}
        >
          China
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>Corona Tracker</h2>
      {renderButtons()}
      <h4 style={{ marginTop: '10px' }}>{region.toUpperCase()}</h4>
    </div>
  );
};

export const CoronaApp3 = () => {
  const [data, setData] = useState({});
  const [region, setRegion] = useState('all');

  useEffect(() => {
    axios
      .get(
        region === 'all'
          ? `https://corona.lmao.ninja/v2/${region}`
          : `https://corona.lmao.ninja/v2/countries/${region}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [region]);

  const renderButtons = () => {
    return (
      <div>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('all');
          }}
        >
          Worldwide
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('usa');
          }}
        >
          USA
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('india');
          }}
        >
          India
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('china');
          }}
        >
          China
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>Corona Tracker</h2>
      {renderButtons()}
      <h4 style={{ marginTop: '10px' }}>{region.toUpperCase()}</h4>
      <ul>
        {Object.keys(data).map((key, i) => {
          return (
            <li key={i}>
              {key} : {typeof data[key] !== 'object' ? data[key] : ''}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const CoronaApp = () => {
  const [data, setData] = useState({});
  const [region, setRegion] = useState('all');
  const [inDetail, setInDetail] = useState(false);

  const dataLen = Object.keys(data).length;

  useEffect(() => {
    axios
      .get(
        region === 'all'
          ? `https://corona.lmao.ninja/v2/${region}`
          : `https://corona.lmao.ninja/v2/countries/${region}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [region]);

  const renderButtons = () => {
    return (
      <div>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('all');
          }}
        >
          Worldwide
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('usa');
          }}
        >
          USA
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('india');
          }}
        >
          India
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setRegion('china');
          }}
        >
          China
        </button>
        <button
          style={{ margin: '5px' }}
          onClick={() => {
            setInDetail(!inDetail);
          }}
        >
          {inDetail ? 'Show Less' : 'Show More'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>Corona Tracker</h2>
      {renderButtons()}
      <h4 style={{ marginTop: '10px' }}>{region.toUpperCase()}</h4>
      <ul>
        {Object.keys(data).map((key, i) => {
          return (
            <span key={i}>
              {i < (!inDetail ? 10 : dataLen) ? (
                <li key={i}>
                  {key} : {typeof data[key] !== 'object' ? data[key] : ''}
                </li>
              ) : (
                ''
              )}
            </span>
          );
        })}
      </ul>
    </div>
  );
};
