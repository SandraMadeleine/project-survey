import React, { useState } from 'react';
import Start from './Components/start'
import Purchase from './Components/purchase'

export const App = () => {
  const [step, setStep] = useState(1)

  const [purchase, setPurchase] = useState('')
  return (
    <div className="outer-part">
      <div className="inner-part">
         Find me in src/app.js!
      </div>
    </div>
  );
}
