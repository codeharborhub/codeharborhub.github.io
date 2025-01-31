import React from 'react';
import '../assets/BoxModelDiagram.css';

const BoxModelDiagram = () => {
  return (
    <div className="box-model-diagram">
      <div className="box-model-diagram__margin">
          Margin
          {/* Border */}
          <div className="box-model-diagram__border">
            Border
            {/* Padding */}
            <div className="box-model-diagram__padding">
              Padding
              {/* Content */}
              <div className="box-model-diagram__content">
                Content
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BoxModelDiagram;