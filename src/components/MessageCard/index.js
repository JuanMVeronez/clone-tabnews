import { useState } from 'react';
import {
  container,
  content,
  title,
  actionContainer,
  actionButton,
  warnActionButton
} from './style.module.css';

export default function MessageCard() {
  const [count, setCount] = useState(0);
  const addCount = () => setCount(prev => prev + 1);

  const texts = [
    {
      title: 'Bruna, eu te amo muitooo!',
      success: 'Você é meu amorzinho',
      good: 'Também te amo',
      bad: 'Sinto algo diferente...',
    },
    {
      title: 'Puts... mas eu te acho bem legal 🥲',
      success: 'Então continua sendo meu bb',
      good: 'Eu gosto muito de você',
      bad: 'Acho que não é isso...',
    },
    {
      title: 'Achou que ia escapar? Vaii admite que me amaaa',
      success: 'Você é chata, mas te amo do seu jeitinho',
      good: 'É verdade, eu te amo',
    },
  ];

  const showResponse = () => alert(texts[count].success);

  return (
    <main className={container}>
      <div className={content}>
        <strong className={title}>{texts[count].title}</strong>
        <div className={actionContainer}>
          {count < 2 && (
            <button
              onClick={addCount}
              className={`${actionButton} ${warnActionButton}`}
            >{texts[count].bad}</button>
          )}
          <button
            onClick={showResponse}
            className={actionButton}
          >{texts[count].good}<span>🥰</span></button>
        </div>
      </div>
    </main>
  );
}
