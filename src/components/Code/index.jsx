import { useRef } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaCopy } from 'react-icons/fa';

import styles from './Code.module.css';

const Code = props => {
  const codeStringRef = useRef(props.codeString);

  const copyToClipboard = async text => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Erro ao copiar o texto: ', error);
    }
  };
  
  const copy = ref => {
    copyToClipboard(ref.current);

    toast.info('COPIADO');
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttons_container}>
          <div className={styles.button_red}></div>
          <div className={styles.button_yellow}></div>
          <div className={styles.button_green}></div>
        </div>

        <div className={styles.code_container}>
          <SyntaxHighlighter
            className={styles.sintax_highlighter}
            language="javascript"
            style={monokaiSublime}
            showLineNumbers
          >
            {props.codeString}
          </SyntaxHighlighter>

          <div className={styles.button_container}>
            <div onClick={() => copy(codeStringRef)} className={styles.button_copy}>
              <FaCopy />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
        transition={Zoom}
      />
    </>
  );
};

export default Code;
