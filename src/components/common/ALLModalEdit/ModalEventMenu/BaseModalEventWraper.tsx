import React from "react";
import moment from "moment";
import getEventsChild from "../../../helpers/getEvemtsChild";
import ModalMenuButton from "../../Buttons/ModalMenuButton/ModalMenuButton";
import ModalEventMenu from "./ModalEventMenu";

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalEventWrapper: React.FC<BaseModalWrapperProps> = ({
  onBackdropClick,
  isModalVisible,
}) => {
  if (!isModalVisible) {
    return null;
  }
  const eventsEat = getEventsChild("Кормление");
  const eventsActivity = getEventsChild("Активность");
  const eventsSleep = getEventsChild("Сон");
  const eventsWalk = getEventsChild("Прогулка");

  return (
    <ModalEventMenu onBackdropClick={onBackdropClick}>
      <div className="desktop-modal-container modal-container">
        <div className="buttons-container">
          <ModalMenuButton eventName="Кормление">
            <div className="modal-content">
              <div className="button-icon"></div>
              <div className="button-text-container">
                <div style={{ fontWeight: "bold" }}>Приём пищи</div>
                <div>
                  {moment(
                    eventsEat?.sort(
                      (a, b) =>
                        Date.parse(b.startTime) - Date.parse(a.startTime),
                    )[0].endTime,
                  ).fromNow()}
                </div>
              </div>
              <div className="button-line"></div>
              <div className="button-plus-container">+</div>
            </div>
          </ModalMenuButton>
          <ModalMenuButton eventName="Активность">
            <div className="modal-content">
              <div
                style={{ background: "#4AA7F1" }}
                className="button-icon"
              ></div>
              <div className="button-text-container">
                <div style={{ fontWeight: "bold" }}>Активность</div>
                {eventsActivity?.length && eventsActivity?.length > 0
                  ? moment(
                      eventsActivity?.sort(
                        (a, b) =>
                          Date.parse(b.startTime) - Date.parse(a.startTime),
                      )[0].endTime,
                    ).fromNow()
                  : ""}
              </div>
              <div className="button-line"></div>
              <div
                style={{ border: "4px solid #4AA7F1", color: "#4AA7F1" }}
                className="button-plus-container"
              >
                +
              </div>
            </div>
          </ModalMenuButton>
          <ModalMenuButton eventName="Сон">
            <div className="modal-content">
              <div
                style={{ background: "#C476BC" }}
                className="button-icon"
              ></div>
              <div className="button-text-container">
                <div style={{ fontWeight: "bold" }}>Сон</div>
                {moment(
                  eventsSleep?.sort(
                    (a, b) => Date.parse(b.startTime) - Date.parse(a.startTime),
                  )[0].endTime,
                ).fromNow()}
              </div>
              <div className="button-line"></div>
              <div
                style={{ border: "4px solid #C476BC", color: "#C476BC" }}
                className="button-plus-container"
              >
                +
              </div>
            </div>
          </ModalMenuButton>
          <ModalMenuButton eventName="Прогулка">
            <div className="modal-content">
              <div
                style={{ background: "#BEDC0E" }}
                className="button-icon"
              ></div>
              <div className="button-text-container">
                <div style={{ fontWeight: "bold" }}>Прогулка</div>
                {moment(
                  eventsWalk?.sort(
                    (a, b) => Date.parse(b.startTime) - Date.parse(a.startTime),
                  )[0].endTime,
                ).fromNow()}
              </div>
              <div className="button-line"></div>
              <div
                style={{ border: "4px solid #BEDC0E", color: "#BEDC0E" }}
                className="button-plus-container"
              >
                +
              </div>
            </div>
          </ModalMenuButton>
        </div>
      </div>
    </ModalEventMenu>
  );
};

export default BaseModalEventWrapper;
