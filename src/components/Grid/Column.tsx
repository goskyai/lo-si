import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { compose, flex, FlexProps, width, WidthProps } from 'styled-system';

import { GridType, maxGridColumns } from '../../assets/theme/global';
import { exceptionList } from '../../utils/styled/exceptionList';

const gridGenerator = (cols: Array<GridType | undefined>) => {
  return cols.map((colNum) => {
    if (typeof colNum === 'boolean') {
      return colNum === true ? { flex: '1 0 0%', width: '100%' } : null;
    } else if (typeof colNum === 'number') {
      return {
        flex: '0 0 auto',
        width: `${(colNum / maxGridColumns) * 100}%`,
      };
    }
    return null;
  });
};

interface StyledColumnProps extends FlexProps, WidthProps {}

const StyledColumn = styled.div.withConfig<StyledColumnProps>({
  shouldForwardProp: (prop, validator) =>
    !exceptionList.includes(prop) && validator(prop),
})`
  box-sizing: border-box;
  ${compose(flex, width)}
`;

export interface ColumnProps {
  /**
   * 預設網格大小。
   *
   * `true` 表示平均分配網格大小，`{number}` 表示佔 12 網格中幾格。
   */
  col?: GridType;
  /** Breakpoint 對應 xs 要佔多少網格。 */
  colXs?: GridType;
  /** Breakpoint 對應 sm 要佔多少網格。 */
  colSm?: GridType;
  /** Breakpoint 對應 md 要佔多少網格。 */
  colMd?: GridType;
  /** Breakpoint 對應 lg 要佔多少網格。 */
  colLg?: GridType;
  /** Breakpoint 對應 xl 要佔多少網格。 */
  colXl?: GridType;
}

export const Column: FunctionComponent<ColumnProps> = ({
  col,
  colXs,
  colSm,
  colMd,
  colLg,
  colXl,
  children,
  ...props
}) => {
  const gridProps = gridGenerator([col, colXs, colSm, colMd, colLg, colXl]);
  const flexProps = gridProps.map((val) => val?.flex || null);
  const widthProps = gridProps.map((val) => val?.width || null);
  return (
    <StyledColumn flex={flexProps} width={widthProps} {...props}>
      {children}
    </StyledColumn>
  );
};
