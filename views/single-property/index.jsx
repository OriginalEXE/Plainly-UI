import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import * as Styled from './style';
import theme from '../../css/theme';

const SinglePropertyView = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.Header>
          <Styled.HeaderTitle
            variant="h3"
            component="h1"
          >
            Furnished flat in Friedrischein
          </Styled.HeaderTitle>
          <Styled.HeaderAddress
            variant="h5"
            component="h2"
          >
            Proskauer Strasse 3, 10247 Berlin
          </Styled.HeaderAddress>
        </Styled.Header>
        <Styled.Grid>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                Lease Terms
              </Typography>
              <Styled.Rent
                variant="h4"
              >
                1.199 € <Styled.RentDetails component="span">(952 € + 247 €)</Styled.RentDetails>
              </Styled.Rent>
              <List>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'calendar-alt']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Available from 11.05.2019"
                  />
                </ListItem>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'money-check-alt']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Requires deposit of 2.856 €"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
              >
                Details
              </Typography>
              <List>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'expand-alt']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="55,45 m²"
                  />
                </ListItem>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'th']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="2 rooms"
                  />
                </ListItem>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'sort']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="3rd floor"
                  />
                </ListItem>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'couch']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Unfurnished"
                  />
                </ListItem>
                <ListItem button disableGutters>
                  <ListItemAvatar>
                    <Avatar style={{ backgroundColor: theme.palette.secondary.light }}>
                      <FontAwesomeIcon icon={['fas', 'sort-numeric-up']} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="No elevator"
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button size="small">
                Add details
              </Button>
            </CardActions>
          </Card>
        </Styled.Grid>
      </Container>
    </Styled.Wrapper>
  );
};

SinglePropertyView.displayName = 'SinglePropertyView';

export default SinglePropertyView;
