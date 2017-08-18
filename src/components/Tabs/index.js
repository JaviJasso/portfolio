import React from 'react';
import map from 'lodash/map';
import './index.css';

const Tabs = (props) => (
  <div className="tabs">
    {map(props.tabs, (tab) => (
      <button
        key={tab.name}
        style={tab.name === props.selectedTabName ? { background: 'purple' } : {}}
        onClick={() => props.onClickHandler(tab)}
      >
        {tab.name}
      </button>
    ))}
  </div>
);

export default Tabs
