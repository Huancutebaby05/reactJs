import { useState } from "react";
import {useEffect} from "react";
 function useClock() {
  const [time, setTime] = useState("");
  const [ampm, setampm] = useState("");
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  // Function cập nhật thời gian.
  const updateTime = function () {
    let dateInfo = new Date();
    let hour = 0;
    /* Lấy giá trị của giờ */
    if (dateInfo.getHours() === 0) {
      hour = 12;
    } else if (dateInfo.getHours() > 12) {
      hour = dateInfo.getHours() - 12;
    } else {
      hour = dateInfo.getHours();
    }
    /* Lấy giá trị của phút */
    let minutes =
      dateInfo.getMinutes() < 10
        ? parseInt("0" + dateInfo.getMinutes())
        : dateInfo.getMinutes();

    /* Lấy gía trị của giây */
    let seconds =
      dateInfo.getSeconds() < 10
        ? "0" + dateInfo.getSeconds()
        : dateInfo.getSeconds();

    /* Định dạng ngày */
    let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

    /* Cập nhật state */
    setampm(ampm);
    setTime(`${hour}:${minutes}:${seconds}`);
  };
  useEffect(() => {
    if (name.length > 6) {
      console.log("name", { name });
    }
  }, [name])

  setInterval(function () {
    updateTime();
  }, 1000);

  return [time, ampm,name, setName,list,setList ];
}

export default useClock;