import React, { PropsWithChildren } from "react";
import MuiModal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

type Props = PropsWithChildren & {
  title?: string | React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal: React.FC<Props> = ({ children, title, isOpen, onClose }) => {
  return (
    <MuiModal
      open={isOpen}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box className="rounded-lg absolute top-[50%] left-[50%] shadow -translate-x-1/2 -translate-y-1/2 bg-white max-h-[95vh] overflow-auto max-w-[95%] w-[70rem]">
        <div className="flex items-center justify-between sticky px-8 py-2 top-0 z-10 bg-white">
          {title &&
            (typeof title === "string" ? (
              <div className="flex-1 max-w-[calc(100%-4rem)]">
                <h4 className="font-bold text-lg">{title}</h4>
              </div>
            ) : (
              title
            ))}
          <div
            className="w-12 text-gray-800 hover:text-gray-600 transition-all cursor-pointer p-3"
            onClick={onClose}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="px-8 py-4">{children}</div>
      </Box>
    </MuiModal>
  );
};

export default Modal;
