import React, {useState} from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
 
    // setup step validators, will be called before proceeding to the next step
    const step2Validator = () => {
        // return a boolean
      }
       
      const step3Validator = () => {
        // return a boolean
      }
       
      const onFormSubmit = () => {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
      }
  
 

const Stepper = ({step1}) => {
    const step1Content = step1;
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;
    
    const [steps, setSteps] = useState([
        {
            label: 'Step 1',
            subtitle: '10%',
            name: 'step 1',
            content: step1Content
            },
            {
            label: 'Step 2',
            subtitle: '50%',
            name: 'step 2',
            content: step2Content,
            validator: step2Validator
            },
            {
            label: 'Step 3',
            subtitle: '100%',
            name: 'step 3',
            content: step3Content,
            validator: step3Validator
            }
    ])

   
     


    return(
        <StepProgressBar
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={steps}
        />
    )
}

export default Stepper;