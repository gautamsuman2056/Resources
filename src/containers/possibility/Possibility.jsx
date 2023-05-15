import React from 'react'
import './possibility.css';
import smilyImage from '../../assets/smiliy.png';
import cupImage from '../../assets/copy and tea.png';

const Possibility = () => {
  return (
    <div className='features__Highlight'>
     
      <div className='skew_feature'>
      
      <div className='features__Highlight-content'>
          <div className='insight_heading'>
           <p>BUSINESS INSIGHT HIGHLIGHT</p>
          </div>
          <div className='feature__heading-content'>
            <div className='features__heading'>
              <h1>Latest Business Insight
                  Highlight
              </h1>
            </div>
            <div className='feature__button'>
              <button>See All &gt; </button>
            </div>
          </div>
      </div>
      <div className='images'>
        <div>
          <img src={smilyImage} alt="" />
          <p>There are many variations of passages</p>
          <button className='button'>Read More &gt; </button>
        </div>

        <div>
          <img src={cupImage} alt="" />
          <p>Paxform will never share your data with anyone.</p>
          <button className='button'>Read More &gt; </button>

        </div>

        <div>
          <img src={smilyImage} alt="" />
          <p>There are many variations of passages</p>
          <button className='button'>Read More &gt; </button>

        </div>

        <div>
        <img src={smilyImage} alt="" />
          <p>Paxform will never share your data with anyone.</p>
          <button className='button'>Read More &gt; </button>
        </div>
      </div>
      </div>
     
    </div>
  )
}


export default Possibility
