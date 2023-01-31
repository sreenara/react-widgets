import React, { useRef } from 'react';
import { ButtonDialpad } from '@momentum-ui/react-collaboration';
import './NumberPad.scss';
import useWebexClasses from '../../hooks/useWebexClasses';
import { useGridFocus } from '../../hooks/useGridFocus';

const dialPadButtonTexts = [
  {
    value: '1',
    letters: undefined,
  },
  {
    value: '2',
    letters: 'ABC',
  },
  {
    value: '3',
    letters: 'DEF',
  },
  {
    value: '4',
    letters: 'GHI',
  },
  {
    value: '5',
    letters: 'JKL',
  },
  {
    value: '6',
    letters: 'MNO',
  },
  {
    value: '7',
    letters: 'PQRS',
  },
  {
    value: '8',
    letters: 'TUV',
  },
  {
    value: '9',
    letters: 'WXYZ',
  },
  {
    value: '*',
    letters: ',',
  },
  {
    value: '0',
    letters: '+',
  },
  {
    value: '#',
    letters: undefined,
  },
];

export interface INumPadProps {
  onButtonPress: (value: string) => void;
  disabled?: boolean;
}

/**
 * Number pad containing 0-9, #, and *.  Also contains sub-lettering
 *
 * @param {INumPadProps} props props for the NumberPad element
 * @param {Function} props.onButtonPress callback to be called whenever a button is pressed
 * @returns {React.Component} React component
 */
export const NumberPad = ({
  onButtonPress,
  disabled = false,
}: INumPadProps): JSX.Element => {
  const [cssClasses] = useWebexClasses('number-pad');
  const childrenRef = useRef<HTMLButtonElement[]>([]);
  const { setFocused, keyboardProps } =
    useGridFocus<HTMLButtonElement>(childrenRef);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={cssClasses} {...keyboardProps}>
      {dialPadButtonTexts.map(({ value, letters }, index) => (
        <ButtonDialpad
          key={value}
          primaryText={value}
          secondaryText={letters}
          size={64}
          onPress={() => onButtonPress(value)}
          ref={(ref: HTMLButtonElement) => {
            childrenRef.current[index] = ref;
          }}
          onFocus={() => setFocused(index)}
          disabled={disabled}
        />
      ))}
    </div>
  );
};