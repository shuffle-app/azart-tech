import React, { useState } from 'react';
import s from '@/styles/Quiz.module.css';
import t from '@/styles/Thanks.module.css';

import welcomePic from '../../../public/assets/images/6066.png';
import Image from 'next/image';
import { submitForm } from '@/api/utils/submitForm';

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({
    step2: '',
    step3: '',
    step4: '',
    step5: '',
    step6: '',
  });

  const nextStep = () => {
    setStep(step + 1);
    setSelectedOption(null); // reset selected option when moving to the next step
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionSelect = (option, stepName) => {
    setSelectedOption(option);
    setAnswers((prevAnswers) => ({ ...prevAnswers, [stepName]: option }));
  };

  const handleExit = () => setStep(false);

  const [form, setForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const clickButton = () => {
    setForm(!form);
    setSubmitted(false);
  };

  const handleBackClick = () => {
    setForm(false);
    setSubmitted(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;

    if (name === '') {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Email is not valid');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number is not valid');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (isValid) {
      // отправить данные формы, например:
      await submitForm({
        messages: Object.values(answers).join('; '),
        name,
        email,
        phone,
      });

      setName('');
      setEmail('');
      setPhone('');

      setSubmitted(true);
    }
  };

  return (
    <section>
      <div className={s.quiz_blocks}>
        {step === 0 && (
          <div className={s.quiz_block1}>
            <div className={s.quiz_start}>
              <div className={s.quizz_header}>
                <p>
                  Get 7 hours of work with the team for free by completing a
                  mini-quiz
                </p>
              </div>
              <div className={s.quizz_start_text}>
                <p>
                  After completing the quiz, you will receive a promo code for
                  free hours of interaction with the team. You will be able to
                  decide on your own in which directions to spend them
                </p>
              </div>
              <div className={s.welcomeImages}>
                <Image src={welcomePic} alt="" />
              </div>
              <button className={s.btn} onClick={nextStep}>
                Pass the quiz
              </button>
              <button onClick={handleExit} className={s.exit}>
                <img src="./assets/icons/menu-btn.svg" alt="" />
              </button>
            </div>
          </div>
        )}
        {step === 1 && (
          <div className={s.quiz_block}>
            <p className={s.text_header}>
              In which niche is the product development planned?
            </p>
            <div className={s.quiz_btn}>
              {[
                'FinTech',
                'E-comm',
                'Big Data Analysis',
                'HoReCa',
                'Entertainment',
              ].map((option) => (
                <button
                  key={option}
                  name="step2"
                  value={option}
                  onClick={() => handleOptionSelect(option, 'step2')}
                  className={
                    selectedOption === option ? s.selected : s.quiz_btns
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            <button className={s.btn} onClick={nextStep}>
              Next
            </button>
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
        {step === 2 && (
          <div className={s.quiz_block}>
            <p className={s.text_header}>
              Describe in a thesis what goals should/will your future digital
              development pursue?
            </p>
            <div className={s.input_container}>
              <textarea rows="5" placeholder="Enter text"></textarea>
            </div>
            <button className={s.btn} onClick={nextStep}>
              Next
            </button>
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
        {step === 3 && (
          <div className={s.quiz_block}>
            <p className={s.text_header}>
              In which region is the implementation planned?
            </p>
            <div className={s.input_container}>
              <textarea rows="5" placeholder="Enter text"></textarea>
            </div>
            <button className={s.btn} onClick={nextStep}>
              Next
            </button>
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
        {step === 4 && (
          <div className={s.quiz_block}>
            <p className={s.text_header}>
              During what period is the launch planned?
            </p>
            <div className={s.quiz_btn}>
              {[
                'As soon as possible',
                'Within a month',
                'Within three months',
                "It's hard to say",
              ].map((option) => (
                <button
                  key={option}
                  name="step2"
                  value={option}
                  onClick={() => handleOptionSelect(option, 'step2')}
                  className={
                    selectedOption === option ? s.selected4 : s.quiz_btns4
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            <button className={s.btn} onClick={nextStep}>
              Next
            </button>
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
        {step === 5 && (
          <div className={s.quiz_block}>
            <p className={s.text_header}>
              What budgets do you have to create a product?
            </p>
            <div className={s.quiz_btn}>
              {[
                'from 3000 USD to 5000 USD',
                'from 5001 USD to 8000 USD',
                'from 8001 USD to 10000 USD',
                'from 10001 USD and more',
              ].map((option) => (
                <button
                  key={option}
                  name="step2"
                  value={option}
                  onClick={() => handleOptionSelect(option, 'step2')}
                  className={
                    selectedOption === option ? s.selected4 : s.quiz_btns4
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            <button className={s.btn} onClick={nextStep}>
              Next
            </button>
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
        {step === 6 && (
          <div className={s.from_block}>
            <div className={t.form_header}>
              <h4>Thank you for completing the survey!</h4>
              <p>
                On the next page, we are already waiting for a promo code for 7
                free hours of interaction with the team. To receive, leave
                contact details for communication
              </p>
              <button onClick={handleExit}>
                <img src="./assets/icons/menu-btn.svg" alt="" />
              </button>
            </div>
            <form className={t.form} onSubmit={handleSubmit} noValidate>
              <div>
                {nameError && <p className="error">{nameError}</p>}
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                {emailError && <p className="error">{emailError}</p>}
                <input
                  type="email"
                  placeholder="eMail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {phoneError && <p className="error">{phoneError}</p>}
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  pattern="^\d{10}$"
                />
              </div>
              <button className={t.submit} onClick={nextStep} type="submit">
                Get a promo code
              </button>
              <div className={t.checkbox}>
                <input type="checkbox" required />
                <p>
                  I agree to the{' '}
                  <span
                    onClick={() =>
                      window.open('/privacy', { target: '_blank' })
                    }
                  >
                    terms of personal data processing
                  </span>
                </p>
              </div>
            </form>
          </div>
        )}
        {step === 7 && (
          <div className={s.promocode_block}>
            <h2>Here is your promocode!</h2>
            <p>
              You can download or send the file wherever it is convenient for
              you
            </p>
            <img className={s.gift} src="./assets/img/gift_front.svg" alt="" />
            <div className={s.promo_btns}>
              <a href="/assets/files/checklist.pdf" download>
                Download <img src="./assets/icons/download.svg" alt="" />
              </a>
              <button>
                Send <img src="./assets/icons/send.svg" alt="" />
              </button>
            </div>
            <div className={s.glow} />
            <button onClick={handleExit} className={s.exit}>
              <img src="./assets/icons/menu-btn.svg" alt="" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
