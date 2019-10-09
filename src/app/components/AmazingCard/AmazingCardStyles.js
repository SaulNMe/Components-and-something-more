import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	msCard: {
		backgroundColor: props => props.bgColor
	},
	msCardHeader: {
		color: props => props.color
	},
	msCardBody: {
		color: props => props.color,
		opacity: 0.8
	}
})