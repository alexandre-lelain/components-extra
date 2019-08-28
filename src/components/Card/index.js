import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import Actions from './components/Actions'

import isEmpty from 'utils/isEmpty'

const useStyles = makeStyles({
  media: {
    height: 200,
  },
})

const ExtraCard = ({ actions = [], className, description, image, onCardClick, title }) => {
  const classes = useStyles()

  return (
    <Card className={className}>
      <CardActionArea onClick={onCardClick}>
        {image && <CardMedia className={classes.media} image={image} title={title} />}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          {description && (
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      {!isEmpty(actions) && <Actions actions={actions} />}
    </Card>
  )
}

ExtraCard.propTypes = {
  /**
   * The Card's list of actions. The actions are displayed
   * and behave as links.
   */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  /**
   * The Card's description.
   */
  description: PropTypes.string,
  /**
   * The Card's image media.
   */
  image: PropTypes.string,
  /**
   * Function fired when the card is pressed or cliqued.
   */
  onCardClick: PropTypes.func,
  /**
   * The Card's title.
   */
  title: PropTypes.string.isRequired,
}

export default styled(ExtraCard)``
