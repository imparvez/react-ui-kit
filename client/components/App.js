import React from 'react';
import Button from './Button';
import Title from './Title';
import Cards from './Cards';
import CardContent from './Cards/CardContent';
import CardHeader from './Cards/CardHeader';
import CardHeaderTitle from './Cards/CardHeaderTitle';
import CardHeaderIcon from './Cards/CardHeaderIcon';
import CardImage from './Cards/CardImage';
import Image from './Image';
import CardFooter from './Cards/CardFooter';
import CardFooterItem from './Cards/CardFooterItem';
import Input from './Form/Input';
import Label from './Label'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Button 
        	color="isWhite"
			buttonStyle="isInverted"
			state="isLoading"
			className="test-button"
        >
        	White
        </Button>
        <Title size="is4">Title</Title>
        <Cards>
	        <CardHeader>
				<CardImage>
					<Image src="http://placehold.it/300x225" ratio="is4By3"/>
				</CardImage>
				<CardHeaderTitle>
			    	Component
			    </CardHeaderTitle>
			    <CardHeaderIcon icon="fa fa-angle-down" />
	        </CardHeader>
	        <CardContent>
		    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
		    	<small>11:09 PM - 1 Jan 2016</small>
			</CardContent>
			<CardFooter>
				<CardFooterItem>Save</CardFooterItem>
				<CardFooterItem>Edit</CardFooterItem>
				<CardFooterItem>Delete</CardFooterItem>
			</CardFooter>
		</Cards>

		<Cards isFullwidth>
			<CardHeader>
				<CardHeaderTitle>
					Component
				</CardHeaderTitle>
				<CardHeaderIcon icon="fa fa-angle-down" />
			</CardHeader>
			<CardContent>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
				<small>11:09 PM - 1 Jan 2016</small>
			</CardContent>
			<CardFooter>
				<CardFooterItem>Save</CardFooterItem>
				<CardFooterItem>Edit</CardFooterItem>
				<CardFooterItem>Delete</CardFooterItem>
			</CardFooter>
		</Cards>
		<Label>Basic Input Tag</Label>
		<Input type="text" placeholder="Text input" />
		<Input 
			type="text" 
			placeholder="Text input" 
			color="isSuccess"
			type="text"
			defaultValue="eg: parvez shaikh"
			name="first name"
			readOnly={false}
			help={{
				color: 'isSuccess',
				text: 'This username is available',
		    }}
		    state="isActive"
		    icon="fa fa-check"
		    hasIcon
		    isExpanded
		/>
		<Input
			color="isDanger"
			type="text"
			placeholder="Email input"
			defaultValue="hello@"
			icon="fa fa-warning"
			hasIconRight
			help={{
				color: 'isDanger',
				text: 'This email is invalid',
			}}
		/>
      </div>);
  }
}

