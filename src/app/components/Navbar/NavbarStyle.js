import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
	liMaterial: {
		'background-image':props => props.bgImg && `url(${props.bgImg})`,
		'&:hover ':{
			'background-image':props => props.bgImg && `url(${props.bgImg})`,
		},
		'&:hover a':{
			color:props => props.color,
		}
	}
})