import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

import styles from './index.module.scss'
import img from 'assets/1.webp'

type ModalProps = {
  width?: number
  height?: number
  enableMaskClick?: boolean
  title: string
  children: React.ReactNode | React.ReactElement
  onClose?: () => void
  handleMask?: () => void
}

const Modal = ({
  width = 480,
  height = 600,
  title = '',
  children,
  enableMaskClick = false,
  onClose = () => void 0,
  handleMask = () => void 0
}: ModalProps) => {
    return (
      <>
        <div className={styles.mask} onClick={handleMask}></div>
        <div className={styles.body} style={{width: `${width}px`, height: `${height}px`}}>
          <h3>{title}</h3>
          {children}
          <Image src={img} alt="close" width={30} height={30} onClick={onClose}/>
        </div>
      </>
    )
};

export default Modal