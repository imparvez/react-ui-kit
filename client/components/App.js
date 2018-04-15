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
import Label from './Label';

export default class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
      	<section className="section">
			<Button>Button</Button> 
			<Button color="isWhite">White</Button> 
			<Button color="isLight">Light</Button> 
			<Button color="isDark">Dark</Button> 
			<Button color="isBlack">Black</Button> 
			<Button color="isLink">Link</Button> 
			<Button color="isPrimary">Primary</Button> 
			<Button color="isInfo">Info</Button> 
			<Button color="isSuccess">Success</Button> 
			<Button color="isWarning">Warning</Button> 
			<Button color="isDanger">Danger</Button>
      	</section>
      	<section className="section">
			<Button size="isSmall">Small</Button> 
			<Button>Normal</Button> 
			<Button size="isMedium">Medium</Button> 
			<Button size="isLarge">Large</Button> 
      	</section>
      	<section className="section">
			<Button buttonStyle="isOutlined">Outlined</Button> 
			<Button buttonStyle="isOutlined" color="isPrimary">Outlined</Button> 
			<Button buttonStyle="isOutlined" color="isInfo">Outlined</Button> 
			<Button buttonStyle="isOutlined" color="isSuccess">Outlined</Button> 
			<Button buttonStyle="isOutlined" color="isDanger">Outlined</Button> 
      	</section>
      	<section className="section">
			<Button state="isLoading">Loading</Button> 
			<Button state="isLoading" color="isPrimary">Loading</Button> 
			<Button state="isLoading" color="isInfo">Loading</Button> 
			<Button state="isLoading" color="isSuccess">Loading</Button> 
			<Button state="isLoading" color="isDanger">Loading</Button> 
      	</section>
      	<section className="section">
			<Button state="isActive">Active</Button> 
			<Button state="isActive" color="isPrimary">Active</Button> 
			<Button state="isActive" color="isInfo">Active</Button> 
			<Button state="isActive" color="isSuccess">Active</Button> 
			<Button state="isActive" color="isDanger">Active</Button> 
      	</section>
      	<section className="section">
			<Button state="isDisabled">Disabled</Button> 
			<Button state="isDisabled" color="isPrimary">Disabled</Button> 
			<Button state="isDisabled" color="isInfo">Disabled</Button> 
			<Button state="isDisabled" color="isSuccess">Disabled</Button> 
			<Button state="isDisabled" color="isDanger">Disabled</Button> 
      	</section>
      	<section className="section">
			<Button icon="fa fa-github">GitHub</Button> 
			<Button icon="fa fa-twitter" color="isPrimary">Twitter</Button> 
			<Button icon="fa fa-check" color="isSuccess">Save</Button> 
			<Button icon="fa fa-times" color="isDanger" isIconRight>Delete</Button> 
      	</section>
      	<section className="section">
			<Title size="is1">Title</Title>
			<Title size="is2">Title</Title>
			<Title size="is3">Title</Title>
			<Title size="is4">Title</Title>
			<Title size="is5">Title</Title>
			<Title size="is6">Title</Title>
      	</section>
      	<section className="section">
			<Cards>
		        <CardHeader>
					<CardImage>
						<Image src="http://placehold.it/300x225" ratio="is4By3"/>
					</CardImage>
		        </CardHeader>
		        <CardContent>
			    	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">#css</a> <a href="#">#responsive</a>
			    	<small>11:09 PM - 1 Jan 2016</small>
				</CardContent>
				<CardFooter>
					<CardFooterItem>Save</CardFooterItem>
					<CardFooterItem>Edit</CardFooterItem>
					<CardFooterItem>Delete</CardFooterItem>
				</CardFooter>
			</Cards>
      	</section>
      	<section className="section">
			<Cards isFullwidth>
				<CardHeader>
					<CardHeaderTitle>
						Component
					</CardHeaderTitle>
					<CardHeaderIcon icon="fa fa-angle-down" />
				</CardHeader>
				<CardContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">#css</a> <a href="#">#responsive</a>
					<small>11:09 PM - 1 Jan 2016</small>
				</CardContent>
				<CardFooter>
					<CardFooterItem>Save</CardFooterItem>
					<CardFooterItem>Edit</CardFooterItem>
					<CardFooterItem>Delete</CardFooterItem>
				</CardFooter>
			</Cards>
      	</section>
        <section className="section">
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
        </section>
        <section className="section" style={{ width: '480px' }}>
			<Image src="http://placehold.it/16x16" size="is16X16" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/24x24" size="is24X24" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/32x32" size="is32X32" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/64x64" size="is64X64" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/128x128" size="is128X128" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/256x256" size="is256X256" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/480x480" ratio="isSquare" style={{ marginBottom: '5px' }} />
			<Image src="http://placehold.it/480x320" ratio="is3By2" style={{ marginBottom: '5px' }} />
        </section>
      </div>);
  }
}

