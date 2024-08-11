import React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const FAQS = () => {
  const { t } = useTranslation();

  return (
    <div className="faq-container">
      <h3 className="text-uppercase fw-bold mb-4">{t("faq.title")}</h3>
      <Accordion defaultActiveKey="0">
        {t("faq.items", { returnObjects: true }).map((item, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={index}
            className="mb-3"
          >
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQS;
