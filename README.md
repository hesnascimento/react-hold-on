# react-hold-on
A React translate of jquery HoldOn.js plugin.
HoldOn.js is a simple plugin that allows you to draw a div that covers all the screen
and will prevent that the user clicks on element on the background
while something is executed in the background.

## Getting started

```sh
# Install in project workspace

npm i react-hold-on

# Import function into your project

import holdOn from 'react-hold-on';

# Use basic theme

const options = {
  theme: 'sk-cube-grid',
  message: 'Signing You in... ',
  backgroundColor: '#1847B1',
  textColor: 'white'
};

holdOn.open(options);

# Close overlay when action is completed

holdOn.close();

# Available Themes

- sk-rect
- sk-bounce
- sk-folding-cube
- sk-circle
- sk-dot
- sk-bounce
- sk-falding-circle
- sk-cube-grid
- custom (then the message setting will be available)

# Select Theme

HoldOn.open({
  theme:"sk-cube-grid"
});

# Open a custom locker

var options = {
    theme:"custom",
    // If theme == "custom" , the content option will be available to customize the logo
    content:'<img style="width:80px;" src="https://www.google.de/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" class="center-block">',
    message:' some cool message for your user here ! Or where the logo is ! Your skills are the only limit.<br>; <input type="button" value="Close this Cover" onclick="HoldOn.close();">',
    backgroundColor:"#1847B1",
    textColor:"white"
};

HoldOn.open(options);

```

### License

MIT License. See the [LICENSE](LICENSE) file.