---
title: Animations
order: 0
---
Pretty Checkbox animations are exposed through the `animation` prop. Current supported animations are:

* `smooth`
* `jelly`
* `tada`
* `rotate`
* `pulse`

Note: all animations are handled by [pretty-checkbox](https://github.com/lokesh-coder/pretty-checkbox/blob/master/src/scss/essentials/_keyframes.scss) using CSS.

##### Smooth
```plain
<>
    <Checkbox shape="round" color="primary" animation="smooth">Monday</Checkbox>
    <Checkbox shape="round" color="success" icon={<i className="mdi mdi-check" />} animation="smooth">Tuesday</Checkbox>
    <Checkbox color="danger-o" icon={<i className="mdi mdi-close" />} animation="smooth">Wednesday</Checkbox>
    <Checkbox shape="curve" style="thick" color="warning" animation="smooth">Thursday</Checkbox>
    <Checkbox shape="curve" style="thick" color="danger-o" animation="smooth">Friday</Checkbox>
</>
```

##### Jelly
```plain
<>
    <Checkbox shape="round" color="primary" icon={<i className="mdi mdi-check" />} animation="jelly">Interested</Checkbox>
    <Checkbox color="info-o" icon={<i className="mdi mdi-check-all" />} animation="jelly">All</Checkbox>
    <Checkbox shape="curve" color="danger" icon={<i className="mdi mdi-bug" />} animation="jelly">Bug</Checkbox>
</>
```

##### Tada
```plain
<>
    <Checkbox shape="round" color="primary-o" icon={<i className="mdi mdi-heart" />} animation="tada">Good</Checkbox>
    <Checkbox plain icon={<i className="mdi mdi-weather-night" />} animation="tada">Night</Checkbox>
    <Checkbox style="fill" color="danger" icon={<i className="mdi mdi-skull" />} animation="tada">Sweetheart</Checkbox>
</>
```

##### Rotate
```plain
<>
    <Checkbox color="success" icon={<i className="mdi mdi-check" />} animation="rotate">Friends</Checkbox>
    <Checkbox color="danger-o" icon={<i className="mdi mdi-close" />} animation="rotate">Family</Checkbox>
</>
```

##### Pulse
```plain
<>
    <Checkbox shape="round" color="success" icon={<i className="mdi mdi-check" />} animation="pulse">Friends</Checkbox>
    <Checkbox color="warning-o" animation="pulse">Family</Checkbox>
</>
```
