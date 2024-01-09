import React from 'react';
import './OurProjects.css'; // Make sure to import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, backgroundImage: 'url(1.jpg)' },
        { id: 2, backgroundImage: 'url(2.jpg)' },
        { id: 3, backgroundImage: 'url(3.png)' },
        { id: 4, backgroundImage: 'url(4.jpg)' },
        { id: 5, backgroundImage: 'url(5.png)' },
        { id: 6, backgroundImage: 'url(6.jpg)' },
      ],
    };
  }

  handleNext = () => {
    this.setState((prevState) => ({
      items: [...prevState.items.slice(1), prevState.items[0]],
    }));
  };
  render() {
    return (
      <div className='Main-container'>
      <div className="container">
        <div id="slide">
          {this.state.items.map((item) => (
            <div key={item.id} className="item" style={{ backgroundImage: item.backgroundImage }}>
              <div className="content">
                <div className="name">LUNDEV</div>
                <div className="des">
                  Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
                </div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="next" onClick={this.handleNext}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
