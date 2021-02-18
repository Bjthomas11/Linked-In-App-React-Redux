import React, { useState } from "react";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import "./sideWidgets.css";

const SideWidgets = () => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const newsArticle = (heading, subtitle) => (
    <div className="article-container">
      <div className="left">
        <FiberManualRecordIcon className="icon" />
      </div>
      <div className="right">
        <p className="right-heading">{heading}</p>
        <p className="right-subtitle">{subtitle}</p>
      </div>
    </div>
  );
  return (
    <aside className="side-widgets-container">
      <div className="widgets-header">
        <p className="heading">LinkedIn News</p>

        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="left-start"
              title={
                <>
                  <p>
                    These are the day’s top professional news stories and
                    conversations. Learn more about how they’re selected.
                  </p>
                </>
              }
            >
              <InfoIcon className="info-icon" onClick={handleTooltipOpen} />
            </Tooltip>
          </div>
        </ClickAwayListener>
      </div>
      {newsArticle("test", "test")}
      {newsArticle("test2", "test2")}
      {newsArticle("test3", "test3")}
      {newsArticle("test4", "test4")}
      {newsArticle("test5", "test5")}
      {newsArticle("test6", "test6")}
      {newsArticle("test7", "test7")}
      <span className="more">Show More</span>
    </aside>
  );
};

export default SideWidgets;
