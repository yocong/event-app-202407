import React, { useState } from 'react';
import styles from './SignUpForm.module.scss';
import EmailInput from './EmailInput';
import VerificationInput from './VerificationInput';
import ProgressBar from '../ProgressBar';

const SignUpForm = () => {

  // 현재 몇 단계가 진행되고 있는지
  const [step, setStep] = useState(1);

  // 단계가 성공적으로 완료되었는지
  const [success, setSuccess] = useState(false);

  // 이메일 중복확인이 끝났을 때 호출될 함수
  // -> 상향식 전달을 위해 함수를 EmailInput로 내려줌 
  const emailSuccessHandler = () => {

    setSuccess(true);

    setTimeout(() => {
      setStep(2);
      setSuccess(false);
    }, 1500);
  };

  // 이메일 중복확인 (EmailInput)가 끝나게 되면 step을 2로 바꾸어
  // 인증번호 입력창을 띄우게 함
  return (
    <div className={styles.signupForm}>
      <div className={styles.formStepActive}>
        
        {step === 1 && <EmailInput onSuccess={emailSuccessHandler}/>}

        {step === 2 && <VerificationInput />}

        {success && <ProgressBar />}
      </div>
    </div>
  );
};

export default SignUpForm;
