// import "./styles.css";

import { useEffect, useMemo, useState } from "react";

export default function Board() {
  const [active, setActive] = useState(1);
  const [hit, setHit] = useState(0);
  const [diceVal, setDiceVal] = useState(null);
  const [reShuffle, setReShuffle] = useState(true);
  const memoizedValue = useMemo(() => {
    const arr = Array.from({ length: 100 }, (_, i) => i + 1);
    const newArr = [];
    while (arr.length) newArr.push(arr.splice(0, 10));
    return newArr;
  }, []);
  const getRandomNumber = (from, to) => {
    const min = Math.ceil(from);
    const max = Math.floor(to);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const snakeBitePoint = useMemo(() => {
    const snakeHouse = new Map();
    while (snakeHouse.size < 11) {
      const home = getRandomNumber(12, 99);
      const dest = getRandomNumber(2, home - 1);
      snakeHouse.set(home, dest);
    }
    return snakeHouse;
  }, [reShuffle]);

  const successPoint = useMemo(() => {
    const greenHouse = new Map();
    while (greenHouse.size < 7) {
      const home = getRandomNumber(2, 90);
      const dest = getRandomNumber(home, 99);
      greenHouse.set(home, dest);
    }
    return greenHouse;
  }, [reShuffle]);

  const rollTheDice = () => {
    setHit(hit + 1);
    const diceValue = getRandomNumber(1, 6);
    setDiceVal(diceValue);
    if ((active === 1 && diceValue === 1) || active > 1) {
      setActive(active + diceValue <= 100 ? active + diceValue : active);
    }

    setTimeout(() => {
      setDiceVal(null);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      if (successPoint.get(active)) setActive(successPoint.get(active));
      if (snakeBitePoint.get(active)) setActive(snakeBitePoint.get(active));
    }, 300);
  }, [active, successPoint, snakeBitePoint]);
  useEffect(() => {
    setActive(1);
    setHit(0);
  }, [reShuffle]);
  return (
    <div id="background">
      <button
        style={{ padding: "10px", margin: "10px" }}
        type="button"
        onClick={() => setReShuffle(!reShuffle)}
      >
        Re-shuffle Snake and Ladder
      </button>

      <b>Current hits count(s): {hit}</b>

      <span style={{ marginBottom: "20px" }} />

      {Number(active) === 100 && (
        <h3>{`you are the  winer in ${hit} hits `}</h3>
      )}

      <table>
        {memoizedValue.map((i, ind) => {
          return (
            <tr key={`tr-${ind}`}>
              {i.map((ij) => {
                const sEntry = successPoint.get(ij);
                const bEntry = snakeBitePoint.get(ij);
                return (
                  <th
                    key={`th-${ij}`}
                    className={`${sEntry && "success"} ${bEntry && "alert"} ${
                      ij === Number(active) ? "pulser" : ""
                    }`}
                  >
                    {ij}

                    {(sEntry || bEntry) && (
                      <sub
                        style={{
                          background: "wheat",
                          width: "15px",
                          height: "15px",
                          // borderRadius: "50%",
                          fontSize: "10px",
                          border: "1px solid",
                          marginBottom: "15px",
                        }}
                      >
                        {sEntry || bEntry}
                      </sub>
                    )}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </table>
      {Number(active) === 100 ? (
        <button
          type="button"
          onClick={() => {
            setActive(1);
            setHit(0);
          }}
        >
          Restart
        </button>
      ) : (
        <button
          style={{
            padding: "10px",
            margin: "10px",
            height: "100px",
            width: "100px",
            background: "rgb(188, 243, 105)",
            borderRadius: "50%",
            fontSize: diceVal ? "25px" : "25px",
          }}
          type="button"
          onClick={(e) => (diceVal ? e.preventDefault() : rollTheDice())}
        >
          {diceVal ||
            "Roll The dice"}
        </button>
      )}
    </div>
  );
}
