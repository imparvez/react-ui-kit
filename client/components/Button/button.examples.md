# Button

##### Import

`import Button from './Button';`

#### Color
```
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
```

#### Size
```
<section className="section">
  <Button size="isSmall">Small</Button> 
  <Button>Normal</Button> 
  <Button size="isMedium">Medium</Button> 
  <Button size="isLarge">Large</Button> 
</section>
```

#### Styles

##### Outline
```
<section className="section">
  <Button buttonStyle="isOutlined">Outlined</Button> 
  <Button buttonStyle="isOutlined" color="isPrimary">Outlined</Button> 
  <Button buttonStyle="isOutlined" color="isInfo">Outlined</Button> 
  <Button buttonStyle="isOutlined" color="isSuccess">Outlined</Button> 
  <Button buttonStyle="isOutlined" color="isDanger">Outlined</Button> 
</section>
```

#### States

##### Loading
```
<section className="section">
  <Button state="isLoading">Loading</Button> 
  <Button state="isLoading" color="isPrimary">Loading</Button> 
  <Button state="isLoading" color="isInfo">Loading</Button> 
  <Button state="isLoading" color="isSuccess">Loading</Button> 
  <Button state="isLoading" color="isDanger">Loading</Button> 
</section>
```

##### Active
```
<section className="section">
  <Button state="isActive">Active</Button> 
  <Button state="isActive" color="isPrimary">Active</Button> 
  <Button state="isActive" color="isInfo">Active</Button> 
  <Button state="isActive" color="isSuccess">Active</Button> 
  <Button state="isActive" color="isDanger">Active</Button> 
</section>
```

##### Disable
```
<section className="section">
  <Button state="isDisabled">Disabled</Button> 
  <Button state="isDisabled" color="isPrimary">Disabled</Button> 
  <Button state="isDisabled" color="isInfo">Disabled</Button> 
  <Button state="isDisabled" color="isSuccess">Disabled</Button> 
  <Button state="isDisabled" color="isDanger">Disabled</Button> 
</section>
```

##### Icon
```
<section className="section">
  <Button icon="fa fa-github">GitHub</Button> 
  <Button icon="fa fa-twitter" color="isPrimary">Twitter</Button> 
  <Button icon="fa fa-check" color="isSuccess">Save</Button> 
  <Button icon="fa fa-times" color="isDanger" isIconRight>Delete</Button> 
</section>
```
