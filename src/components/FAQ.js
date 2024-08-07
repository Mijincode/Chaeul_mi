import React from "react";
import { withTranslation } from "react-google-multi-lang";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Ensure this file is correctly imported

const FAQ = () => {
  return (
    <div className="faq-container">
      <h3 className="text-uppercase fw-bold mb-4">자주 묻는 질문</h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Q: 시술하러 갈 때 화장을 지우고 가야 하나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 네, 시술을 받기 전에 화장을 지우는 것이 좋습니다. 화장품이 남아
            있으면 시술 부위의 상태를 정확히 평가하기 어려울 수 있으며, 원하는
            결과를 얻기 어려울 수 있습니다. 또한, 화장품 잔여물로 인해 시술 후
            피부 반응이나 회복에 영향을 줄 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Q: 예약 시 필요한 준비물이 있나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 예약 시 특별한 준비물은 필요하지 않습니다. 다만, 시술 전에는
            화장을 지우고, 시술 당일에는 피부 상태가 깨끗한지 확인하는 것이
            좋습니다. 또한, 시술에 대한 자세한 정보나 주의사항은 사전에
            확인하시는 것이 좋습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Q: 시술 후 주의사항은 무엇인가요?</Accordion.Header>
          <Accordion.Body>
            A: 시술 후에는 다음과 같은 주의사항을 지키는 것이 중요합니다: 화장품
            사용 자제, 피부 보호, 청결 유지, 전문가의 지침 따르기.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Q: 시술 후 통증이나 불편함이 있을까요?
          </Accordion.Header>
          <Accordion.Body>
            A: 시술 후에는 약간의 통증이나 불편함이 있을 수 있습니다. 이는
            개인의 피부 상태나 시술의 범위에 따라 다를 수 있으며, 일반적으로
            시간이 지남에 따라 감소합니다. 만약 통증이 심하거나 이상한 증상이
            나타난다면, 즉시 시술한 전문가에게 상담하는 것이 좋습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Q: 시술 후 몇 일 동안 결과를 볼 수 있나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 시술 후 결과는 개인의 피부 상태와 시술 종류에 따라 다를 수
            있지만, 일반적으로 1주일 이내에 시술 결과를 확인할 수 있습니다.
            초기에는 색상이나 형태가 다를 수 있으며, 시간이 지나면서 자연스러운
            결과를 확인할 수 있습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            Q: 리터치 시기와 비용은 어떻게 되나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 리터치 시기는 개인의 피부 상태와 시술에 따라 다를 수 있으며,
            일반적으로 첫 시술 후 4~8주 사이에 진행됩니다. 비용은 시술 종류와
            전문 클리닉에 따라 다르며, 초기 시술 시 리터치 비용이 포함된
            패키지를 제공하는 경우도 있습니다. 자세한 비용은 전문가와 상담 후
            확인하는 것이 좋습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            Q: 리터치 시 통증이나 부작용이 있나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 리터치 시 통증은 개인의 피부 상태에 따라 다를 수 있으며,
            일반적으로 첫 시술보다 통증이 덜할 수 있습니다. 시술 후에는 약간의
            붓기나 통증이 있을 수 있지만, 이는 보통 일시적이며 시간이 지남에
            따라 감소합니다. 부작용이 걱정된다면 사전에 전문가와 상담하여 조치를
            취하는 것이 좋습니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            Q: 리터치 후 관리 방법은 무엇인가요?
          </Accordion.Header>
          <Accordion.Body>
            A: 리터치 후에는 시술 부위를 청결하게 유지하고, 화장품 사용을
            자제하며, 직사광선에 노출되지 않도록 주의해야 합니다. 전문가가
            제공하는 후속 관리 지침을 따르는 것이 중요하며, 시술 후 1~2주간은
            특히 주의가 필요합니다.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>
            Q: 리터치를 받지 않으면 어떻게 되나요?
          </Accordion.Header>
          <Accordion.Body>
            A: 리터치를 받지 않으면 시간이 지남에 따라 시술 결과가 자연스럽게
            변화할 수 있습니다. 원하지 않는 색상 변화나 형태의 변화가 있을 수
            있으며, 리터치가 필요한 경우 시술 결과가 덜 만족스러울 수 있습니다.
            시술 후 전문가의 조언에 따라 리터치 여부를 결정하는 것이 좋습니다.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default withTranslation(FAQ);
