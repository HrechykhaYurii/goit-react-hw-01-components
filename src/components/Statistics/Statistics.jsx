import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  ListItem,
  Label,
  Percent,
} from './Statistics.styled';


export const Statistics = ({title, stats}) => {
return (
<Container>
    {title && <Title>{title}</Title>}
    <List key={stats.id}>
        {stats.map(stat => {
            return <ListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Percent>%{stat.percentage}</Percent>
            </ListItem>
        })}
    </List>
</Container>
);
}

Statistics.propTypes = {
title: PropTypes.string,
stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
    })) 
};