import styled from "styled-components";

const color_primary = "#9e9e9e";
const color_hover = "#616161";
const color_focus = "#304ffe";
const color_error = "#c62828";
const color_disabled = "#c7c7c7";
const color_disabled_bkg = "#eeeeee";

export const InputContainer = styled.div`
  max-width: ${(props) => (props.fullWidth ? "100%" : "250px")};
  margin-top: 5px;
  margin-bottom: 5px;
  & div {
    display: flex;
    align-items: center;
    padding: ${(props) => {
      if (props.size === "sm") {
        return "10px 5px";
      }
      if (props.size === "md") {
        return "12px 10px";
      }
      if (props.size === "lg") {
        return "15px 12px";
      }
      return "12px 10px";
    }};
    background-color: ${(props) =>
      props.disabled ? color_disabled_bkg : "white"};
    border: ${(props) => {
      if (props.disabled) {
        return `1px solid ${color_disabled}`;
      }
      if (props.error) {
        return `1px solid ${color_error}`;
      }
      return `1px solid ${color_primary}`;
    }};
    border-radius: 10px;
    outline: none;
    & input {
      width: 100%;
      border: none;
      outline: none;
      background-color: ${(props) =>
        props.disabled ? color_disabled_bkg : "white"};
    }
    & textarea {
      border: none;
      outline: none;
      background-color: ${(props) =>
        props.disabled ? color_disabled_bkg : "white"};
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  & span:nth-child(1) {
    display: block;
    margin-bottom: 4px;
    color: ${(props) => {
      if (props.disabled) {
        return color_disabled;
      }
      if (props.error) {
        return color_error;
      }
      return color_primary;
    }};
    font-weight: 500;
  }
  & span:last-child {
    display: block;
    margin-top: 2px;
    font-size: 0.7rem;
    color: ${(props) => {
      if (props.disabled) {
        return color_disabled;
      }
      if (props.error) {
        return color_error;
      }
      return color_primary;
    }};
  }
  &:hover {
    & span {
      color: ${(props) => (props.disabled ? color_disabled : color_hover)};
    }
    & div {
      border: ${(props) =>
        props.disabled
          ? `1px solid ${color_disabled}`
          : `1px solid ${color_hover}`};
    }
  }
  &:focus-within {
    & span {
      color: ${(props) => {
        if (props.disabled) {
          return color_disabled;
        }
        if (props.error) {
          return color_error;
        }
        return color_focus;
      }};
    }
    & div {
      border: ${(props) => {
        if (props.disabled) {
          return `1px solid ${color_disabled}`;
        }
        if (props.error) {
          return `1px solid ${color_error}`;
        }
        return `1px solid ${color_focus}`;
      }};
    }
  }
`;
