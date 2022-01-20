import React from "react";
import classes from "./NotesOfSleep.module.css";
import correctionNumber from "./notesOfSleepConst";

interface INotesOfSleep {
  num: number;
}

function styleNotes(num: number) {
  return {
    left: `${num + correctionNumber.LEFT_NUM}px`,
    animationDuration: `${
      num * correctionNumber.DURATION_MULTI + correctionNumber.DURATION_NUM
    }s`,
    fontSize: `${
      num * correctionNumber.FONT_SIZE_MULTI + correctionNumber.FONT_SIZE_NUM
    }px`,
    animationDelay: `${num * correctionNumber.ANIMATION_DELAY_MULTI}s`,
    top: `${num + correctionNumber.TOP_NUM}px`,
  };
}

const NotesOfSleep: React.FC<INotesOfSleep> = ({ num }) => (
  <>
    <div className= {classes.notes} style={styleNotes(num)}>
      &#9834;
    </div>
  </>
);

export default NotesOfSleep;
