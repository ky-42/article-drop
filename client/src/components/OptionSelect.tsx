// A simple option select component that allows users to choose between different options

import styled from "styled-components";

const OptionSelectContainer = styled.div`
  display: flex;
  border: ${(props) => props.theme.border.borderWidth} solid
    ${(props) => props.theme.colors.lightAccent};
  border-radius: ${(props) => props.theme.border.borderRadius};
`;

const SelectableButton = styled.button<{ selected: boolean }>`
  margin: ${(props) => props.theme.spacing.xs};
  padding: ${(props) => props.theme.spacing.md};
  font-size: ${(props) => props.theme.textSize.md};
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.lightAccent
      : props.theme.colors.primary};
  border-radius: ${(props) => props.theme.border.borderRadius};

  &:hover {
    cursor: pointer;
  }
`;

// Generics used for type safety for the options and selected option
interface OptionSelectProps<T extends string> {
  options: T[];
  selectedOption: T;
  setSelectedOption: (option: T) => void;
}

const OptionSelect = <T extends string>({
  options,
  selectedOption,
  setSelectedOption,
}: OptionSelectProps<T>) => {
  return (
    <OptionSelectContainer>
      {options.map((option) => (
        <SelectableButton
          key={option}
          selected={selectedOption === option}
          onClick={() => {
            setSelectedOption(option);
          }}
        >
          {option}
        </SelectableButton>
      ))}
    </OptionSelectContainer>
  );
};

export default OptionSelect;
