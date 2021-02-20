import React, {useState} from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
 
    // setup step validators, will be called before proceeding to the next step
    const step2Validator = () => {
        return true
      }
       
      const step3Validator = () => {
        return true
      }
       
      const onFormSubmit = () => {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
      }
  
 

const Stepper = ({ step1, step2, step3, step4 }) => {
    const [redirect, setRedirect] = useState(false)
    const [params, setParams] = useState({
        resourceTypes: [],
        ageRange: "",
        isFemale: false,
        isVeteran: false,
        isDisabled: false
    })

    const step1Content = step1;
    const step2Content = step1;
    const step3Content = step1;

    const [steps] = useState([
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
        },
        {
            label: 'Step 4',
            subtitle: '100%',
            name: 'step 4',
            content: step3Content,
            validator: step3Validator
        }
    ])

    return(
        <StepProgressBar 
        startingStep={0}
        onSubmit={onFormSubmit}
        steps={steps}
        primaryBtnClass="btn btn-primary"
        secondaryBtnClass="btn btn-outline-secondary"
        />
    )
}

export default Stepper;