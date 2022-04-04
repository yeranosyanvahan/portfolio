import React from 'react';
import {Link} from 'react-router-dom';

function Work()
{
  return  <div className="content centered">
    <div className="work">
      <div className="text">
      <h1>PERFECT MINESWEEPER AI VISUALIZATION</h1>

      <p>If you have ever played Minesweeper there's a good chance that you have bumped into situation where there is no obvious solution. The Minesweeper is actually game of luck, which means that even the best players have to guess in some situations to win the game. In order to take the best guess one must know the probability of bombs in each and every tile. So I have decided to build up a visualization of what would perfect minesweeper AI see.
      </p>
      <div>
      <img src="./Images/Minesweeper/Minesweeper.png" alt="Perfect Minesweeper AI"/>
      </div>
      <p> Here is the demo of visualization. The green one indicate that the probabilty of being a bomb in the area is low. And the red means high probability. So having AI click on the lowest probability of being a bomb would yield the PERFECT MINESWEEPER AI</p>

      </div>
    </div>

  </div>
}

export default Work;
