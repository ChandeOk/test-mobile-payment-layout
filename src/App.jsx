import { use, useEffect, useState } from 'react';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styled/Global';
import Container from './components/styled/Container.styled';
import Card from './components/Card';
import data from './data';
import Flex from './components/styled/Flex.styled';
import PaymentForm from './components/PaymentForm';
import testApiCall from './helper';
import Success from './components/styled/Success.styled';
const theme = {
  colors: {
    header: '#dae0f2',
  },
};

function App() {
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputAmount, setInputAmount] = useState(1);
  const [operator, setOperator] = useState('');
  const [formData, setFormData] = useState({});
  const [showMenu, setShowMenu] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  }, [showForm]);

  const [animationStart, setAnimationStart] = useState(false);
  const delay = () => {
    setTimeout(() => {
      setShowMenu(false);
      setAnimationStart(false);
      setShowForm(true);
    }, 1000);
  };
  const handleCardClick = (item) => {
    setOperator(item.name);
    setAnimationStart(true);
    delay();
  };

  const reset = () => {
    setInputAmount(1);
    setOperator('');
    setInputPhoneNumber('');
    setShowForm(false);
    setShowMenu(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        {showMenu && (
          <Container animationStart={animationStart}>
            <Flex>
              {data.map((item, i) => (
                <Card
                  key={i}
                  item={item}
                  handleCardClick={handleCardClick}
                  showMenu={showMenu}
                  setShowMenu={setShowMenu}
                  setOperator={setOperator}
                />
              ))}
            </Flex>
            {/* <Card /> */}
          </Container>
        )}
        {showForm && (
          <Container>
            <Flex>
              <PaymentForm
                testApiCall={testApiCall}
                setData={setFormData}
                operator={operator}
                inputPhoneNumber={inputPhoneNumber}
                setInputPhoneNumber={setInputPhoneNumber}
                inputAmount={inputAmount}
                setInputAmount={setInputAmount}
                setOperator={setOperator}
                reset={reset}
              />
            </Flex>
          </Container>
        )}
        {showSuccess && formData?.body && showMenu && (
          <Success>
            <p>Успешно!</p>
            <p>Сумма: {formData.body.amount}</p>
            <p>Номер: {formData.body.phone}</p>
          </Success>
        )}
      </>
    </ThemeProvider>
  );
}

export default App;
