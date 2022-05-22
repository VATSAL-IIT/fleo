import React from 'react';
import { useCallback, useState } from 'react';
import { FileNode } from '../data';
import { Button, Card, ProgressBar } from 'react-bootstrap';

const TreeNode = ({ id, totalSales, targetSales, children }: FileNode) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren])
  const percentageSales = Math.floor((totalSales / targetSales) * 100);
  var progressClass; var progressText;
  if (percentageSales <= 33) {
    progressClass = "redProgress";
    progressText = "At risk";
  }
  else if (percentageSales <= 66 && percentageSales > 33) {
    progressClass = "yellowProgress";
    progressText = "off track";
  }
  else {
    progressClass = "greenProgress";
    progressText = "on track";
  }

  console.log(percentageSales)
  return (
    <div>
      <Card className="cards">
        <Card.Body>
          <span className="pic arrow-down"></span>
          <div className="header-section">
            <h2 className="cardTitle">{id}</h2>
            <h2 className="percentage">{percentageSales}</h2>
          </div>
          <div className="mid-section">
            <Card.Text className="cardContent">
              <h4>Total Sales : {totalSales}</h4>
              <h4>Target Sales : {targetSales}</h4>
            </Card.Text>
            <div className={`${progressClass} status`}>{progressText}</div>
          </div>
          <Button variant="primary" className="btn" onClick={handleClick}>View More</Button>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', paddingLeft: 25 }}>
            {showChildren && (children ?? []).map((node: FileNode) => <TreeNode {...node} />)}
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TreeNode