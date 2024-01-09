import React from 'react';
import './OurProjects.css'; // Make sure to import your CSS file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 1",
            description: "Content for Project 1",
          },
        },
        {
          id: 2,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 2",
            description: "Content for Project 2",
          },
        },
        {
          id: 3,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 3",
            description: "Content for Project 3",
          },
        },
        {
          id: 4,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 4",
            description: "Content for Project 4",
          },
        },
        {
          id: 5,
          backgroundImage: "url(1.jpeg)",
          content: {
            name: "Project 5",
            description: "Content for Project 5",
          },
        },
        {
          id: 6,
          backgroundImage: "url(2.jpg)",
          content: {
            name: "Project 6",
            description: "Content for Project 6",
          },
        },
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
      <>
        <div className="full-page">
          <div className="side-container">
            <div className="pagename">
              <div> Our Projects</div>
            </div>
          </div>
          <div className="Main-container">
            <div className="container">
              <div id="slide">
                {this.state.items.map((item) => (
                  <div
                    key={item.id}
                    className="item"
                    style={{ backgroundImage: item.backgroundImage }}
                  >
                    <div className="content">
                      <div className="name">{item.content.name}</div>
                      <div className="des">{item.content.description}</div>
                      <button>See more</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="buttons">
                <button id="next" onClick={this.handleNext}>
                  <i class="fa-solid fa-share"> NEXT</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
