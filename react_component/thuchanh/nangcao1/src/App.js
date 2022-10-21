import MemberList from "./components/memberlist";
import Sum from "./common/tinhtong";
import Oldest from "./components/oldest";
import DisplayArray from "./common/hienthiArr";
const defaults = "https://i.ytimg.com/vi/HhBbw_5kWnc/mqdefault.jpg"


const data = [
  {
    id: 1,
    name: "truong1",
    age: 5,
    value:4,
    arrayValue: [1,4,6,3,-77],
    link: "https://vcdn1-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=j8THd4HE31ZHWTQhSZx5tQ",
  },
  {
    id: 2,
    name: "truong2",
    age: 4,
    value:4,
    arrayValue: [1,4,26,3,7],
    link: "https://s1.media.ngoisao.vn/resize_580/news/2022/09/05/chup-anh-3-ngoisaovn-w600-h813.jpg",
  },
  {
    id: 3,
    name: "truong3",
    age: 3,
    value:4,
    arrayValue: [1,44,6,8,7],
    link: "https://s1.media.ngoisao.vn/resize_580/news/2022/09/05/chup-anh-5-ngoisaovn-w600-h870.jpg",
  },
  {
    id: 4,
    name: "truong4",
    age: 2,
    value:4,
    arrayValue: [-1,4,6,-3,7],
    link: "https://s1.media.ngoisao.vn/resize_580/news/2022/09/05/chup-anh-6-ngoisaovn-w600-h821.jpg",
  },
  {
    id: 5,
    name: "truong5",
    age: 1,
    value:4,
    arrayValue: [1,54,6,3,7],
    link: "https://s1.media.ngoisao.vn/resize_580/news/2022/09/05/chup-anh-7-ngoisaovn-w600-h875.jpg",
  },
];

function App() {
  return (
    <div>
      <MemberList data={data} />
      <DisplayArray />
    </div>
  );
}

export default App;
