import React from "react";
//material ui//
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const PortCard = (props) => {
    console.log(props);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { name, GitHub_Link, Url, description, portfolioImage, heading1, heading2, heading3, para1, para2, para3 } = props.props
    return (
        <Card className={classes.root}>
            <CardHeader
                title={name}
            />
            <CardMedia
                className={classes.media}
                image={portfolioImage}
                title={description}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <strong>{description}</strong>
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="GitHub Link">
                    <a href={GitHub_Link} target="_blank"><GitHubIcon /></a>
                </IconButton>
                <IconButton aria-label={Url}>
                    <a href={Url} target="_blank"><LinkIcon /></a>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{heading1 ? heading1 : null}</Typography>
                    <Typography paragraph>
                        {para1 ? para1 : null}
                    </Typography>
                    <Typography paragraph>
                        {heading2 ? heading2 : null}
                    </Typography>
                    <Typography paragraph>
                        {para2 ? para2 : null}
                    </Typography>
                    <Typography paragraph>
                       {heading3 ? heading3 : null}
                    </Typography>
                    <Typography paragraph>
                       {para3 ? para3 : null}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default PortCard;