import React, { Component } from "react";
import styles from "./Concern.css";

class App extends Component {
  state = {
    visible1: false,
    visible2: false,
    visible3: false,
    visible4: false,
    visible5: false,
    visible6: false,
  };

  render() {
    return (
      <div>
        <div>
          {this.state.visible1 ?
            <div className="concern-definition"><img className='definition-image' src='https://distasiofirm.com/wp-content/uploads/2019/12/neck-pain.jpg' /><br />This is neck pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible1: !this.state.visible1 });
            }}
          >
            Neck Pain
          </button>
        </div>
        <div>
          {this.state.visible2 ? <div className="concern-definition"><img className='definition-image' src='https://www.hopkinsmedicine.org/-/media/images/health/1_-conditions/bones-and-joints/shoulder-pain-teaser.ashxg' /><br />This is shoulder pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible2: !this.state.visible2 });
            }}
          >
            Shoulder Pain
          </button>
        </div>
        <div>
          {this.state.visible3 ? <div className="concern-definition"><img className='definition-image' src='https://www.azpainmd.com/images/low-back-pain-topic-new.jpg' /><br />This is back pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible3: !this.state.visible3 });
            }}
          >
            Back Pain
          </button>
        </div>
        <div>
          {this.state.visible4 ? <div className="concern-definition"><img className='definition-image' src='https://embed.widencdn.net/img/veritas/llrvoqqpor/576x324px/iStock-26466755-XXLARGE.jpeg?u=at8tiu&use=idsla&k=c' /><br />This is hip pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible4: !this.state.visible4 });
            }}
          >
            Hip & Pelvic Pain
          </button>
        </div>
        <div>
          {this.state.visible5 ? <div className="concern-definition"><img className='definition-image' src='https://www.medlife.com/blog/wp-content/uploads/2019/08/signs-of-knee-pain-1200x675.jpg' /><br />This is knee pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible5: !this.state.visible5 });
            }}
          >
            Knee Pain
          </button>
        </div>
        <div>
          {this.state.visible6 ? <div className="concern-definition"><img className='definition-image' src='https://cdn.novusspinecenter.com/wp-content/uploads/2017/10/foot-pain_1200x1200.jpg' /><br />This is foot pain</div> : null}
          <button
            className="ConcernButton"
            onClick={() => {
              this.setState({ visible6: !this.state.visible6 });
            }}
          >
            Foot & Ankle Pain
          </button>
        </div>
      </div>
    );
  }
}

export default App;
