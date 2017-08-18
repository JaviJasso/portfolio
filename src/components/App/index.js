import React, { Component } from 'react';
// Externals
import Bio from '../Bio';
import Navbar from '../Navbar';
import Projects from '../Projects';
import Tabs from '../Tabs';
// Internals
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          name: 'Projects',
          TabContent: Projects,
        },
        {
          name: 'Bio',
          TabContent: Bio,
        },
      ],
      selectedTab: {
        name: 'Projects',
        TabContent: Projects,
      },
    };
    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick(tab) {
    this.setState({ selectedTab: tab });
  }

  render() {
    const { selectedTab, tabs } = this.state;
    const { name, TabContent } = selectedTab;

    return (
      <div className="App">
        <Navbar />
        <Tabs
          onClickHandler={this.onTabClick}
          selectedTabName={name}
          tabs={tabs}
        />
        <TabContent />
      </div>
    );
  }
}

export default App;
