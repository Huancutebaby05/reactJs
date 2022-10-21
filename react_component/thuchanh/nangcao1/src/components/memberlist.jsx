import { Component } from "react";
class MemberList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.data.map((i, index) => (
            <li key={index}>
              {i.name}
              {/* <img
                src={i.link}
                onError={({ currentTarget }) => {
                  if (currentTarget && currentTarget.src) {
                    currentTarget.src =
                      "https://i.ytimg.com/vi/HhBbw_5kWnc/mqdefault.jpg";
                  }
                }}
              /> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default MemberList;
