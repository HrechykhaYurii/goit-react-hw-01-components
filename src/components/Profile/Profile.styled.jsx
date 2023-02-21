import styled from "styled-components";

export const ProfileCard = styled.div`
  margin: 40px auto 0;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  background-color: #ffffff;
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.60);
`;

export const Description = styled.div`
  margin-bottom: 25px;
  text-align: center;
  color: #858585;
`;

export const Avatar = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  width: 150px;
  display: block;
  border-radius: 50%;
  box-shadow: inset 0 0 5px 5px rgba(0, 0, 0, 0.3);
`;

export const Name = styled.p`
  margin-bottom: 7px;
  font-size: 28px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 7px;
  font-size: 18px;
`;

export const Location = styled.p`
  font-size: 18px;
`;

export const StatsList = styled.ul`
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  border-radius: 10px;

  border: 2px solid #757578;
  background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333%;
  gap: 7px;
  
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;