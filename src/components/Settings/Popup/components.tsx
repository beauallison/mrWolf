import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? 'grid' : 'none')};
  grid-template-columns: 50% 50%;
  grid-gap: 30px;

  width: 600px;
  min-height: 330px;

  right: 5%;

  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 3%;

  padding: 30px;
`;

export const SettingsLeft = styled.div``;

export const SettingsRight = styled.div`
  margin-right: 20px;
`;

export const Text = styled.p`
  color: ${(props) => props.theme.colors.onSurface};
`;

export const Title = styled(Text)`
  font-family: 'Metropolis';
  margin-left: 2px;
  margin-bottom: 5px;
`;

export const TitleBold = styled(Title)`
  font-size: 18px;
  font-weight: 600;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingContainer = styled.div`
  margin-top: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExtensionLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
`;

export const GithubLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
`;
