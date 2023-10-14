import { useEffect, useState } from 'react';

import { Col, Form, Row } from 'react-bootstrap';

import styles from './InputCode.module.css';
import Code from '../Code';

const InputCode = () => {
  const [textareaCode, setTextareaCode] = useState('');

  const handleTextareaCode = e => setTextareaCode(e.target.value);

  useEffect(() => {
    console.log(textareaCode);
  }, [textareaCode]);

  return (
    <>
      <Row>
        <Col sm={12}>
          <Form.Group controlId="textareaCode" className="mt-4">
            <Form.Label>Digite o código:</Form.Label>
            <Form.Control
              className={styles.textarea}
              as="textarea"
              rows={5}
              name="textareaCode"
              onChange={e => handleTextareaCode(e)}
              spellcheck="false"
            />
          </Form.Group>
        </Col>
      </Row>

      <Code codeString={textareaCode} />
    </>
  );
};

export default InputCode;
