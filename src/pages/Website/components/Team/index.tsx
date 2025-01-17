import React from 'react'
import styled from 'styled-components'
import { Flex, Text, Heading } from '@sparkpointio/sparkswap-uikit'
import TeamData from './config';
import { Title } from '../Elements'
import { TeamType } from './types';
import PageSection from '../styles/Layout'
import { breakpoints } from '../styles/Layout/Breakpoints'

const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledSubHeading = styled(Text)`
 color: #39BEEC;
 @media screen and (max-width: ${breakpoints.Mobile.l}px) {
  margin-bottom: 30px;
}
`

const StyledImage = styled.img`
  border: solid;
  border-color: #39BEEC;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  padding: 10px;
  @media screen and (max-width: ${breakpoints.Mobile.l}px) {
    width: 250px;
    height: 250px;
    margin: auto;
  }
  margin: 8px;
`

const CustomHeading = styled(Heading)`
  font-family: 'Quatro';
  font-weight: bold;
`

const TeamContainer = ({ name, image, position }: TeamType) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="space-between" style={{ rowGap: '14px' }}>
      <StyledImage src={`${process.env.PUBLIC_URL}/images/Website/Team/${image}.jpg`} />
      <CustomHeading size="lg">{name}</CustomHeading>
      <StyledSubHeading>{position}</StyledSubHeading>
    </Flex>
  );
};

const Team: React.FC = () => {
  return (
    <PageSection direction='column' background='#141C27' padding='4em 0em 8em 0em'>
      <div id="team">
      <Title value="MEET THE TEAM" />
      <Wrapper>
        {TeamData.map((item) => {
          return <TeamContainer key={item.image} image={item.image} name={item.name} position={item.position}/>;
        })};
      </Wrapper>
      </div>
    </PageSection>
  )
}

export default Team
