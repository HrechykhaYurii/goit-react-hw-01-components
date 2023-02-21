import styled from 'styled-components';

export const Container = styled.section`
    width: 350px;
    text-align: center;
    margin: 0 auto;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.60);
`;

export const Title = styled.h2`
    margin: 0 auto;
    padding: 30px 0;
    width: 100%;
    background-color: white;
`;

export const List = styled.ul`
    display: flex;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

export const ListItem = styled.li`
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    flex-basis: calc((100% - 0px) / 5);
    padding: 15px;
    border: 1px solid gray;
    color: white;
    background-color: ${getRandomHexColor}aa;
`;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

export const Label = styled.span`
 margin-bottom: 5px;
`;

export const Percent = styled.span`
   font-size: 20px;
`;