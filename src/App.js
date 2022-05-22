import React, { useCallback, useState } from 'react';
import './App.css';
import { FileNode, root } from './data.tsx';
import { Card, Button ,ProgressBar} from 'react-bootstrap'
import TreeNode from './Components/TreeNode.tsx';
function App() {
  return (
    <div className="App">
      <TreeNode {...root}/>
    </div>
  );
}

export default App;