import { forwardRef, FunctionComponent, useState } from 'react';
import styled from 'styled-components';

import { Button, ButtonProps } from '../Button';
import { Input, InputProps } from '../Input';

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  input[type='file'] {
    display: none;
  }
`;

export interface FileProps extends InputProps {
  /**
   * 預設顯示的檔案名稱
   */
  defaultFileName?: string;
  /**
   * 按鈕文字
   */
  buttonText?: string;
  /**
   * 客製化按鈕樣式，與 Button Component 相同
   */
  buttonProps?: ButtonProps;
  /**
   * 等待狀態
   */
  loading?: boolean;
}

export const File: FunctionComponent<FileProps> = forwardRef<
  HTMLInputElement,
  FileProps
>(
  (
    {
      name,
      accept,
      onBlur,
      onChange,
      disabled,
      defaultFileName = '',
      buttonText,
      buttonProps,
      loading,
      ...props
    },
    ref,
  ) => {
    const [fileName, setFileName] = useState(defaultFileName);
    const buttonContent = () => {
      if (loading) {
        return 'Loading...';
      }
      return buttonText ? buttonText : 'Browser File';
    };

    return (
      <StyledWrapper>
        <Input readOnly value={fileName} disabled={disabled} {...props} />
        {!disabled && (
          <Button ml={10} as="label" {...buttonProps}>
            {buttonContent()}
            <input
              type="file"
              name={name}
              accept={accept}
              ref={ref}
              onBlur={onBlur}
              onChange={(e) => {
                if (onChange) onChange(e);
                const file = e.target.files?.[0];
                setFileName(file?.name || '');
              }}
              disabled={disabled}
            />
          </Button>
        )}
      </StyledWrapper>
    );
  },
);
