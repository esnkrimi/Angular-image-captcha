import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import Konva from "konva"
@Component({
  selector: 'esn-image-captcha',
  templateUrl: 'esn-painter.component.html',
  styleUrls: ['esn-image-captcha.scss']
})
export class EsnImageCaptchaComponent implements OnChanges {
  @Output() result = new EventEmitter<boolean>();
  @Input() data;
  success = false
  ngOnChanges(): void {
    this.drawCrop(this.data.width, this.data.height, this, this.data)
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  drawCrop(X, Y, c: any, data) {
    let success = false
    let stage
    let layer
    let group
    let imageObj
    let imageObj2
    var preparingStages = () => {
      stage = new Konva.Stage({
        container: 'container',
        width: data.width,
        height: data.height,
      });
      layer = new Konva.Layer();
      stage.add(layer);
    }
    preparingStages()

    var backgroundImage = () => {
      imageObj2 = new Image();
      imageObj2.onload = function () {
        var yoda2 = new Konva.Image({
          x: 0,
          y: 0,
          image: imageObj2,
        });
        layer.add(yoda2);
      };
      imageObj2.src = data.captchaImageAddress;
    }
    backgroundImage()

    let X1 = this.getRandomInt(data.width / 2)
    let Y1 = this.getRandomInt(data.height / 2)
    imageObj = new Image();
    imageObj.onload = function () {
      var yoda = new Konva.Image({
        x: X1,
        y: Y1,
        image: imageObj,
      });
      yoda.cache();
      yoda.filters([Konva.Filters.Invert]);
      group = new Konva.Group({
        offsetX: 100,
        offsetY: 100,
        clip: {
          x: X,
          y: Y,
          width: data.clipWidth,
          height: data.cliHeight,
        },
        opacity: 1,
        draggable: true,
      });
      group.add(yoda);
      layer.add(group);

      let dragManegement = () => {
        return group.on('dragend', async (e) => {
          if (Math.abs(Math.abs(group.attrs['x'] - 100) - X1) < data.precision)
            if (Math.abs(Math.abs(group.attrs['y'] - 100) - Y1) < data.precision) {
              c.success = true
              group.setDraggable(false)
              c.result.emit(true);
              //     
              var anim = new Konva.Animation(function (frame) {
                group.x(
                  100 - X1
                );
                group.y(
                  100 - Y1
                );
              }, layer);
              anim.start();
              //
              return success
            }
          c.result.emit(false);
          return false
        })
      }
      dragManegement()
    };
    setTimeout(() => {
      imageObj.src = data.captchaImageAddress;
    }, 1000);

  }
}

