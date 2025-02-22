import { DataItemType } from "@/@types";
import React, { memo } from "react";
import Modal from "../Modal";

type Props = {
  data: DataItemType | null;
  isOpen: boolean;
  onClose: () => void;
};

const DetailModal: React.FC<Props> = ({ isOpen, data, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="جزئیات خبر">
      <h4 className="text-xl font-semibold mb-4">{data?.title}</h4>
      <div dangerouslySetInnerHTML={{ __html: data?.content || "" }} />
      <ul className="flex flex-col gap-2 justify-start">
        <li className="flex items-center gap-2">
          <span className="w-28 block">خبرگزاری:</span>
          <strong className="dir-ltr">{data?.news_agency_name}</strong>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-28 block">تاریخ خبر:</span>
          <strong className="dir-ltr">{data?.published_at}</strong>
        </li>
      </ul>
    </Modal>
  );
};

export default memo(DetailModal);
