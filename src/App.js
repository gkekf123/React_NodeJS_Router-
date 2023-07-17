import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const handleClick = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((response) => {
        setData(response.data);
      });
  };

  // 데이터를 화면에 로드될 때 axios로 처리
  // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  return (
    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터 가져오기</button>
      <p>
        {data.userId}
        <br />
        {data.userPw}
        <br />
        {data.userName}
        <br />
      </p>
    </div>
  );
}

export default App;
