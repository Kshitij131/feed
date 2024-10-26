import React,{useState} from 'react';

function KannadaLearning() {
  // Data for vowels, consonants, and numbers
  const vowels = [
    { english: 'a', kannada: 'ಅ' },
    { english: 'aa', kannada: 'ಆ' },
    { english: 'i', kannada: 'ಇ' },
    { english: 'ee', kannada: 'ಈ' },
    { english: 'u', kannada: 'ಉ' },
    { english: 'oo', kannada: 'ಊ' },
    { english: 'e', kannada: 'ಎ' },
    { english: 'ee', kannada: 'ಏ' },
    { english: 'ai', kannada: 'ಐ' },
    { english: 'o', kannada: 'ಒ' },
    { english: 'oo', kannada: 'ಓ' },
    { english: 'au', kannada: 'ಔ' },
    { english: 'am', kannada: 'ಅಂ' },
    { english: 'aha', kannada: 'ಅಃ' },
  ];

  const consonants = [
    { english: 'ka', kannada: 'ಕ' },
    { english: 'kha', kannada: 'ಖ' },
    { english: 'ga', kannada: 'ಗ' },
    { english: 'gha', kannada: 'ಘ' },
    { english: 'nga', kannada: 'ಙ' },
    { english: 'cha', kannada: 'ಚ' },
    { english: 'chha', kannada: 'ಛ' },
    { english: 'ja', kannada: 'ಜ' },
    { english: 'jha', kannada: 'ಝ' },
    { english: 'nya', kannada: 'ಞ' },
    { english: 'ta', kannada: 'ಟ' },
    { english: 'tha', kannada: 'ಠ' },
    { english: 'da', kannada: 'ಡ' },
    { english: 'dha', kannada: 'ಢ' },
    { english: 'na', kannada: 'ಣ' },
    { english: 'tha', kannada: 'ತ' },
    { english: 'thha', kannada: 'ಥ' },
    { english: 'da', kannada: 'ದ' },
    { english: 'dha', kannada: 'ಧ' },
    { english: 'na', kannada: 'ನ' },
    { english: 'pa', kannada: 'ಪ' },
    { english: 'pha', kannada: 'ಫ' },
    { english: 'ba', kannada: 'ಬ' },
    { english: 'bha', kannada: 'ಭ' },
    { english: 'ma', kannada: 'ಮ' },
    { english: 'ya', kannada: 'ಯ' },
    { english: 'ra', kannada: 'ರ' },
    { english: 'la', kannada: 'ಲ' },
    { english: 'va', kannada: 'ವ' },
    { english: 'sha', kannada: 'ಶ' },
    { english: 'sha', kannada: 'ಷ' },
    { english: 'sa', kannada: 'ಸ' },
    { english: 'ha', kannada: 'ಹ' },
    { english: 'la', kannada: 'ಳ' },
  ];

  const numbers = [
    { english: '0', kannada: '೦', word: { english: 'sunne', kannada: 'ಸೊನ್ನೆ' } }, 
    { english: '1', kannada: '೧', word: { english: 'ondu', kannada: 'ಒಂದು' } },
    { english: '2', kannada: '೨', word: { english: 'eraDu', kannada: 'ಎರಡು' } },
    { english: '3', kannada: '೩', word: { english: 'muuru', kannada: 'ಮೂರು' } },
    { english: '4', kannada: '೪', word: { english: 'naaLaku', kannada: 'ನಾಲ್ಕು' } },
    { english: '5', kannada: '೫', word: { english: 'aidu', kannada: 'ಐದು' } },
    { english: '6', kannada: '೬', word: { english: 'aaru', kannada: 'ಆರು' } },
    { english: '7', kannada: '೭', word: { english: 'elu', kannada: 'ಏಳು' } },
    { english: '8', kannada: '೮', word: { english: 'enTu', kannada: 'ಎಂಟು' } },
    { english: '9', kannada: '೯', word: { english: 'ombattu', kannada: 'ಒಂಬತ್ತು' } },
    { english: '10', kannada: '೧೦', word: { english: 'hattu', kannada: 'ಹತ್ತು' } },
    { english: '20', kannada: '೨೦', word: { english: 'Ippattu', kannada: 'ಇಪ್ಪತ್ತು' } },
    { english: '30', kannada: '೩೦', word: { english: 'moovattu', kannada: 'ಮೂವತ್ತು' } },
    { english: '40', kannada: '೪೦', word: { english: 'nalavattu', kannada: 'ನಲವತ್ತು' } },
    { english: '50', kannada: '೫೦', word: { english: 'aivattu', kannada: 'ಐವತ್ತು' } },
    { english: '60', kannada: '೬೦', word: { english: 'aravattu', kannada: 'ಅರವತ್ತು' } },
    { english: '70', kannada: '೭೦', word: { english: 'eppattu', kannada: 'ಎಪ್ಪತ್ತು' } },
    { english: '80', kannada: '೮೦', word: { english: 'embattu', kannada: 'ಎಂಬತ್ತು' } },
    { english: '90', kannada: '೯೦', word: { english: 'tombattu', kannada: 'ತೊಂಬತ್ತು' } },
    { english: '100', kannada: '೧೦೦', word: { english: 'nooru', kannada: 'ನೂರು' } }
  ];
  // Styles object
  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    title: {
      color: '#333',
      marginBottom: '30px',
      borderBottom: '2px solid #333',
      paddingBottom: '10px',
    },
    section: {
      marginBottom: '40px',
      backgroundColor: '#f5f5f5',
      padding: '20px',
      borderRadius: '10px',
    },
    gridContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '10px',
      margin: '20px 0',
    },
    box: {
      border: '1px solid #ccc',
      padding: '15px',
      width: 'auto',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
    },
    english: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '5px',
    },
    kannada: {
      fontSize: '24px',
      color: '#333',
      fontWeight: 'bold',
    },
    sectionTitle: {
      color: '#2c3e50',
      fontSize: '24px',
      marginBottom: '20px',
    }
  };

  // Hover effect function
  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
  };
  const [showEnglish, setShowEnglish] = useState(true);

  const handleEnglishClick = () => {
    setShowEnglish(true);
  };

  const handleKannadaClick = () => {
    setShowEnglish(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Balake Kannada (ಬಾಲ ಕಲಿಯಿರಿ)</h1>
      
      {/* Vowels Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Vowels (ಸ್ವರಗಳು)</h2>
        <div style={styles.gridContainer}>
          {vowels.map((vowel, index) => (
            <div
              key={index}
              style={styles.box}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <div style={styles.english}>{vowel.english}</div>
              <div style={styles.kannada}>{vowel.kannada}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Consonants Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Consonants (ವ್ಯಂಜನಗಳು)</h2>
        <div style={styles.gridContainer}>
          {consonants.map((consonant, index) => (
            <div
              key={index}
              style={styles.box}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <div style={styles.english}>{consonant.english}</div>
              <div style={styles.kannada}>{consonant.kannada}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Numbers (ಸಂಖ್ಯೆಗಳು)</h2>
        
        <div style={styles.gridContainer}>
          {numbers.map((number, index) => (
            <div
              key={index}
              style={styles.box}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <div style={styles.english}>{number.english}</div>
              <div style={styles.kannada}>{number.kannada}</div>
              <div style={styles.kannada}>{number.word.english}</div>
              <div style={styles.kannada}>{number.word.kannada}</div>
              
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default KannadaLearning;