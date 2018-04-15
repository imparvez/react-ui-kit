# Card

##### Import

```
import Cards from './Cards';
import CardContent from './Cards/CardContent';
import CardHeader from './Cards/CardHeader';
import CardHeaderTitle from './Cards/CardHeaderTitle';
import CardHeaderIcon from './Cards/CardHeaderIcon';
import CardImage from './Cards/CardImage';
import Image from './Image';
import CardFooter from './Cards/CardFooter';
import CardFooterItem from './Cards/CardFooterItem';
```

#### Card
```
<Cards>
	<CardHeader>
		<CardImage>
			<Image src="http://placehold.it/300x225" ratio="is4By3"/>
		</CardImage>
	</CardHeader>
	<CardContent>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis 			mauris. <a href="#">#css</a> <a href="#">#responsive</a>
		<small>11:09 PM - 1 Jan 2016</small>
	</CardContent>
	<CardFooter>
		<CardFooterItem>Save</CardFooterItem>
		<CardFooterItem>Edit</CardFooterItem>
		<CardFooterItem>Delete</CardFooterItem>
	</CardFooter>
</Cards>
```
