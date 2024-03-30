import styled from "styled-components/native";

const ProgressBarContainerStyle = styled.View`
  width: 100%;
  height: 15px;
  background-color: ${props => props.theme.color.levels.background};
  border-radius: 35px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProgressFillStyle = styled.View<{progress: any}>`
  height: 100%;
  background-color: ${props => props.theme.color.levels.progressBar};  
  width: ${({ progress }) => progress}%;
  opacity: ${({ progress }) => progress / 100};
  border-radius: 35px;
`;

const ProgressBar = ({ progress }: any) => {
    return (
        <ProgressBarContainerStyle>
          <ProgressFillStyle progress={progress} />
        </ProgressBarContainerStyle>
    );
};

export default ProgressBar;
