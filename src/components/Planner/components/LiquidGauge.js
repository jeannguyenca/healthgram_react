import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import React, { Component } from "react";
import LiquidFillGauge from "react-liquid-gauge";

class LiquidGauge extends Component {
  render() {
    const radius = 100;
    const interpolate = interpolateRgb(
      this.props.startColor,
      this.props.endColor
    );
    const fillColor = interpolate(this.props.value / 100);
    // const gradientStops = [
    //  {
    //   key: '0%',
    //   stopColor: color(fillColor).darker(0.5).toString(),
    //   stopOpacity: 1,
    //   offset: '0%'
    //  },
    //  {
    //   key: '50%',
    //   stopColor: fillColor,
    //   stopOpacity: 0.75,
    //   offset: '50%'
    //  },
    //  {
    //   key: '100%',
    //   stopColor: color(fillColor).brighter(0.5).toString(),
    //   stopOpacity: 0.5,
    //   offset: '100%'
    //  }
    // ];

    return (
      <LiquidFillGauge
        // style={{ margin: '0 10px' }}
        width={radius * 1.2}
        height={radius * 1.2}
        value={Math.round(this.props.percentage)}
        percent={this.props.unit}
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={props => {
          // const value = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels
          };
          const percentStyle = {
            fontSize: textPixels * 0.6
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {Math.round(this.props.value)}
              </tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={3}
        //  gradient
        //  gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor
        }}
        waveStyle={{
          fill: fillColor
        }}
        textStyle={{
          fill: color("#444").toString(),
          fontFamily: "Arial"
        }}
        waveTextStyle={{
          fill: color("#fff").toString(),
          fontFamily: "Arial"
        }}
      />
    );
  }
}

export default LiquidGauge;
